import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projecto para adicionar os servicos</p>
            <ProjectForm btnText={'Criar Projeto'}/>
        </div>
    )
}
export default NewProject