import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io'
import { DiReact } from 'react-icons/di'

// import {  } from 'react-icons/si'

import React from 'react'

export default function index({iconos}) {

    

    return (
        <div>
            <List spacing={3}>
               
               {iconos?.map(item => (
                <ListItem>
                    <ListIcon as={item.icono} color='green.500' />
                    {item.text}
                </ListItem>
                
               ))}
                
            </List>
        </div>
    );
}
