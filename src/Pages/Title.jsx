import { FaArrowRight } from 'react-icons/fa';

function Title(props) {
    return (
        <div className='mb-100'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button class="btn btn-info">Read more <span className='px-2'><FaArrowRight></FaArrowRight></span></button>
        </div>
    )
    
}
export default Title;