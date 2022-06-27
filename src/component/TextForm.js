import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState('');

    const handelUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelCamelClick = () =>{
        let newText = text.split(" ").map(currentValue =>{
            let newText = currentValue[0].toUpperCase()+currentValue.slice(1);
            return newText;
        })
        setText(newText.join(" "));
    }
    const handelCopyClick = (e) =>{
        const area = document.querySelector('#textArea')
        area.select();
        document.execCommand('copy');
        // let newText =  '';
        // setText(newText);
        alert('your text is copied');
    }

    const handelSpeakClick = () =>{
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        // setText(newText);
    }
    const handelReverseClick = () =>{
        let newText =  text.split("");
        let newArr = newText.reverse();
        let joinArr = newArr.join("");
        setText(joinArr);
    }
    const handelTextClick = () =>{
        const regex = /[0-9/A-Z/a-z/ /]/g;
        const letter = text.match(regex);
        const newText = letter.join("");
        setText(newText);
    }
    const handelNumbeClick = () =>{
        const regex = /[0-9/ /]/g;
        const digit = text.match(regex);
        const newText = digit.join("")
        setText(newText);
    }
    const handelSpaceClick = () =>{
        const newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }

    const handelClearClick = () =>{
        let newText =  '';
        setText(newText);
    }

    const handelDecodeClick = () =>{
        // console.log("UpperCase was changed");
        let newtext = atob(text);
        setText( newtext);
    }
    const handelEncodeClick = () =>{
        // console.log("UpperCase was changed");
        setText(btoa(text));
    }

    const handelDuplicateClick = () =>{
        let wordArr = text.split(" ")
        let newText = wordArr.filter((item,pos)=>{
            return wordArr.indexOf(item)===pos;
        })
        newText = newText.join(" ");
        setText(newText);
    }

    // const handelReplaceClick = () =>{
    //     let repVal =  prompt("Enter value to be replaced :");
    //     // let tobeReplaced = new RegExp(repVal,'g');
    //     // let tobeReplaced = new RegExp(repVal,/ \([\s\S]*?\)/g);
    //     let toReplaceVal =  prompt("Enter value which you want to replace :")
    //     // let newText = (tobeReplaced,toReplaceVal);
    //     const newText = text.replace("tobeReplaced", "toReplaceVal");
    //     setText(newText);
    // }
    
    const handleOnChange = (event) =>{
        // console.log("UpperCase was changed");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container' style ={{color: props.mode === 'light'?'black' : 'white'}}>
            {/* <form> */}
                <h1>{props.heading}</h1>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div> */}
                {/* <div className="input-group my-3"> */}
                    {/* <label for="textArea" class="form-label">Email address</label><br/> */}
                    {/* <span className="input-group-text">With textarea</span> */}
                    <textarea className="form-control" aria-label="With textarea" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode === 'light'?'white' : '#656b75',color: props.mode === 'light'?'black' : 'white'}} id='textArea' rows="6"></textarea>
                {/* </div> */}
                <button type="submit" className="btn btn-primary m-2" onClick={handelUpClick}>Upper Case</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelLowerClick}>Lower Case</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelCamelClick}>Capitalized</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelSpeakClick}>Speak</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelReverseClick}>Reverse</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelTextClick}>Extract Text</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelNumbeClick}>Extract Number</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelSpaceClick}>Remove Extra Space</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelCopyClick}>Copy</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelEncodeClick}>Encode</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelDecodeClick}>Decode</button>
                <button type="submit" className="btn btn-primary m-2" onClick={handelDuplicateClick}>Duplicate Remove</button>
                {/* <button type="submit" className="btn btn-primary m-2" onClick={handelReplaceClick}>Replace</button> */}
                <button type="submit" className="btn btn-primary m-2" onClick={handelClearClick}>Clear</button>
            {/* </form> */}
        </div>
        <div className="cintainer" style ={{color: props.mode === 'light'?'black' : 'white'}}>
            <h1>Text summary</h1>
            <p> <b>{text.split(" ").length-1}</b> words and <b>{text.length}  </b> character in your  text</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h3>{text.length>0 ? text : "Enter something in above textbox to preview here"}</h3>
        </div>
        </>
    )
}
