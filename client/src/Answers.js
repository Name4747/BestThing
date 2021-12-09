import React, {useState, useEffect} from 'react'

const Answers = () => {

    const [answerList,setAnswerList] = useState([
        {
            id: 1,
            content: "bmw",
            score: 0,
            used: false
        },
        {
            id: 2,
            content: "ford",
            score: 0,
            used: false
        },
        {
            id: 3,
            content: "gm",
            score: 0,
            used: false
        },
        {   
            id: 4,
            content: "mercedes",
            score: 0,
            used: false
        },
        {
            id: 5,
            content: "honda",
            score: 0,
            used: false
        },
        {
            id: 6,
            content: "tesla",
            score: 0,
            used: false
        },
        {
            id: 7,
            content: "toyota",
            score: 0,
            used: false
        },
        {
            id: 8,
            content: "crysler",
            score: 0,
            used: false
        }
    ])

    /*useEffect(() => {
        fetch('/things')
            .then(res => res.json())
            .then(data => {
                setAnswerList(data)
            })
    },[])*/

    const [a1,setA1] = useState(answerList[Math.floor(Math.random()*answerList.length)])

    const [a2,setA2] = useState(answerList[Math.floor(Math.random()*answerList.length)])

    function getNextAnswer(answer) {

        if(answer == a1) {
            answerList[a2.id-1].used = true
            console.log(a2)
            for (var i = 0; i < answerList.length; i++) {
                const randomThing = answerList[Math.floor(Math.random()*answerList.length)]
                if(randomThing.used == false) {
                    setA2(randomThing)
                    break;
                }
            }
        }
        else if(answer == a2) {
            answerList[a1.id-1].used = true
            console.log(a1)
            for (var i = 0; i < answerList.length; i++) {
                const randomThing = answerList[Math.floor(Math.random()*answerList.length)]
                if(randomThing.used == false) {
                    setA1(randomThing)
                    break;
                }
            }
        }
    }

    return (
        <>
        <div onClick={() => {getNextAnswer(a1)}} className="answers" id="a1">
          <span>{a1.content}</span>
        </div>

        <div onClick={() => {getNextAnswer(a2)}} className="answers" id="a2">
          <span>{a2.content}</span>
        </div>
        </>
    )

}

export default Answers
