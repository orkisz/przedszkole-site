import { graphql, StaticQuery } from 'gatsby';
import moment from 'moment';
import * as React from 'react';
import { useState } from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import { formatDate } from '../../utils/date';

const Calendar = () => {
  const [showPast, setShowPast] = useState(false);
  const handleShowPastChange = event => {
    setShowPast(event.target.checked);
  }
  return (
          <StaticQuery query={graphql`
          query EventsQuery {
            events {
              event {
                title
                start
                end
              }
            }
          }

          `}
                       render={data => {
                         const events = data.events.event
                                 .map(event => {
                                   const { start, end } = event;
                                   return {
                                     ...event,
                                     start: moment(start),
                                     end: end ? moment(end) : undefined
                                   }
                                 })
                                 .filter(({ start, end }) => {
                                   if (showPast) {
                                     return true;
                                   }
                                   const now = moment();
                                   return start.isAfter(now) || (end && end.isAfter(now));
                                 })
                                 .sort((a, b) => a.start.toDate() - b.start.toDate());
                         return (
                                 <MainLayout>
                                   <Header title="Kalendarium"/>
                                   <div className="container">
                                     <div className="columns">
                                       <div className="column is-8 is-offset-2">
                                         <label>
                                           <input className="mr-1"
                                                  type="checkbox"
                                                  checked={showPast}
                                                  onChange={handleShowPastChange}/>
                                           Pokaż przeszłe wydarzenia
                                         </label>
                                         {!!events.length && (<table className="table is-fullwidth is-striped mt-5">
                                                   <tbody>
                                                   {events.map(({ start, end, title }) => (
                                                                   <tr>
                                                                     <td className="has-text-right">
                                                                       {formatDate(start.toDate())}{end && ` - ${formatDate(end.toDate())}`}
                                                                     </td>
                                                                     <td>{title}</td>
                                                                   </tr>
                                                           )
                                                   )}
                                                   </tbody>
                                                 </table>
                                         )}
                                         {!events.length && (
                                                 <div className="has-text-centered mt-6 is-size-4 is-bold">Brak wydarzeń</div>
                                         )}
                                       </div>
                                     </div>
                                   </div>
                                 </MainLayout>
                         )
                       }}/>
  );
}

export default Calendar;
