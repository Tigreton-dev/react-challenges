import { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react';
import Code from './Code'
import Solution from './Solution'
import DescriptionChallenge from './DescriptionChallenge'

interface Props {
    step: number,
    challenge: string
}

const Content = ({ step, challenge }: Props) => {
    const [Component, setComponent] = useState<null | JSXElementConstructor<any>>(null)
    const [challengeDescription, setDescription] = useState('')
    const [challengeCode, setCode] = useState('')

    useEffect(() => {
        const Challenge = lazy(() => import(`../challenges/${challenge}/Demo`));
        setComponent(Challenge)
    }, [challenge])

    useEffect(() => {
        (async () => {
            const { description, code } = await import(`../challenges/${challenge}/ChallengeInfo`)
            setDescription(description)
            setCode(code)
        })()
    }, [challenge])

    return (
        <div>
            {step === 0 && <DescriptionChallenge description={challengeDescription} />}
            {step === 1 && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            )}
            {step === 2 && <Code code={challengeCode} />}
            {step === 3 && <Solution />}
        </div>
    )
}

export default Content