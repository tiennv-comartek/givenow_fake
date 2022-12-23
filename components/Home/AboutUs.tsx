import React from 'react';
import messi from "../../public/images/messi.jpg";

function AboutUs() {
    return (
        <div className="flex lg:mx-20 mx-10 my-12 lg:gap-20 gap-7">
        <img src={messi.src} className="md:block hidden" />
        <div>
          <div className="md:text-4xl text-3xl font-semibold">Messi</div>
          <div className="mt-5">
            Lionel Andrés Messi[ghi chú 1] (phát âm tiếng Tây Ban Nha: [ljoˈnel
            anˈdɾes ˈmesi] ; sinh ngày 24 tháng 6 năm 1987), còn được gọi là Leo
            Messi, là một cầu thủ bóng đá chuyên nghiệp người Argentina hiện
            đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Ligue 1 Paris
            Saint-Germain và là đội trưởng của đội tuyển bóng đá quốc gia
            Argentina.
          </div>
          <div className="mt-5">
            Sinh ra và lớn lên ở miền trung Argentina, Messi chuyển đến Tây Ban
            Nha và gia nhập Barcelona ở tuổi 13, anh đã có trận ra mắt đội một
            câu lạc bộ ở tuổi 17 vào ngày 16 tháng 10 năm 2004, khi được Frank
            Rijkaard tung vào sân. Anh dần là cầu thủ chủ chốt của câu lạc bộ
            trong ba năm tiếp theo. Trong mùa giải đầu tiên không bị gián đoạn
            bởi chấn thương, anh đã giúp Barcelona đạt được cú ăn ba đầu tiên
            của bóng đá Tây Ban Nha; vào năm đó, ở tuổi 22, Messi đã giành được
            Quả bóng vàng lần đầu tiên.
          </div>
          <div className="mt-5">
            Trước khi rời câu lạc bộ vào năm 2021, anh đã cống hiến toàn bộ sự
            nghiệp của mình cho Barcelona, tại đây anh đã giành được kỷ lục 35
            danh hiệu cấp câu lạc bộ, bao gồm 10 La Liga, 7 Copa del Rey và 4
            UEFA Champions League. Với đất nước của mình, anh đã giành được danh
            hiệu Copa América 2021 và FIFA World Cup 2022.
          </div>
          <div className="mt-5">
            Được coi là một trong những cầu thủ vĩ đại nhất mọi thời đại, Messi
            giữ kỷ lục 7 lần giành Quả bóng vàng,[ghi chú 2] 6 lần giành Chiếc
            giày vàng châu Âu và vào năm 2020 được xếp vào Ballon d'Or Dream
            Team.
          </div>
        </div>
      </div>
    );
}

export default AboutUs;