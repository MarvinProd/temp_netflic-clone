import React from 'react'
import './List.css'
import {AiOutlinePlus,AiOutlineClose} from 'react-icons/ai'

const List = ({title,text1,text2}) => {

    const[toggleMenu, setToggleMenu] = React.useState(false);

    return (

        <div className='app__listtop'>
            <div className='app__list'>
            <div className='svg__div' >
                <h1>
                {title}
            </h1>

            </div>
            <div className='svg__div'>
                {toggleMenu
                ?<AiOutlineClose color='#FFFFFF'  onClick={() => setToggleMenu(false) }/>
                :<AiOutlinePlus color='#FFFFFF' onClick={() => setToggleMenu(true) }/>        
                } 
            

            </div>

            

            
            
            </div>


            { toggleMenu && (
                <div className='app__list_dp'>

                <div className='svg__div' >
                    <p>
                        {text1}
                   </p>
                   <p>
                    {text2}
                  </p>

                </div>                 
                </div>
            )}

            


        </div>

    





           



    

    )
  
};

export default List