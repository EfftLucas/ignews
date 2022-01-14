import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

export default function Post() {
    return(
        <>
        
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })

}