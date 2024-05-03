import './title.css'

export default function Title({children, name}){
    return(
        <div className='title' data-testid="title">
            {children}
            <span>{name}</span>
        </div>
    )   
}