import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import { useHistory } from 'react-router-dom';

import './styles.css'
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')
    const [scheduleItems, setScheduleItems] = useState( [
        {week_day: 0, from:'', to:''},
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from:'',
                to:'',
            }
        ]);
    }

    function handleCreateClasses(e: FormEvent){
        e.preventDefault();
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule:scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!')
        })

        console.log({
            name, avatar, whatsapp, bio, subject, cost, scheduleItems
        })
    }

    function setScheduleItemValue(scheduleItemIndex: number, scheduleItemName: string, scheduleItemValue: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === scheduleItemIndex){
                return {...scheduleItem, [scheduleItemName]: scheduleItemValue}
            }
            return scheduleItem;
        }) 
        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title='Que incrivel que voce quer dar aulas.'
            description='O primeiro passo e preencher esse formulario de inscricao'/>

            <main>
                <form onSubmit={handleCreateClasses}>
                    <fieldset>
                        <legend> Seus dados</legend>

                        <Input name='name' label='Nome Completo' value={name} onChange={(e) => { setName(e.target.value)}}/>
                        <Input name='avatar' label='Avatar' value={avatar} onChange={(e) => { setAvatar(e.target.value)}}/>
                        <Input name='whatsapp' label='Whatsapp' value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value)}}/>
                        <Textarea name='bio' label='Biografia' value={bio} onChange={(e) => { setBio(e.target.value)}}/>

                    </fieldset>

                    <fieldset>
                        <legend> Sobre a aula</legend>

                        <Select 
                        name='subject' 
                        label='Materia'
                        options={[
                            {id:'Artes', label:'Artes'},
                            {id:'Bioologia', label:'Biologia'},
                            {id:'Fisica', label:'Fisica'},
                            {id:'Math', label:'Math'},
                            {id:'Quimica', label:'Quimica'},
                            {id:'Portugues', label:'Portugues'},
                            {id:'Filosofia', label:'Filosofia'},
                        ]}
                        value={subject} onChange={(e) => { setSubject(e.target.value)}}
                        />
                        <Input name='cost' label='Custo da sua hora por aula' value={cost} onChange={(e) => { setCost(e.target.value)}}/>

                    </fieldset>


                    <fieldset>
                        <legend> Horarios Disponiveis
                            <button type='button' onClick= {addNewScheduleItem}>
                                    + novo horario
                                </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name='week_day' 
                                    label='Dia da Semana'
                                    value={scheduleItem.week_day}
                                    onChange= {e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                <Input name='from' label='Das' type='time'value={scheduleItem.from} onChange= {e => setScheduleItemValue(index, 'from', e.target.value)}/>
                                <Input name='to' label='Ate' type='time' value={scheduleItem.to} onChange= {e => setScheduleItemValue(index, 'to', e.target.value)}/>
                            </div>
                            )
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante: <br/>
                            Preencha todos os dados
                        </p>
                        <button type='submit'> Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>

    )
}

export default TeacherForm;
