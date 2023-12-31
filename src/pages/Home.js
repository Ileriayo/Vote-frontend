import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import useNomineecontext from '../hooks/useNomineecontext';
const Home = () => {
    const [candidates, setCandidates] = useState()
    const [nominees, setNominees] = useState({})
    const [error, setError] = useState()
    const { dispatch } = useNomineecontext()
    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch('http://localhost:8000/api/getcandidate')

            const json = await response.json()
            if (response.ok) {
                setCandidates(json)
            }
        }
        fetchdata()
    }, [])

    const handleNominee = (event, position) => {
        const nominee = event.target.value
        const updatedNominees = (include) => ({ ...include, [position]: nominee })
        setNominees(updatedNominees)
        console.log(nominees)
    }

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:8000/api/nominees', {
            method: 'POST',
            body: JSON.stringify(nominees),
            headers: { 'Content-Type': 'application/json' }
        })

        const json = await response.json()

        if(json === 'ok'){
            console.log('true')
            alert('nomination successful')
            dispatch({ type: 'nominated', payload: nominees })
        }
        

    }
    return (
        <div className="p-3">
            {candidates && candidates.map((item) => (
                <div className="" key={item._id}>
                    <p className="lead">{item.position}</p>
                    <select className='d-block w-25 drop-down mb-3' onChange={(e) => handleNominee(e, item.position)}>
                        <option value="" >Nominate condidate</option>
                        <option value={item.candidate1}>{item.candidate1}</option>
                        <option value={item.candidate2}>{item.candidate2}</option>
                        <option value={item.candidate3}>{item.candidate3}</option>
                        <option value={item.candidate4}>{item.candidate4}</option>
                        <option value={item.candidate5}>{item.candidate5}</option>
                    </select>
                </div>
            ))
            }

            <Button onClick={handleSubmit} className='btn-small'>Nominate</Button>
        </div >
    );
}

export default Home;