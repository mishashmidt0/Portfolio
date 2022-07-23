import ReactTypingEffect from 'react-typing-effect';

import {v4 as uuidv4} from "uuid"
export const TypeEffect = () => {
        return (
            <>
                <ReactTypingEffect
                    text={["Пономаренко Михаил.", "Михаил"]}
                    eraseSpeed={100}
                    eraseDelay={35000}
                    typingDelay={300}
                    cursorRenderer={cursor => <span>{cursor}</span>}
                    displayTextRenderer={(text) => {
                        return (
                            <>
                                {text.split('').map((char) => {
                                    return (
                                        <span
                                            key={uuidv4()}
                                            style={ { color: '#5557d7'}}
                                        >{char}</span>
                                    );
                                })}
                            </>
                        );
                    }}
                />
            </>
        );
    };