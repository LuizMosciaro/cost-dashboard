import {useEffect, useState} from 'react'

import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitButton from '../form/SubmitButton.js'

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {

    const [categories,setCategories] = useState([])

    /** OBS: Dessa forma fica num loop infiniito de requests, usar o useEffect 
     * fetch("http://localhost:5000/categories",{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },    
    })  
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err)=> console.log(err)) */

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },    
    })  
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err)=> console.log(err))
    }, []
    )

    return (
        <form className={styles.form}>
            <Input
                type='text' 
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto' />
            <Input
                type='number' 
                text='Orcamento'
                name='budget'
                placeholder='Insira o nome do projeto' />
        <Select 
            name='category_id' 
            text='Selecione uma categoria'
            options={categories}
        />
        <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm