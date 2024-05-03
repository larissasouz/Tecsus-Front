import Sidebar from '../../components/sidebar/sidebar'
import Title from '../../components/title/title'
import { BsBarChart }  from "react-icons/bs";


export default function DashboardAgua(){

        return(
        <div>
            <Sidebar/>
            <main className='page-container'>
                <Title name={"Dashboard"}>
                    <BsBarChart size={25} />
                </Title>
                <iframe data-testid="powerbi" title="relatoriowalas" height="800" src="https://app.fabric.microsoft.com/view?r=eyJrIjoiYjcwYzgzM2QtMDY0YS00YWNlLTlmNDEtYmZjMGEzZjMwNTRjIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
                </main>
        </div>
    )
}