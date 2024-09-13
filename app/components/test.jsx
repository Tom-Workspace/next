'use client'
import React, { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Ahmed } from '../page'
import axios from 'axios'

const Tom = () => {
    let [T, setT] = useState(0)
    let [R, setR] = useState(0)
    let reef = useRef(null)
    let rand = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    let data = useContext(Ahmed)

    let h = useMemo(() => {
        return (
            <div style={{ backgroundColor: rand, width: '100px', height: '100px' }}>c</div>
        )
    }, [T, R])

    useEffect(() => {
        console.log(reef);
    }, [])

    let val = 0
    let handler = (state, action) => {
        switch (action) {
            case 'p':
                return state + 1
            case 'm':
                return state - 1
            case 'r':
                return 0
            default:
                return state
        }
    }

    let [state, dispatch] = useReducer(handler, val)

    let fetch = async () => {
        try {
            let ax = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            return ax.data
        } catch (error) {
            console.error(error)
            return []
        }
    }

    let [D, setD] = useState([])

    const handleFetch = async () => {
        let data = await fetch()
        setD(data)
    }

    return (
        <div style={{ height: '100vh', width: '100%', fontSize: '30px' }}>
            {h}
            <h1 onClick={handleFetch}>fetch</h1>
            {
                D.length > 0 ? (
                    D.map((e, i) => (
                        <p key={i}>{e.title}</p>
                    ))
                ) : (
                    <p>No data fetched</p>
                )
            }
        </div>
    )
}

export default Tom;
