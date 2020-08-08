import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import Teacheritem, {ITeacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherList() {
const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

async function searchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('classes',{
        params:{
            subject, 
            week_day, 
            time
        }
    });
    setTeachers(response.data);

}

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes sao os proffys disponiveis.'>
            <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                    name='subject' 
                    label='Materia'
                    value={subject}
                    onChange= { (e) => { setSubject(e.target.value)}}
                    options={[
                        {id:'Artes', label:'Artes'},
                        {id:'Bioologia', label:'Biologia'},
                        {id:'Fisica', label:'Fisica'},
                        {id:'Math', label:'Math'},
                        {id:'Quimica', label:'Quimica'},
                        {id:'Portugues', label:'Portugues'},
                        {id:'Filosofia', label:'Filosofia'},
                    ]}
                />
                <Select 
                    name='week_day' 
                    label='Dia da Semana'
                    value={week_day}
                    onChange= { (e) => { setWeekDay(e.target.value)}}
                    options={[
                        {id:'0', label:'Domingo'},
                        {id:'1', label:'Segunda'},
                        {id:'2', label:'Terca'},
                        {id:'3', label:'Quarta'},
                        {id:'4', label:'Quinta'},
                        {id:'5', label:'Sexta'},
                        {id:'6', label:'Sabado'},
                    ]}
                />
                <Input name='time' label='Hora' type='time'                     
                value={time} onChange= { (e) => { setTime(e.target.value)}}/>

                <button type='submit'>
                    Buscar
                </button>
            </form>
            </PageHeader>

            <main>
                { teachers.map( (teacher: ITeacher) =>{
                    return <Teacheritem key={teacher.id} teacher = {teacher}/>
                } ) }

            </main>
        </div>


    )
}

export default TeacherList;
