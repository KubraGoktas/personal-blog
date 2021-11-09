import React from 'react'
import { Col, Row } from 'reactstrap'

const SwiperItem = () => {
    return (
        <div style={{ width: '100%', height: '100%', textAlign: 'center', justifyContent: 'center' }}>
            <div style={{ width: '50%',marginLeft:'auto',marginRight:'auto' }}>
                <Row>
                    <span>başlık</span>
                </Row>
                <Row>
                    <Col>
                        Nereden Bulabilirim?
                        Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir. İnternet'teki tüm Lorem Ipsum üreteçleri önceden belirlenmiş metin bloklarını yineler. Bu da, bu üreteci İnternet üzerindeki gerçek Lorem Ipsum üreteci yapar. Bu üreteç, 200'den fazla Latince sözcük ve onlara ait cümle yapılarını içeren bir sözlük kullanır. Bu nedenle, üretilen Lorem Ipsum metinleri yinelemelerden, mizahtan ve karakteristik olmayan sözcüklerden uzaktır.
                    </Col>l
                </Row>
            </div>
        </div>
    )
}

export default SwiperItem
