import {
    Container,
    Button,
    Img,
    Tailwind,
    Html,
    Body,
    Section,
    Column,
    Row,
    Hr,
} from '@react-email/components'
import * as React from 'react'

interface EmailTemplateProps {
    firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <Html lang="en" dir="ltr">
        <Tailwind>
            <Body className="mx-auto min-h-full w-full bg-[#1b1b1b] text-center">
                <Container className="py-10">
                    <Img
                        src="https://res.cloudinary.com/dzmkarp2l/image/upload/v1712253771/1681930817507_l5ip94.jpg"
                        className="mx-auto h-24 w-24 rounded-xl"
                        alt="Logo"
                    />
                    <p className="text-sm font-semibold text-[#40be65]">
                        Ksham Innovation
                    </p>
                    <h1 className="text-2xl font-extrabold text-white">
                        Thanks for joining the early access.
                    </h1>
                    <Img
                        src="https://res.cloudinary.com/dzmkarp2l/image/upload/v1712253605/glass.0c02447d5baf7e6778c3_1_i7neh9.png"
                        className="mx-auto h-auto w-72"
                        alt="Product Image"
                    />
                    <p>
                        {
                            "We'll get in touch as soon as possible. Keep an eye on gmail."
                        }
                    </p>

                    <Section>
                        <Row className="px-4">
                            <Column className="w-fit rounded-md bg-[#757575] px-4 py-2 text-center">
                                <div
                                    style={{
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdsb2JlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAyYTE0LjUgMTQuNSAwIDAgMCAwIDIwIDE0LjUgMTQuNSAwIDAgMCAwLTIwIi8+PHBhdGggZD0iTTIgMTJoMjAiLz48L3N2Zz4=" />
                                </div>
                                <div
                                    style={{
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Button
                                        href="https://kshaminnovation.in/"
                                        className="pl-1 text-white"
                                    >
                                        Website
                                    </Button>
                                </div>
                            </Column>
                            <Column className="w-fit rounded-md bg-[#f000f0] px-4 py-2 text-center">
                                <div
                                    style={{
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluc3RhZ3JhbSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiByeD0iNSIgcnk9IjUiLz48cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIvPjxsaW5lIHgxPSIxNy41IiB4Mj0iMTcuNTEiIHkxPSI2LjUiIHkyPSI2LjUiLz48L3N2Zz4=" />
                                </div>
                                <div
                                    style={{
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Button
                                        href="https://www.instagram.com/ksham_innovation/"
                                        className="pl-1 text-white"
                                    >
                                        Instagram
                                    </Button>
                                </div>
                            </Column>
                            <Column className="w-fit rounded-md bg-[#1595E7] px-4 py-2 text-center">
                                <div
                                    style={{
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmtlZGluIj48cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iOSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PC9zdmc+" />
                                </div>
                                <div
                                    style={{
                                        display: 'table-cell',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    <Button
                                        href="https://www.linkedin.com/company/ksham-innovation"
                                        className="pl-1 text-white"
                                    >
                                        Linkedin
                                    </Button>
                                </div>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
)
