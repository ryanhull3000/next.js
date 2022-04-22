import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';

import {
    Heading,
    Paragraph,
    Anchor
} from '../components/base';

function User({data}) {
    const fullName = `${data.first_name} ${data.last_name}`;
    return (
        <>
            <Link href='/'><Anchor>Back</Anchor></Link>
            <div>
                <Heading>{fullName}</Heading>
                <Paragraph>
                    Email: <Anchor href={`mailto: ${data.email}`}>{data.email}</Anchor>
                </Paragraph>
                <Image src={data.avatar} alt={`Image of ${fullName}`} width={250} height={250} />
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    const res = await fetch(`http://localhost:3000/api/${query.slug}`);
    const user = await res.json();

    if (!user) {
        return {
            notFound: true
        }
    }

    return {
        props: user
    };
}

export default User;
