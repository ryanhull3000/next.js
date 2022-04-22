import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import {
    Heading,
    UL,
    LI,
    Paragraph,
    Anchor
} from '../components/base';

function Home({data}) {
    return (
        <UL>
            {
                data.map(user => {
                    const slug = `/${user.first_name.toLowerCase()}-${user.last_name.toLowerCase()}-${user.id}`;
                    const fullName = `${user.first_name} ${user.last_name}`;
                    return (
                        <LI key={user.id}>
                            <Heading>
                                <Link href={slug}>
                                    <Anchor>{fullName}</Anchor>
                                </Link>
                            </Heading>
                            <Paragraph>
                                <Anchor href={`mailto: ${user.email}`}>{user.email}</Anchor>
                            </Paragraph>
                            <Link href={slug}>
                                <Anchor>
                                    <Image src={user.avatar} alt={`An image of ${fullName}`} width={200} height={200} />    
                                </Anchor>
                            </Link>
                            <hr />
                        </LI>
                    )
                })
            }
        </UL>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api');
    const users = await res.json();

    if (!users) {
        return {
            notFound: true,
        }
    }

    return {
        props: users
    }
}

export default Home;
