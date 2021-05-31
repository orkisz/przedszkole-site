import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';

const Documents = () => {
  return (
          <MainLayout>
            <Header title="Dokumenty"/>
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <ul>
                    <li>
                      <a href="/KARTA ZGŁOSZENIA DZIECKA.pdf"
                         target="_blank">
                        <FontAwesomeIcon className="mr-3"
                                         icon={faDownload}/>Karta zgłoszenia
                      </a>
                    </li>
                    <li>
                      <a href="/UPOWAŻNIENIE-DO-ODBIORU-DZIECKA-Z-PRZEDSZKOLA-NIEPUBLICZNEGO.pdf"
                         target="_blank">
                        <FontAwesomeIcon className="mr-3"
                                         icon={faDownload}/>Upoważnienie do odbioru dziecka
                      </a>
                    </li>
                    <li>
                      <a href="/STATUT PRZEDSZKOLA SIÓSTR SŁUŻEBNICZEK W RUDAWIE.pdf"
                         target="_blank">
                        <FontAwesomeIcon className="mr-3"
                                         icon={faDownload}/>Statut
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </MainLayout>
  )
}

export default Documents;
