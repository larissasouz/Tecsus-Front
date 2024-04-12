import Sidebar from '../../components/sidebar/sidebar'
import Title from '../../components/title/title'
import { BsBarChart }  from "react-icons/bs";


export default function Dashboard(){

        return(
        <div>
            <Sidebar/>
            <main className='page-container'>
                <Title name={"Dashboard"}>
                    <BsBarChart size={25} />
                </Title>
            </main>
        </div>
    )
}