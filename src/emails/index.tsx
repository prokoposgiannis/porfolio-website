// import {
//   Body,
//   Container,
//   Column,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Text,
// } from "@react-email/components";
// import * as React from "react";

// export const EmailTemplate = ({ name }) => (
//   <Html>
//     <Head />
//     <Preview>Thank you for your message!</Preview>
//     <Body style={main}>
//       <Container style={container}>
//         <Hr style={global.hr} />
//         <Section style={message}>
//           <Img
//             src={
//               "https://firebasestorage.googleapis.com/v0/b/portfolio-website-fd5dd.appspot.com/o/face.png?alt=media&token=3a18915d-7ad1-4158-a9f7-2bdd894bae7b"
//             }
//             width="140"
//             height="200"
//             alt="Nike"
//             style={{ margin: "auto" }}
//           />
//           <Heading style={global.heading}>
//             Thank you for your message, {name ?? "anonymous"}!
//           </Heading>
//           <Text style={global.text}>
//             One of John's personalities will reply to you shortly, and we really
//             hope to be the clever one. Do note that we really appreciate your
//             interest.
//           </Text>
//         </Section>
//         <Section style={paddingY}>
//           <Row style={categories.container}>
//             <Column align="center">
//               <Link
//                 href="https://www.linkedin.com/in/john-prokopos"
//                 style={categories.text}
//               >
//                 Linkdin
//               </Link>
//             </Column>
//             <Column align="center">
//               <Link
//                 href="https://github.com/prokoposgiannis"
//                 style={categories.text}
//               >
//                 Github
//               </Link>
//             </Column>
//             <Column align="center">
//               <Link
//                 href="https://www.facebook.com/prokoposgiannis"
//                 style={categories.text}
//               >
//                 Facebook
//               </Link>
//             </Column>
//             <Column align="center">
//               <Link
//                 href="https://www.instagram.com/prokopos.giannis"
//                 style={categories.text}
//               >
//                 Instagram
//               </Link>
//             </Column>
//           </Row>
//         </Section>
//         <Hr style={{ ...global.hr, marginTop: "12px" }} />
//         <Section style={paddingY}>
//           <Row>
//             <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
//               You received this email because you contacted my portfolio
//               website. If you did not initiate this contact, please disregard
//               this message. Alternatively, you can reach out to me directly at
//               giannisprokopos@gmail.com, as replies to this email will not be
//               monitored.
//             </Text>
//           </Row>
//           <Row>
//             <Text style={footer.text}>John Prokopos, Greece, Athens.</Text>
//           </Row>
//         </Section>
//       </Container>
//     </Body>
//   </Html>
// );

// export default EmailTemplate;

// const paddingX = {
//   paddingLeft: "40px",
//   paddingRight: "40px",
// };

// const paddingY = {
//   paddingTop: "22px",
//   paddingBottom: "22px",
// };

// const paragraph = {
//   margin: "0",
//   lineHeight: "2",
// };

// const global = {
//   paddingX,
//   paddingY,
//   defaultPadding: {
//     ...paddingX,
//     ...paddingY,
//   },
//   paragraphWithBold: { ...paragraph, fontWeight: "bold" },
//   heading: {
//     fontSize: "32px",
//     lineHeight: "1.3",
//     fontWeight: "700",
//     textAlign: "center",
//     letterSpacing: "-1px",
//   } as React.CSSProperties,
//   text: {
//     ...paragraph,
//     color: "#747474",
//     fontWeight: "500",
//   },
//   button: {
//     border: "1px solid #929292",
//     fontSize: "16px",
//     textDecoration: "none",
//     padding: "10px 0px",
//     width: "220px",
//     display: "block",
//     textAlign: "center",
//     fontWeight: 500,
//     color: "#000",
//   } as React.CSSProperties,
//   hr: {
//     borderColor: "#E5E5E5",
//     margin: "0",
//   },
// };

// const main = {
//   backgroundColor: "#ffffff",
//   fontFamily:
//     '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// };

// const container = {
//   margin: "10px auto",
//   width: "600px",
//   maxWidth: "100%",
//   border: "1px solid #E5E5E5",
// };

// const message = {
//   padding: "40px 74px",
//   textAlign: "center",
// } as React.CSSProperties;

// const recomendationsText = {
//   margin: "0",
//   fontSize: "15px",
//   lineHeight: "1",
//   paddingLeft: "10px",
//   paddingRight: "10px",
// };

// const categories = {
//   container: {
//     width: "370px",
//     margin: "auto",
//     paddingTop: "12px",
//   },
//   text: {
//     fontWeight: "500",
//     color: "#000",
//   },
// };

// const footer = {
//   policy: {
//     width: "166px",
//     margin: "auto",
//   },
//   text: {
//     margin: "0",
//     color: "#AFAFAF",
//     fontSize: "13px",
//     textAlign: "center",
//   } as React.CSSProperties,
// };
