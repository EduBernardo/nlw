import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'

function Teacheritem () {
    return (
        <article className='teacher-item'>
        <header>
            <img src="https://avatars2.githubusercontent.com/u/39711522?s=460&u=0a449fbf27b1e8aa30f2fde30fcb9a13e42bf0bf&v=4" alt="Eduardo Bernardo"/>
            <div>
                <strong>Eduardo Bernardo</strong>
                <span>T.I.</span>
            </div>                        
        </header>
        <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br/><br/> 
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preco/hora
                <strong>R$ 50,00</strong>
            </p>
            <button type='button'>
                <img src={whatsappIcon} alt="whats app"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default Teacheritem;