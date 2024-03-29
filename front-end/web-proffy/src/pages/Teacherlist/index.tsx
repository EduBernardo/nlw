import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import Teacheritem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes sao os proffys disponiveis.'>
            <form id="search-teachers">

                <div className="input-block">
                    <label htmlFor="subject">Materia</label>
                    <input type="text" id='subject'/>
                </div>

                <div className="input-block">
                    <label htmlFor="week-day">Dia da Semana</label>
                    <input type="text" id='week-day'/>
                </div>

                <div className="input-block">
                    <label htmlFor="time">Hora</label>
                    <input type="text" id='time'/>
                </div>

            </form>
            </PageHeader>

            <main>
                <Teacheritem/>
                <Teacheritem/>
                <Teacheritem/>
                <Teacheritem/>

            </main>
        </div>


    )
}

export default TeacherList;
