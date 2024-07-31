import './frequentQuestion.css'
import { ReactNode } from 'react'

interface questionProps {
    question: string
    desc: ReactNode
    options?: string[]
}

export const FrequentQuestion = (props: questionProps) => {
    const { question, desc, options } = props
    return (
        <>
            <div className="col-md-12">
                <h2 className='freq_ques_title'>{question}</h2>
                <h6 className='freq_ques_desc'>{desc}</h6>
                <ol className='freq_ques_ol'>
                    {
                        options?.map((option, index) => {
                            return (
                                <li key={index} className='freq_ques_li'>{option}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}
