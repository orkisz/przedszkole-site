import { graphql, StaticQuery } from 'gatsby';
import moment from 'moment';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import { formatDate } from '../../utils/date';

const Calendar = () => {
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
                       render={data => (
                               <MainLayout>

                                 <Header title="Kalendarium"/>
                                 <div className="container">
                                   <div className="columns">
                                     <div className="column is-8 is-offset-2">
                                       <table className="table is-fullwidth is-striped">
                                         <tbody>
                                         {data.events.event
                                                 .map(event => {
                                                   const { start, end } = event;
                                                   return {
                                                     ...event,
                                                     start: moment(start),
                                                     end: end ? moment(end) : undefined
                                                   }
                                                 })
                                                 .filter(({ start, end }) => {
                                                   const now = moment();
                                                   return start.isAfter(now) || (end && end.isAfter(now));
                                                 })
                                                 .sort((a, b) => a.start.toDate() - b.start.toDate())
                                                 .map(({ start, end, title }) => {
                                                   return (
                                                           <tr>
                                                             <td className="has-text-right">
                                                               {formatDate(start.toDate())}{end && ` - ${formatDate(end.toDate())}`}
                                                             </td>
                                                             <td>{title}</td>
                                                           </tr>
                                                   )
                                                 })}
                                         </tbody>
                                       </table>
                                     </div>
                                   </div>
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Calendar;
