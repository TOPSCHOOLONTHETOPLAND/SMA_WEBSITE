import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/finalll.jpg";
import everythingImage from "../assets/images/trending/AKREDITAS.jpg";
import infiniteImage from "../assets/images/trending/kopi .jpg";
import jokerImage from "../assets/images/trending/info ruang.jpg";
import lightyearImage from "../assets/images/trending/extraaa.jpg";
import morbiusImage from "../assets/images/trending/kuntulan.jpg";

const Trending = () => {
  const cardData = [
    {
      image: duneImage,
      title: "LOCATION",
      text: "Jl. Sumberwaru No.5, Gombeng, Gombengsari, Kec. Kalipuro, Kabupaten Banyuwangi, Jawa Timur 68455"
    },
    {
      image: infiniteImage,
      title: "MOTO SMA NU",
      text: "Moto juga bisa diartikan sebagai semboyan atau ungkapan yang menjadi pedoman."
      
    },
    {
      image: everythingImage,
      title: "AKREDITASI",
      text: "Terakreditasi yang telah melalui proses penilaian dan memenuhi syarat tertentu."
    },
    {
      image: lightyearImage,
      title: "EKSTRAKULIKULER",
      text: "Ekstrakulikuler adalah pengembangan bakat yang membantu siswa mengembangkan potensi diri"
    },
    {
      image: jokerImage,
      title: "FASILITAS",
      text: "Ruang-ruang fungsional memberikan kenyamanan bagi siswa dalam mengikuti kegiatan belajar-mengajar."
    },
    {
      image: morbiusImage,
      title: "PERSYARATAN PENDAFTARAN",
      text: "Segera mendaftar !! nikmati fasilitas lengkap dan raih masa depan cerah di sini !!"
    },
    
    // Tambahkan data untuk card lainnya di sini
  ];

  return (
    <div>
      <Container>
        <br />
        <h1 className="text" style={{
          fontSize: "3rem",
          color: "dark",
          textShadow: "2px 2px 4px #888",
          marginTop: "30px",
          fontWeight: "bold"
        }}>
          
        </h1>
        <br />
        <Row className="justify-content-center">
          {cardData.map((card, index) => (
            <Col md={4} key={index} className="movieWrapper1">
              <Card className="movieImage">
                <Image src={card.image} alt={card.title} className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">{card.title}</Card.Title>
                    <Card.Text className="text-center">{card.text}</Card.Text>
                    {card.text2 && <Card.Text className="text-center">{card.text2}</Card.Text>}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;