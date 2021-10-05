import React, { useEffect, useState } from 'react'
import { bookApi } from '../../services/api'
import { Container, Header, SearchInput } from './style'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("harry potter")
    useEffect(() => {
        getBooksData()
    }, [])

    async function getBooksData(){
        bookApi.get(`/books/v1/volumes?q=${searchQuery}`)
    }
    return (
        <Container>
            <Header>
                <SearchInput/>
            </Header>
            PAGINA HOME
            
        </Container>
    )
}
