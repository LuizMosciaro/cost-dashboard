
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("https://localholst:5000/projects",{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify(project),
        }).then(
            resp => resp.json()
        ).then((data) => console.log(data),
            //redirect
            //history('/projects', { message: 'Projeto criado com sucesso!' })
        ).catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projecto para adicionar os servicos</p>
            <ProjectForm handleSubmit={createPost} btnText={'Criar Projeto'}/>
        </div>
    )
}
export default NewProject