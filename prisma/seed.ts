import { PartType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const part125 = async () => {
  const data = [];

  for (const { answers, audio, explain, image, text, transcript } of data) {
    await prisma.question.create({
      data: {
        audio,
        explain,
        transcript,
        image,
        text,
        answers: {
          createMany: {
            data: answers,
          },
        },
        testId: '332a0ba0-a2d1-4143-b015-9cd32df7e2b1',
        partId: '38cbcbc4-cb56-4dcd-8649-cb8a6713678d',
        partType: PartType.PART5,
      },
    });
  }
};

const part3467 = async () => {
  const data = [
    {
      text: "<div><div>http://www.moonglowairways.com.au</div><div><b>Special Announcement by Geoff Clifford, President of Moon Glow Airways</b><br></div><div>As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. This outage has affected several airlines. It's been a rough week, but the good news is it that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.</div><div><br></div> <hr></div>",
      audio: '',
      image: '',
      transcript:
        '<div><p>http://www.moonglowairways.com.au<br></p><p><b>Thông báo đặc biệt của Geoff Clifford, Chủ tịch của Moon Glow Airways</b></p><p>Như nhiều người trong số các bạn đã biết, đã xảy ra sự cố với Pelman Technology, hệ thống xử lý việc đặt vé máy bay của chúng tôi. Sự cố ngừng hoạt động này đã ảnh hưởng đến một số hãng hàng không. Đó là một tuần khó khăn, nhưng tin tốt là nó đã được sửa chữa và chúng tôi đang thiết lập lại hệ thống của mình. Tuy nhiên, hành khách của Moon Glow vẫn có thể phải đối mặt với sự chậm trễ trong một hoặc hai ngày. Điều này rất có thể sẽ bao gồm các hàng đợi dài hơn tại các sân bay. Chúng tôi đã bổ sung thêm nhiều đại diện dịch vụ khách hàng tại chỗ tại các sân bay ở tất cả các thành phố điểm đến của chúng tôi để hỗ trợ khách hàng về các chuyến bay và thông tin của họ. Chúng tôi đánh giá cao sự hiểu biết và sự kiên nhẫn của các bạn.</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What is the purpose of the announcement?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. To report on airport renovations',
              isCorrect: false,
            },
            {
              content: 'B. To give an update on a technical problem',
              isCorrect: true,
            },
            {
              content: 'C. To introduce a new reservation system',
              isCorrect: false,
            },
            {
              content: 'D. To advertise airline routes to some new cities',
              isCorrect: false,
            },
          ],
          explain: 'Mục đích của thông báo là gì?',
        },
        {
          text: 'According to Mr. Clifford, what has the airline temporarily increased?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. The number of flights available',
              isCorrect: false,
            },
            {
              content: 'B. Dining options on flights',
              isCorrect: false,
            },
            {
              content: 'C. Assistance for customers at airports',
              isCorrect: true,
            },
            {
              content: 'D. Prices for international flights',
              isCorrect: false,
            },
          ],
          explain: 'Theo ông Clifford, hãng hàng không tạm thời tăng điều gì?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div><b>Video Captioners --- Work from Home</b></div><div>Kiesel Video is seeking detail-oriented people to use our software to add text captions to a wide variety of video material, such as television programs, movies, and university lectures. We will provide free online training. Successful applicants must possess strong language skills and have a computer, a headset, and high-speed Internet access.</div><div>The position features:</div><div>- Flexible hours--you work as much or as little as you want.</div><div>- Choice of projects-we have work in many types of content.</div><div>- Good pay - our captioners earn $350 to $1,100 a week, depending on the assignment.</div><div>Apply today at www.kieselvideo.com/jobs<br></div> <hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Video Captioners --- Làm việc tại nhà</b></p><p>Kiesel Video đang tìm kiếm những người hướng chi tiết để sử dụng phần mềm của chúng tôi để thêm chú thích văn bản vào nhiều loại tài liệu video, chẳng hạn như các chương trình truyền hình, phim và các bài giảng đại học. Chúng tôi sẽ đào tạo trực tuyến miễn phí. Ứng viên thành công phải có kỹ năng ngoại ngữ tốt và có máy tính, tai nghe và truy cập Internet tốc độ cao.</p><p>Các đặc điểm vị trí ứng tuyển:</p><p>- Giờ giấc linh hoạt - bạn làm việc nhiều hay ít tùy ý.</p><p>- Sự lựa chọn của các dự án - chúng tôi có công việc trong nhiều loại nội dung.</p><p>- Trả công tốt - người phụ trách của chúng tôi kiếm được từ 350 đô la đến 1,100 đô la một tuần, tùy thuộc vào nhiệm vụ.</p><p>Đăng ký ngay hôm nay tại www.kieselvideo.com/jobs</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What are applicants for this position required to have?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Experience in video production',
              isCorrect: false,
            },
            {
              content: 'B. Certain pieces of equipment',
              isCorrect: true,
            },
            {
              content: 'C. A university degree in language studies',
              isCorrect: false,
            },
            {
              content: 'D. An office with a reception area',
              isCorrect: false,
            },
          ],
          explain: 'Ứng viên cho vị trí này yêu cầu phải có những gì?',
        },
        {
          text: 'What is true about the job?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It is a full-time position.',
              isCorrect: false,
            },
            { content: 'B. It pays a fixed salary.', isCorrect: false },
            {
              content: 'C. It involves some foreign travel.',
              isCorrect: false,
            },
            {
              content: 'D. It offers a choice of assignments.',
              isCorrect: true,
            },
          ],
          explain: 'Điều gì là đúng về công việc?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div>February 1</div><div>SOFTWARE TESTING REPORT</div><div>Version of Software Program: Konserted 2.5</div><div>Testing Dates: January 10-12</div><div>Number of Participants: 8</div><div>Software Testing Overview: Participants were asked to complete a series of tasks testing the functionality of the revised Konserted interface. In task number 1, participants searched for a concert in a designated area. In task number 2, participants searched for new friends on the site. In task number 3, participants invited friends to a concert. In task number 4, participants posted concert reviews, photos, and videos.&nbsp;<br></div><div>Initial Findings: Task number 3 proved the most challenging, with three participants unable to complete it in under two minutes. A potential cause for this difficulty may be the choice of icons in the menu bar. Clearer, more intuitive icons could make this task easier to complete for participants.<br></div><div><br></div> <hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p>01 Tháng 2</p><p>BÁO CÁO KIỂM TRA PHẦN MỀM</p><p>Phiên bản của chương trình phần mềm: Konserted 2.5</p><p>Ngày kiểm tra: 10-12 tháng 1</p><p>Số người tham gia: 8</p><p>Tổng quan về Kiểm thử Phần mềm: Những người tham gia được yêu cầu hoàn thành một loạt nhiệm vụ kiểm tra chức năng của giao diện Konserted đã sửa đổi. Trong nhiệm vụ số 1, những người tham gia tìm kiếm một buổi hòa nhạc trong một khu vực được chỉ định. Trong nhiệm vụ số 2, những người tham gia tìm kiếm những người bạn mới trên trang web. Trong nhiệm vụ số 3, những người tham gia đã mời bạn bè đến một buổi hòa nhạc. Trong nhiệm vụ số 4, những người tham gia đã đăng các bài đánh giá, hình ảnh và video về buổi hòa nhạc.</p><p>Kết quả ban đầu: Nhiệm vụ số 3 là thách thức nhất, với ba người tham gia không thể hoàn thành nó trong vòng hai phút. Một nguyên nhân tiềm ẩn cho khó khăn này có thể là do sự lựa chọn của các biểu tượng trong thanh menu. Các biểu tượng rõ ràng, trực quan hơn có thể giúp người tham gia hoàn thành nhiệm vụ này dễ dàng hơn.</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What is true about the software testing?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It included multiple versions of Konserted.',
              isCorrect: false,
            },
            {
              content: 'B. It was done over several days.',
              isCorrect: true,
            },
            {
              content: 'C. It required participants to complete a survey.',
              isCorrect: false,
            },
            {
              content: 'D. It took place at a series of concerts.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì đúng về kiểm thử phần mềm?',
        },
        {
          text: 'What action was difficult for users to complete?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Searching for an event', isCorrect: false },
            { content: 'B. Searching for friends', isCorrect: false },
            {
              content: 'C. Inviting friends to a performance',
              isCorrect: true,
            },
            {
              content: 'D. Posting reviews to a Web site',
              isCorrect: false,
            },
          ],
          explain: 'Người dùng khó hoàn thành thao tác nào?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><p> </p><p><b>*E-mail*</b></p><p>To: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="3c5f5d48554559547c5145515d55504e535351125d49">[email&nbsp;protected]</a><br>From: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f8999b909d96b8958d8c9995998a93d6998d">[email&nbsp;protected]</a><br>Date: 1 July<br>Subject: Mutamark conference</p><p>Dear Ms. Atiyeh,</p><p>To follow up on our phone conversation earlier today, I would like to extend to you a formal written invitation to speak at the eighth annual Mutamark conference, scheduled to take place this year from 17 to 20 September in Zagros. Because you drew a sizeable crowd when you appeared at the conference in the past, we will be making special arrangements for your visit this time. The Blue Room at the Debeljak Hotel holds only 120, so this year we are also booking the Koros Hall, which has a capacity of 270. We can offer you a 40-to-50-minute slot on the last day of the conference, when attendance should be at its peak. Please e-mail me to confirm your acceptance and to let me know more about your audiovisual requirements. We can provide overhead projection for still images if you will be using them again.</p><p>Very best regards,<br>Alex Chen, Conference Planning<br>Mutamark Headquarters, Melbourne</p><hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p><b>*E-mail*</b></p><p>Tới: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="553634213c2c303d15382c38343c39273a3a387b3420">[email&nbsp;protected]</a><br>Từ: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e8898b808d86a8859d9c8985899a83c6899d">[email&nbsp;protected]</a><br>Ngày: 1 tháng 7<br>Chủ đề: Hội nghị Mutamark</p><p>Gửi cô Atiyeh,</p><p>Để tiếp theo cuộc trò chuyện qua điện thoại của chúng ta vào đầu ngày hôm nay, tôi muốn gửi tới bạn lời mời chính thức bằng văn bản để phát biểu tại hội nghị Mutamark thường niên lần thứ tám, dự kiến ​​diễn ra vào năm nay từ ngày 17 đến ngày 20 tháng 9 tại Zagros. Bởi vì bạn đã thu hút một đám đông khá lớn khi bạn xuất hiện tại hội nghị trước đây, chúng tôi sẽ sắp xếp đặc biệt cho chuyến đi của bạn lần này. Phòng Blue tại khách sạn Debeljak chỉ chứa 120 người, vì vậy năm nay chúng tôi cũng đang đặt phòng Koros Hall, nơi có sức chứa 270. Chúng tôi có thể đề xuất cho bạn một khoảng thời gian 40 đến 50 phút vào ngày cuối cùng của hội nghị, khi sự tham dự sẽ ở mức cao nhất. Vui lòng gửi e-mail cho tôi để xác nhận sự chấp nhận của bạn và cho tôi biết thêm về các yêu cầu thiết bị nghe nhìn của bạn. Chúng tôi có thể cung cấp máy chiếu phía trên đầu cho hình ảnh tĩnh nếu bạn muốn sử dụng lại.</p><p>Trân trọng,<br>Alex Chen, người Lập kế hoạch Hội nghị<br>Trụ sở chính của Mutamark, Melbourne</p><hr></div>',
      explain: '',
      questions: [
        {
          text: "What is indicated about Ms. Atiyeh's previous appearance at Mutamark?",
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It was very well attended.',
              isCorrect: true,
            },
            {
              content: 'B. It was moved to a larger venue.',
              isCorrect: false,
            },
            {
              content: 'C. It featured a musical performance.',
              isCorrect: false,
            },
            {
              content: 'D. It took place at the Koros Hall.',
              isCorrect: false,
            },
          ],
          explain:
            'Điều gì được chỉ ra về lần xuất hiện trước đây của cô Atiyeh tại Mutamark?',
        },
        {
          text: 'How many people can the Koros Hall accommodate?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. 40', isCorrect: false },
            { content: 'B. 50', isCorrect: false },
            { content: 'C. 120', isCorrect: false },
            { content: 'D. 270', isCorrect: true },
          ],
          explain: 'Hội trường Koros có thể chứa được bao nhiêu người?',
        },
        {
          text: 'When will Ms. Atiyeh most likely appear at the Mutamark conference?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. On September 17', isCorrect: false },
            { content: 'B. On September 18', isCorrect: false },
            { content: 'C. On September 19', isCorrect: false },
            { content: 'D. On September 20', isCorrect: true },
          ],
          explain:
            'Khi nào cô Atiyeh rất có thể sẽ xuất hiện tại hội nghị Mutamark?',
        },
      ],
      answers: [],
    },
    {
      text: "<div><div><b>Monorail Coming to Sudbury</b></div><div>(4 Feb.) Ottawa-based Saenger, Inc., has been selected by the city of Sudbury to build a monorail system that will connect the city's commercial district to the airport. -[1]-. Funding for the system is drawn from a combination of public agencies and private investors. -[2]-. Ticket sales for the monorail will also provide a new source of revenue for the city. -[3]-. Construction is slated to begin in early June and is expected to be completed within four years. -[4]-</div><div><br></div> <hr></div>",
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Monorail đến Sudbury</b></p><p>(4 tháng 2) Saenger, Inc. có trụ sở tại Ottawa, đã được thành phố Sudbury chọn để xây dựng một hệ thống tàu điện một ray kết nối khu thương mại của thành phố với sân bay. - [1] -. Nguồn vốn cho hệ thống được lấy từ sự kết hợp của các cơ quan nhà nước và các nhà đầu tư tư nhân. - [2] -. Bán vé tàu điện một ray cũng sẽ mang lại một nguồn thu mới cho thành phố. - [3] -. Việc xây dựng dự kiến sẽ bắt đầu vào đầu tháng 6 và dự kiến hoàn thành trong vòng 4 năm. -[4]-</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What kind of business most likely is Saenger, Inc.?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. A construction firm', isCorrect: true },
            { content: 'B. A real estate agency', isCorrect: false },
            { content: 'C. A cargo-handling company', isCorrect: false },
            {
              content: 'D. A financial services provider',
              isCorrect: false,
            },
          ],
          explain:
            'Saenger, Inc. có khả năng xảy ra nhất là oại hình kinh doanh nào?',
        },
        {
          text: 'What is indicated about the monorail?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It needs more funding from investors.',
              isCorrect: false,
            },
            {
              content: 'B. It will take years to finish.',
              isCorrect: true,
            },
            {
              content: 'C. It was proposed by airport officials.',
              isCorrect: false,
            },
            {
              content: 'D. It offers discounted tickets to city residents.',
              isCorrect: false,
            },
          ],
          explain: 'Những gì được chỉ ra về monorail?',
        },
        {
          text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Along the way, the line will stop at nine stations."',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. [1]', isCorrect: true },
            { content: 'B. [2]', isCorrect: false },
            { content: 'C. [3]', isCorrect: false },
            { content: 'D. [4]', isCorrect: false },
          ],
          explain:
            'Câu sau đây thuộc vị trí được đánh dấu nào [1], [2], [3], [4]  đúng nhất? \n"Trên đường đi, tàu sẽ dừng ở chín trạm."',
        },
      ],
      answers: [],
    },
    {
      text: "<div><div><b>Dennis Beck (2:52 P.M.)</b><br></div><div>Hi, Corinne. I just want to be sure that you saw the document I sent you. It's the combined market analysis and advertising proposal for the Keyes Elegant Home group. We're preparing it for tomorrow's presentation to the client.</div><div><b>Corinne McCall (2:53 P.M.)</b><br></div><div>Yes, I have just downloaded it. Is this about their new line of tableware?</div><div><b>Dennis Beck (2:54 P.M.)</b><br></div><div>Yes. I'd like you to read it over.</div><div><b>Corinne McCall (3:01 P.M.)</b><br></div><div>No problem. Would you like me to revise anything, or do you want me to just check that it is all clear?</div><div><b>Dennis Beck (3:02 P.M.)</b><br></div><div>Feel free to add information to the section \"Advertising Strategies,\" since that is your area of expertise.</div><div><b>Corinne McCall (3:03 P.M.)</b><br></div><div>Will do. I'll get it back to you before the end of the day.</div><div><br></div> <hr></div>",
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Dennis Beck (2:52 P.M.)</b></p><p>Chào, Corinne. Tôi chỉ muốn chắc chắn rằng bạn đã xem tài liệu tôi gửi cho bạn. Đó là đề xuất quảng cáo và phân tích thị trường kết hợp cho nhóm Keyes Elegant Home. Chúng tôi đang chuẩn bị nó cho buổi thuyết trình ngày mai với khách hàng.</p><p><b>Corinne McCall (2:53 CH)</b></p><p>Có, tôi vừa tải xuống. Đây là về dòng bộ đồ ăn mới của họ?</p><p><b>Dennis Beck (2:54 P.M.)</b><br></p><p>Vâng. Tôi muốn bạn đọc nó qua.</p><p><b>Corinne McCall (3:01 P.M.)</b><br></p><p>Không có gì. Bạn có muốn tôi sửa đổi bất cứ điều gì hay bạn muốn tôi chỉ kiểm tra xem tất cả đã rõ ràng chưa?</p><p><b>Dennis Beck (3:02 P.M.)</b><br></p><p>Vui lòng thêm thông tin vào phần "Chiến lược quảng cáo", vì đó là lĩnh vực chuyên môn của bạn.</p><p><b>Corinne McCall (3:03 P.M.)</b><br></p><p>Sẽ làm. Tôi sẽ gửi lại cho bạn trước cuối ngày.</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'At 3:01 P.M., what does Ms. McCall most likely mean when she writes, "No problem"?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content:
                'A. She did not have any issues logging on to her computer.',
              isCorrect: false,
            },
            {
              content: 'B. She does not think a document has errors.',
              isCorrect: false,
            },
            {
              content: 'C. She is willing to review a document.',
              isCorrect: true,
            },
            {
              content:
                'D. She has time to meet representatives from Keyes Elegant Home.',
              isCorrect: false,
            },
          ],
          explain:
            'Vào lúc 3:01 chiều, cô McCall rất có thể có ý gì khi cô viết, "Không có gì"?',
        },
        {
          text: 'What type of work does Ms. McCall most likely do?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Marketing', isCorrect: true },
            { content: 'B. Accounting', isCorrect: false },
            { content: 'C. Legal consulting', isCorrect: false },
            {
              content: 'D. Information technology services',
              isCorrect: false,
            },
          ],
          explain: 'Cô McCall có khả năng làm loại công việc nào nhất?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><p>To: Mara Renaldo<br>From: Lisa Yang<br>Date: May 28<br>Subject: RE: Staffordsville Craft Fair</p><p>Dear Ms. Renaldo,</p><p>Thank you for your interest in selling your handcrafted items at the annual Staffordsville Craft Fair. Please note that all applicants must submit a $25 application fee, whether or not they want to share a space with another applicant. Moreover, all applicants must submit a minimum of four photographs of their work in order to be considered as a vendor. -[1]-</p><p>In addition to photographs, we ask that you submit a rough a sketch showing how you would display your work. Since you propose to share a space with a friend, local potter Julia Berens, it would be helpful if your sketch could indicate how you are planning to use the space jointly. -[2]-</p><p>Also, because we hold the fair rain or shine, all vendors must supply their own tenting to protect themselves and their wares from the possibility of rain. -[3]-</p><p>Finally, please be aware that every year we receive far more applications from jewelry makers than we can accept. We hope that you will not be too discouraged if your work is not accepted this year, as you are applying for the first time. -[4]-.</p><p>Thanks again, and best of luck with your application,<br>Lisa Yang</p><div><br></div> <hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p>Tới: Mara Renaldo<br>Người gửi: Lisa Yang<br>Ngày: 28 tháng 5<br>Chủ đề: RE: Hội chợ thủ công Staffordsville</p><p>Cô Renaldo thân mến,</p><p>Cảm ơn bạn đã quan tâm đến việc bán các mặt hàng thủ công của mình tại Hội chợ Thủ công Staffordsville hàng năm. Xin lưu ý rằng tất cả người đăng ký phải nộp phí đăng ký $ 25, cho dù họ có muốn chia sẻ chỗ với người nộp đơn khác hay không. Hơn nữa, tất cả các ứng viên phải gửi tối thiểu bốn bức ảnh về công việc của họ để được coi là một nhà cung cấp. - [1] -</p><p>Ngoài các bức ảnh, chúng tôi yêu cầu bạn gửi một bản phác thảo sơ bộ cho thấy bạn sẽ trưng bày tác phẩm của mình như thế nào. Vì bạn đề xuất chia sẻ không gian với một người bạn, thợ gốm địa phương Julia Berens, sẽ rất hữu ích nếu bản phác thảo của bạn có thể chỉ ra cách các bạn dự định sử dụng không gian chung. - [2] -</p><p>Ngoài ra, vì chúng tôi tổ chức hội chợ dù mưa hay nắng, nên tất cả những người bán hàng phải cung cấp lều riêng để bảo vệ bản thân và đồ đạc của họ khỏi khả năng mưa. - [3] -</p><p>Cuối cùng, xin lưu ý rằng hàng năm chúng tôi nhận được nhiều đơn đăng ký từ các nhà sản xuất trang sức hơn mức chúng tôi có thể chấp nhận. Chúng tôi hy vọng rằng bạn sẽ không quá nản lòng nếu đơn của bạn không được chấp nhận trong năm nay, vì bạn đang nộp đơn lần đầu tiên. -[4]-.</p><p>Cảm ơn một lần nữa và chúc bạn may mắn với đơn đăng ký của mình,<br>Lisa Yang</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What is suggested about the craft fair?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It takes place in downtown Staffordsville.',
              isCorrect: false,
            },
            {
              content: 'B. It is being held for the first time.',
              isCorrect: false,
            },
            {
              content: 'C. It specializes in locally produced crafts.',
              isCorrect: false,
            },
            { content: 'D. It will be held outdoors.', isCorrect: true },
          ],
          explain: 'Điều gì được gợi ý về hội chợ thủ công?',
        },
        {
          text: 'What is NOT mentioned as a requirement for selling at the craft fair?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Sharing a space with another participant',
              isCorrect: true,
            },
            {
              content: 'B. Paying a fee to participate',
              isCorrect: false,
            },
            {
              content: 'C. Submitting images of the crafts',
              isCorrect: false,
            },
            {
              content: "D. Providing one's own tenting",
              isCorrect: false,
            },
          ],
          explain:
            'Điều gì KHÔNG được đề cập như một yêu cầu để bán hàng tại hội chợ thủ công?',
        },
        {
          text: 'What does Ms. Renaldo most likely sell?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Sketches', isCorrect: false },
            { content: 'B. Photographs', isCorrect: false },
            { content: 'C. Pottery', isCorrect: false },
            { content: 'D. Jewelry', isCorrect: true },
          ],
          explain: 'Cô Renaldo có khả năng bán gì nhất?',
        },
        {
          text: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Make sure they clearly represent the items you wish to offer for purchase at the event."',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. [1]', isCorrect: true },
            { content: 'B. [2]', isCorrect: false },
            { content: 'C. [3]', isCorrect: false },
            { content: 'D. [4]', isCorrect: false },
          ],
          explain:
            'Trong các vị trí được đánh dấu [1], [2], [3], [4] câu sau đây nằm ở vị trí nào đúng nhất? \n"Hãy đảm bảo rằng chúng đại diện rõ ràng cho các mặt hàng bạn muốn mua tại sự kiện."',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div><b>SLEEP SOUNDLY SOLUTIONS</b></div><div><i>Thank you for choosing Sleep Soundly Solutions!</i><br></div><div>The updated control panel is linked to an integrated system that allows you to activate and disable all security systems in your home, including your Sleep Soundly motion sensor as well as your fire, smoke, and carbon monoxide detectors.&nbsp;<br></div><div>All Sleep Soundly residential alarm systems have been tested thoroughly to ensure the highest quality and sensitivity, so you can sleep soundly in the knowledge that your home is protected. We have also developed a new smartphone application that will notify you of any disturbances wherever you are. The app is available for download now.<br></div><div>Sleep Soundly control equipment is carefully manufactured for use with Sleep Soundly detectors and alarms. Using products manufactured by other companies may result in an alarm system that does not <b><i>meet</i></b> safety requirements for residential buildings or comply with local laws.<br></div><div><br></div> <hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p><b>SLEEP SOUNDLY SOLUTIONS</b><br></p><p><i>Cảm ơn bạn đã chọn Sleep Soundly Solutions!</i></p><p>Bảng điều khiển cập nhật được liên kết với một hệ thống tích hợp cho phép bạn kích hoạt và vô hiệu hóa tất cả các hệ thống an ninh trong nhà của bạn, bao gồm cảm biến chuyển động Sleep Soundly cũng như các thiết bị phát hiện lửa, khói và carbon monoxide.</p><p>Tất cả các hệ thống báo động khu dân cư Sleep Soundly đã được kiểm tra kỹ lưỡng để đảm bảo chất lượng và độ nhạy cao nhất, vì vậy bạn có thể ngủ ngon khi biết rằng ngôi nhà của bạn được bảo vệ. Chúng tôi cũng đã phát triển một ứng dụng điện thoại thông minh mới sẽ thông báo cho bạn về bất kỳ sự làm phiền nào dù bạn ở đâu. Ứng dụng có sẵn để tải xuống ngay bây giờ.</p><p>Thiết bị điều khiển Sleep Soundly được sản xuất một cách cẩn thận để sử dụng với các thiết bị phát hiện và báo động Sleep Soundly. Việc sử dụng các sản phẩm do các công ty khác sản xuất có thể dẫn đến hệ thống báo động không <b><i>thỏa mãn</i></b> các yêu cầu an toàn cho các tòa nhà dân cư hoặc tuân thủ luật pháp địa phương.</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'In what industry does Sleep Soundly Solutions operate?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Real estate', isCorrect: false },
            { content: 'B. Life insurance', isCorrect: false },
            { content: 'C. Home security', isCorrect: true },
            { content: 'D. Furniture moving', isCorrect: false },
          ],
          explain: 'Sleep Soundly Solutions hoạt động trong ngành nào?',
        },
        {
          text: 'What new product is being offered by Sleep Soundly Solutions?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. An outdoor motion sensor', isCorrect: false },
            { content: 'B. A smartphone application', isCorrect: true },
            {
              content: 'C. Home installation service',
              isCorrect: false,
            },
            { content: 'D. Fire detection equipment', isCorrect: false },
          ],
          explain:
            'Sản phẩm mới nào đang được cung cấp bởi Sleep Soundly Solutions?',
        },
        {
          text: 'The word "meet" in paragraph 3, line 3, is closest in meaning to',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. greet', isCorrect: false },
            { content: 'B. touch', isCorrect: false },
            { content: 'C. satisfy', isCorrect: true },
            { content: 'D. experience', isCorrect: false },
          ],
          explain: 'Từ "meet" trong đoạn 3, dòng 3, gần nghĩa nhất với',
        },
      ],
      answers: [],
    },
    {
      text: "<div><div>March 29</div><div>Dr. Maritza Geerlings</div><div>Poseidonstraat 392</div><div>Paramaribo</div><div>Suriname</div><div>Dear Dr. Geerlings,</div><div>I am writing to thank you for your years of service on the faculty of the Jamaican Agricultural Training Academy (JATA) and to let you know about some exciting developments. As you know, JATA was originally <b><i>established </i></b>as a vocational school for agriculture but now offers courses in i varied array of disciplines, including cybersecurity, electrical engineering, and health information management. Our student body, which for the first ten years consisted almost exclusively of locals, is now culturally diverse, with students from across the Americas and Europe. Today's students work with sophisticated equipment, much of which did not exist in our early days.<br></div><div>To reflect these and other significant changes that JATA has undergone over time, the Board of Trustees has approved a proposal by the Faculty Senate to rename the institution the Caribbean Academy of Science and Technology. As a result, a new institutional logo will be adopted. All students and faculty members, both current and former, are invited to participate in a logo design contest. Information about the contest will be forthcoming.<br></div><div>The renaming ceremony and the introduction of the new logo will take place at 11 A.M. on 1 June, the twentieth anniversary of the institution. We hope you will be able to join us.<br></div><div>Sincerely,<br></div><div>Audley Bartlett<br></div><div>Vice President for Academic Affairs,</div><div>Jamaican Agricultural Training Academy</div><div><br></div> <hr></div>",
      audio: '',
      image: '',
      transcript:
        '<div><p>29 tháng Ba</p><p>Tiến sĩ Maritza Geerlings</p><p>Poseidonstraat 392</p><p>Paramaribo</p><p>Suriname</p><p>Kính gửi Tiến sĩ Geerlings,</p><p>Tôi viết thư này để cảm ơn bạn vì những năm phục vụ của bạn trong đội ngũ giảng viên của Học viện Đào tạo Nông nghiệp Jamaica (JATA) và để cho bạn biết về một số phát triển thú vị. Như bạn đã biết, JATA ban đầu được <b><i>thành lập </i></b>như một trường dạy nghề về nông nghiệp nhưng hiện cung cấp các khóa học về nhiều lĩnh vực khác nhau, bao gồm an ninh mạng, kỹ thuật điện và quản lý thông tin y tế. Đội ngũ sinh viên của chúng ta, trong mười năm đầu tiên hầu như chỉ bao gồm người dân địa phương, hiện nay rất đa dạng về văn hóa, với các sinh viên từ khắp châu Mỹ và châu Âu. Sinh viên ngày nay làm việc với các thiết bị tinh vi, phần lớn trong số đó không tồn tại trong thời kỳ đầu của chúng ta.</p><p>Để phản ánh những điều này và những thay đổi quan trọng khác mà JATA đã trải qua theo thời gian, Hội đồng Quản trị đã thông qua đề xuất của Hội đồng Khoa về việc đổi tên học viện thành Học viện Khoa học và Công nghệ Caribe. Do đó, một logo học viện mới sẽ được chọn. Tất cả sinh viên và giảng viên, cả hiện tại và trước đây, đều được mời tham gia cuộc thi thiết kế logo. Thông tin về cuộc thi sẽ được công bố.</p><p>Lễ đổi tên và giới thiệu logo mới sẽ diễn ra lúc 11 giờ sáng ngày 1 tháng 6, kỷ niệm hai mươi năm thành lập học viện. Chúng tôi hy vọng bạn sẽ có thể cùng tham gia.</p><p>Trân trọng,</p><p>Audley Bartlett</p><p>Phó Chủ tịch Phụ trách Học vụ,</p><p>Học viện Đào tạo Nông nghiệp Jamaica</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What is one purpose of the letter?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. To announce a name change', isCorrect: true },
            {
              content: 'B. To honor distinguished alumni',
              isCorrect: false,
            },
            {
              content: 'C. To suggest revisions to a curriculum',
              isCorrect: false,
            },
            {
              content: "D. To list an individual's accomplishments",
              isCorrect: false,
            },
          ],
          explain: 'Một trong những mục đích của bức thư là gì?',
        },
        {
          text: 'The word "established" in paragraph 1, line 3, is closest in meaning to',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. affected', isCorrect: false },
            { content: 'B. founded', isCorrect: true },
            { content: 'C. confirmed', isCorrect: false },
            { content: 'D. settled', isCorrect: false },
          ],
          explain: 'Từ "established" trong đoạn 1, dòng 3, gần nghĩa nhất với',
        },
        {
          text: 'What is suggested about Dr. Geerlings?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: "A. She plans to attend JATA's anniversary celebration.",
              isCorrect: false,
            },
            {
              content: 'B. She has taught courses in cybersecurity,',
              isCorrect: false,
            },
            {
              content: "C. She can take part in JATA's logo design contest.",
              isCorrect: true,
            },
            {
              content: "D. She served on JATA's Board of Trustees.",
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được gợi ý về Tiến sĩ Geerlings?',
        },
        {
          text: 'What is NOT indicated about JATA in the letter?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Its professors live on campus.',
              isCorrect: true,
            },
            {
              content: 'B. Its students have access to modern equipment.',
              isCorrect: false,
            },
            {
              content: 'C. It will be twenty years old on June 1.',
              isCorrect: false,
            },
            {
              content: 'D. It is attended by international students.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì KHÔNG được chỉ ra về JATA trong thư?',
        },
      ],
      answers: [],
    },
    {
      text: "<div><div><b>Ashley Montaine 8:54 A.M.:</b> How did the interview with Mr. Erickson go?</div><div><b>Dan Campbell 8:55 A.M.:</b> I really enjoyed meeting him. I think he'd be a great reporter here. He seems smart and organized, and his samples show that he's a great writer.</div><div><b>Ashley Montaine 8:57 A.M.:</b> Brooke, can you contact Mr. Erickson to set up the next interview? Is that a problem?<br></div><div><b>Dan Campbell 8:58 A.M.:</b> I'd really like to work with him. It is very important that he impress Mr. Peters.<br></div><div><b>Brooke Randolph 8:59 A.M.: </b>Not at all.<br></div><div><b>Ashley Montaine 9:00 A.M.: </b>Thanks. I also see that he has a varied work history. That will make him a well-rounded reporter.<br></div><div><b>Brooke Randolph 9:02 A.M.:</b> When would you like to meet with him again?<br></div><div><b>Dan Campbell 9:03 A.M.:</b> Ashley, I believe you will participate in the next interview. Note that Mr. Peters is probably going to ask why Mr. Erickson wants to transition from freelance writing to in-house news reporting. Also, Mr. Peters will want assurances that he's committed and will stick around for several years.</div><div><b>Ashley Montaine 9:04 A.M.:</b> Brooke, Mr. Peters and I are both free Friday morning.<br></div><div><b>Brooke Randolph 9:06 A.M.:</b> Great. I'll write an e-mail shortly.<br></div><div><br></div> <hr></div>",
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Ashley Montaine 8:54 A.M.:&nbsp;</b>Cuộc phỏng vấn với anh Erickson diễn ra như thế nào?</p><p><b>Dan Campbell 8:55 A.M.:</b>&nbsp;Tôi thực sự rất thích được gặp anh ấy. Tôi nghĩ rằng anh ấy sẽ là một phóng viên giỏi ở đây. Anh ấy có vẻ thông minh và có tổ chức, và các mẫu viết thử của anh ấy cho thấy anh ấy là một cây viết tuyệt vời.</p><p><b>Ashley Montaine 8:57 A.M.:</b>&nbsp;Brooke, bạn có thể liên hệ với ông Erickson để sắp xếp cuộc phỏng vấn tiếp theo không? Đó có phải là vấn đề không?</p><p><b>Dan Campbell 8:58 A.M.:&nbsp;</b>Tôi thực sự muốn làm việc với anh ấy. Điều rất quan trọng là anh ấy phải gây ấn tượng với ông Peters.</p><p><b>Brooke Randolph 8:59 A.M.:&nbsp;</b>Không có vấn đề gì.</p><p><b>Ashley Montaine 9:00 A.M.:&nbsp;</b>&nbsp;Cảm ơn nhiều. Tôi cũng thấy rằng anh ấy có một quá trình làm việc đa dạng. Điều đó sẽ khiến anh ấy trở thành một phóng viên toàn diện.</p><p><b>Brooke Randolph 9:02 A.M.:</b>&nbsp;Khi nào bạn muốn gặp lại anh ấy?</p><p><b>Dan Campbell 9:03 A.M.:</b>&nbsp;Ashley, tôi tin rằng bạn sẽ tham gia vào cuộc phỏng vấn tiếp theo. Lưu ý rằng ông Peters có thể sẽ hỏi tại sao anh Erickson muốn chuyển từ viết báo tự do sang báo cáo tin tức nội bộ. Ngoài ra, ông Peters sẽ muốn một đảm bảo rằng anh ấy cam kết và sẽ gắn bó trong vài năm.</p><p><b>Ashley Montaine 9:04 A.M.:</b>&nbsp;Brooke, ông Peters và tôi đều rảnh vào sáng thứ Sáu.</p><p><b>Brooke Randolph 9:06 A.M.:</b>&nbsp;Tuyệt vời. Tôi sẽ viết một e-mail ngay.</p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'For what type of company do the writers work?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. A book publisher', isCorrect: false },
            { content: 'B. A newspaper', isCorrect: true },
            {
              content: 'C. A film production company',
              isCorrect: false,
            },
            { content: 'D. A job-placement firm', isCorrect: false },
          ],
          explain:
            'Những người tham gia chat làm việc cho loại hình công ty nào?',
        },
        {
          text: 'At 8:59 A.M., what does Ms. Randolph most likely mean when she writes, "Not at all"?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. She would like to participate in an interview.',
              isCorrect: false,
            },
            {
              content: 'B. She does not think Mr. Erickson should be hired.',
              isCorrect: false,
            },
            {
              content: 'C. She feels comfortable fulfilling a request.',
              isCorrect: true,
            },
            {
              content: "D. She has not read Mr. Erickson's writing.",
              isCorrect: false,
            },
          ],
          explain:
            'Lúc 8:59 sáng, cô Randolph rất có thể có ý gì khi cô viết, "Not at all"?',
        },
        {
          text: 'What is indicated about Mr. Erickson?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. He has never been on a job interview before.',
              isCorrect: false,
            },
            {
              content: 'B. He has held many different types of jobs.',
              isCorrect: true,
            },
            {
              content: "C. He is taking over Mr. Peters' position.",
              isCorrect: false,
            },
            {
              content: 'D. He is a former colleague of Ms. Montaine.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được chỉ ra về anh Erickson?',
        },
        {
          text: 'According to the discussion, what is important to Mr. Peters about a new hire?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Prior news reporting experience',
              isCorrect: false,
            },
            {
              content: 'B. Ability to begin working immediately',
              isCorrect: false,
            },
            {
              content: 'C. Communicating well with colleagues',
              isCorrect: false,
            },
            {
              content: 'D. Staying with the company over the long term',
              isCorrect: true,
            },
          ],
          explain:
            'Theo cuộc thảo luận, điều gì quan trọng đối với ông Peters về việc tuyển dụng mới?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div><b>Alberta Business Matters</b></div><div>April issue</div><div><b>Improve Your Office Environment Now!</b></div><div>Today\'s office environment, featuring numerous corridors, unexciting beige or white walls, and often rows of identical, windowless cubicles, might not inspire comfort, beauty, and energy. However, there are some easy, inexpensive ways to make your office space more inviting.<br></div><div><b>Air quality</b><br></div><div>- Add some green plants to the décor. Plants offer a natural filtration system, increasing oxygen levels. Nonflowering plants should be preferred, as they will not scatter pollen.</div><div>- A small, tabletop air purifier helps improve stale air and removes dust.</div><div><b>Light quality</b><br></div><div>- Take breaks and go outdoors. Even just five minutes before or after lunch break will provide your eyes with a respite from artificial light sources.</div><div>- Use desktop lamps with full-spectrum lightbulbs.</div><div>- Install double-glazed windows instead of blinds to reduce glare while maintaining natural light.</div><div><b>Stress relief</b><br></div><div>- Earplugs or noise-cancelling headphones can block distracting noise in an open office floor plan.</div><div>- Photographs of loved ones and places we have visited for vacation are reminders of our life away from the office. Select a few favorite pictures as important decorative elements.</div><div>-------------------------</div><div><b>Dear readers, if you have tips to add to this list, send them in and they will be published in next month\'s issue.</b></div><div>-------------------------<br></div> <hr><p><b>Alberta Business Matters</b></p><p><b>Letters to the Editor</b></p><p>It may interest your readers to know about the company I work for, called Moveable, Inc. We aspire to make dull offices more comfortable and convenient for workers, especially for today\'s on-the-move employees.</p><p>For example, say you work two days a week at your headquarters in Edmonton, and the rest of the week you are in a satellite office. Our "Can-Do Case" ensures that your favorite office supplies always travel with you. Our "Modular Décor Kit," weighing just 1.75 kg, contains a portable reading lamp, a miniature silk plant, and a folding photo frame with space for four pictures. Look us up online and follow us on social media, as we offer new items frequently!</p><p>Best,</p><p>Maria Testa</p><p><br></p></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Alberta Business Matters</b><br></p><p>Số tháng 4</p><p><b>Cải thiện môi trường văn phòng của bạn ngay bây giờ!</b></p><p>Môi trường văn phòng ngày nay, có nhiều hành lang, những bức tường màu be hoặc trắng khó chịu, và thường là những dãy buồng giống hệt nhau, không có cửa sổ, có thể không truyền cảm hứng cho sự thoải mái, vẻ đẹp và năng lượng. Tuy nhiên, có một số cách dễ dàng, ít tốn kém để làm cho không gian văn phòng của bạn trở nên hấp dẫn hơn.</p><p><b>Chất lượng không khí</b></p><p>- Thêm một số cây xanh để trang trí. Thực vật cung cấp một hệ thống lọc tự nhiên, tăng lượng oxy. Nên ưu tiên những cây không ra hoa vì chúng sẽ không phân tán phấn hoa.</p><p>- Máy lọc không khí nhỏ, đặt trên bàn giúp cải thiện không khí hôi thối và loại bỏ bụi.</p><p><b>Chất lượng ánh sáng</b></p><p>- Nghỉ giải lao và đi ra ngoài trời. Ngay cả năm phút trước hoặc sau giờ nghỉ trưa cũng sẽ giúp mắt bạn có thời gian nghỉ ngơi trước các nguồn sáng nhân tạo.</p><p>- Sử dụng đèn để bàn có bóng đèn quang phổ.</p><p>- Lắp đặt cửa sổ kính hai lớp thay cho rèm để giảm độ chói trong khi duy trì ánh sáng tự nhiên.</p><p><b>Giảm stress</b></p><p>- Nút tai hoặc tai nghe chống ồn có thể chặn tiếng ồn gây mất tập trung trong mặt bằng văn phòng mở.</p><p>- Những bức ảnh chụp những người thân yêu và những nơi chúng ta đã ghé thăm trong kỳ nghỉ là những lời nhắc nhở về cuộc sống xa văn phòng của chúng ta. Chọn một vài hình ảnh yêu thích làm yếu tố trang trí quan trọng.</p><p>-------------------------</p><p><b>Bạn đọc thân mến, nếu bạn có ý tưởng để thêm vào danh sách này, hãy gửi chúng và chúng sẽ được xuất bản trong số ra tháng tới.</b></p><p>-------------------------</p><hr><div><b>Alberta Business Matters</b><br></div><div><b>Thư cho Ban biên tập</b></div><div>Độc giả của bạn có thể quan tâm khi biết về công ty mà tôi đang làm việc, có tên Moveable, Inc. Chúng tôi mong muốn biến những văn phòng buồn tẻ trở nên thoải mái và thuận tiện hơn cho người lao động, đặc biệt là đối với những nhân viên hay di chuyển ngày nay.</div><div>Ví dụ: giả sử bạn làm việc hai ngày một tuần tại trụ sở chính của mình ở Edmonton và phần còn lại của tuần bạn làm việc tại một văn phòng vệ tinh.&nbsp;&nbsp;"Can-Do Case"&nbsp;của chúng tôi đảm bảo rằng các đồ dùng văn phòng yêu thích của bạn luôn đồng hành cùng bạn. "Modular Décor Kit,"&nbsp;của chúng tôi, chỉ nặng 1,75 kg, chứa một đèn đọc sách di động, một cây lụa thu nhỏ và một khung ảnh gấp với không gian cho bốn bức ảnh. Hãy tìm kiếm chúng tôi trực tuyến và theo dõi chúng tôi trên phương tiện truyền thông xã hội, vì chúng tôi cung cấp các mặt hàng mới thường xuyên!</div><div>Chúc các bạn những điều tốt nhất,</div><div>Maria Testa</div></div>',
      explain: '',
      questions: [
        {
          text: 'What is NOT recommended in the article?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Using plants to decorate cubicles',
              isCorrect: false,
            },
            {
              content: 'B. Walking outdoors during breaks',
              isCorrect: false,
            },
            {
              content: 'C. Using a calming noise machine',
              isCorrect: true,
            },
            {
              content: 'D. Decorating with personal photographs',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì KHÔNG được khuyến nghị trong bài báo?',
        },
        {
          text: 'Why are blinds mentioned?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Because they are relatively expensive',
              isCorrect: false,
            },
            {
              content: 'B. Because they block natural light',
              isCorrect: true,
            },
            {
              content: 'C. Because they are to hard to match to furniture',
              isCorrect: false,
            },
            { content: 'D. Because they attract dust', isCorrect: false },
          ],
          explain: 'Tại sao lại nhắc đến rèm?',
        },
        {
          text: 'What is indicated about the magazine?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It is the only business publication in Alberta.',
              isCorrect: false,
            },
            {
              content: 'B. Its publisher is hiring additional staff.',
              isCorrect: false,
            },
            {
              content: 'C. Its editors would like to hear from readers.',
              isCorrect: true,
            },
            {
              content: 'D. It is sponsored by a furniture company.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được chỉ ra về tạp chí?',
        },
        {
          text: 'What is suggested about Ms. Testa?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. She is a professional writer.',
              isCorrect: false,
            },
            {
              content: 'B. She is starting a new company.',
              isCorrect: false,
            },
            {
              content: 'C. She travels frequently in her work.',
              isCorrect: false,
            },
            {
              content:
                'D. She read the previous issue of Alberta Business Matters.',
              isCorrect: true,
            },
          ],
          explain: 'Điều gì được gợi ý về cô Testa?',
        },
        {
          text: "What is suggested about Moveable, Inc.'s products?",
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. They are packable.', isCorrect: true },
            { content: 'B. They are affordable.', isCorrect: false },
            {
              content: 'C. They are available for a short time.',
              isCorrect: false,
            },
            {
              content: 'D. They are made from recycled materials.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được gợi ý về các sản phẩm của Moveable, Inc.?',
        },
      ],
      answers: [],
    },
    {
      text: "<div><div>http://www.Lloydtouringcompany.co.uk</div><div><br></div><div>Choose one of Lloyd Touring Company's (LTC) most popular outings to see the best that London has to offer!&nbsp;</div><div><b>Tour 1:</b> Full-day tour of the most popular tourist sites on one of our famous red double-decker buses. See the Changing of the Guard and conclude the day with a river cruise.&nbsp;<br></div><div><b>Tour 2: </b>Full-day walking tour of London' best shopping areas. Explore London's famous department stores and wander along fashionable Bond and Oxford Streets.&nbsp;<br></div><div><b>Tour 3:</b> Half-day tour on a red double-decker bus, including private tour of the Tower of London and lunch at a nearby café.&nbsp;<br></div><div><b>Tour 4:</b> Half-day tour of Buckingham Palace, including the Changing of the Guard. Tour ends with a traditional fish-and-chips lunch.&nbsp;<br></div><div><b>Tour 5:</b> Full-day walking tour featuring London's top highlights. Complete the day with a medieval banquet.<br></div><div>LTC's knowledgeable local staff members personally guide each one of our tours. Meals are not covered, except when noted in the tour description. Participants are responsible for meeting at chosen departure destination. LTC does not provide pickup from hotels. All tours can be upgraded for an additional fee to include an open-date ticket to the London Eye, London's famous observation wheel.<br></div><div><br></div> <hr><p><b>Ella Bouton</b><br></p><p>Lloyd Touring Company Review</p><p>This was my first trip to London. I decided to see all the major tourist sites on my own, but I wanted someone to help me discover the most interesting places to shop in London. My LTC tour guide, Larissa, was wonderful. She is an avid shopper herself, and at the beginning of the tour, she tried to get to know the participants. She was able to guide everyone to the shops that they were most interested in. It was such a personalized tour! And it was a bonus that Larissa also speaks French. My daughter and I were visiting from Paris, and we appreciated being able to communicate in two languages. The tour was very reasonably priced, too. I would highly recommend it. The only unpleasant part of the tour was that Oxford Street was extremely crowded when we visited, and it was difficult to walk around easily.</p><div><br></div></div>",
      audio: '',
      image: '',
      transcript:
        '<div><p>http://www.Lloydtouringcompany.co.uk</p><p>Chọn một trong những chuyến đi chơi nổi tiếng nhất của Công ty Du lịch Lloyd (LTC) để xem những điều tốt nhất mà London cung cấp!<br></p><p><b>Tour 1:</b> Tham quan cả ngày đến các địa điểm du lịch nổi tiếng nhất trên một trong những chiếc xe buýt hai tầng màu đỏ nổi tiếng của chúng tôi. Xem Sự Đổi Gác và kết thúc một ngày với chuyến du ngoạn trên sông.</p><p><b>Tour 2: </b>Đi bộ cả ngày tham quan các khu mua sắm tốt nhất của London. Khám phá các cửa hàng bách hóa nổi tiếng của London và lang thang dọc theo các Phố Bond và Oxford thời trang.</p><p><b>Tour 3:</b> Tour nửa ngày trên xe buýt hai tầng màu đỏ, bao gồm chuyến tham quan riêng đến Tháp London và ăn trưa tại quán cà phê gần đó.</p><p><b>Tour 4:</b> Tham quan Cung điện Buckingham nửa ngày, bao gồm cả việc Thay đổi Vệ binh. Tour kết thúc với bữa trưa cá và khoai tây chiên truyền thống.</p><p><b>Tour 5:</b> Tour đi bộ cả ngày giới thiệu những điểm nổi bật hàng đầu của London. Hoàn thành một ngày với một bữa tiệc thời trung cổ.</p><p>Các nhân viên địa phương am hiểu của LTC đích thân hướng dẫn từng chuyến tham quan của chúng tôi. Các bữa ăn không được bao trả, trừ trường hợp được ghi chú trong phần mô tả tour. Những người tham gia có trách nhiệm tập hợp tại điểm khởi hành đã chọn. LTC không cung cấp dịch vụ đón từ khách sạn. Tất cả các chuyến tham quan có thể được cập nhật thêm một khoản phí bổ sung để bao gồm một vé ngày mở cửa đến London Eye, bánh xe quan sát nổi tiếng của London.</p><hr><div>Ella Bouton</div><div>Đánh giá Công ty Du lịch Lloyd</div><div>Đây là chuyến đi đầu tiên của tôi đến London. Tôi quyết định tự mình đi xem tất cả các địa điểm du lịch lớn, nhưng tôi muốn ai đó giúp tôi khám phá những nơi thú vị nhất để mua sắm ở London. Hướng dẫn viên LTC của tôi, Larissa, thật tuyệt vời. Bản thân cô ấy là một người thích mua sắm và khi bắt đầu chuyến tham quan, cô ấy đã cố gắng tìm hiểu những người tham gia. Cô ấy đã có thể hướng dẫn mọi người đến những cửa hàng mà họ quan tâm nhất. Đó là một chuyến tham quan được cá nhân hóa! Và một phần thưởng nữa là Larissa cũng nói được tiếng Pháp. Tôi và con gái tôi đã đến thăm từ Paris, và chúng tôi đánh giá cao việc có thể giao tiếp bằng hai ngôn ngữ. Chuyến tham quan cũng có giá rất hợp lý. Tôi nhiệt liệt đề xuất nó. Điểm trừ duy nhất của chuyến tham quan là Phố Oxford cực kỳ đông đúc khi chúng tôi đến thăm, và rất khó để đi bộ xung quanh một cách dễ dàng.</div></div>',
      explain: '',
      questions: [
        {
          text: 'How does Tour 1 differ from all the other tours?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It uses a double-decker bus.',
              isCorrect: false,
            },
            {
              content: 'B. It includes multiple meals at famous restaurants.',
              isCorrect: false,
            },
            {
              content:
                'C. It allows participants to see London from the water.',
              isCorrect: true,
            },
            { content: 'D. It takes the entire day.', isCorrect: false },
          ],
          explain: 'Tour 1 khác với tất cả các tour khác như thế nào?',
        },
        {
          text: 'What is included in the cost of the tours?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. Transportation from hotels',
              isCorrect: false,
            },
            { content: 'B. A tour guide', isCorrect: true },
            {
              content: 'C. Breakfast at a restaurant',
              isCorrect: false,
            },
            {
              content: 'D. A ticket to the London Eye',
              isCorrect: false,
            },
          ],
          explain:
            'Những gì đã bao gồm trong chi phí của các chuyến tham quan?',
        },
        {
          text: 'What tour did Ms. Bouton most likely take?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Tour 2', isCorrect: true },
            { content: 'B. Tour 3', isCorrect: false },
            { content: 'C. Tour 4', isCorrect: false },
            { content: 'D. Tour 5', isCorrect: false },
          ],
          explain:
            'Cô Bouton có nhiều khả năng đã thực hiện chuyến tham quan nào?',
        },
        {
          text: 'What does the review suggest about Ms. Bouton?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. She prefers bus tours.', isCorrect: false },
            { content: 'B. She speaks French.', isCorrect: true },
            {
              content: 'C. She was on a business trip.',
              isCorrect: false,
            },
            { content: 'D. She used LTC before.', isCorrect: false },
          ],
          explain: 'Bài đánh giá gợi ý gì về cô Bouton?',
        },
        {
          text: 'Why was Ms. Bouton disappointed with the tour?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. It was expensive.', isCorrect: false },
            { content: 'B. It was disorganized.', isCorrect: false },
            {
              content: 'C. It was in a very crowded area.',
              isCorrect: true,
            },
            {
              content: 'D. It was in an uninteresting part of the city.',
              isCorrect: false,
            },
          ],
          explain: 'Tại sao cô Bouton lại thất vọng với chuyến tham quan?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div>To: Joseph Morgan &lt;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4923263a2c39216724263b2e282709392c253d2c3b2e3b283921202a3a672a2624">[email&nbsp;protected]</a>&gt;</div><div>From: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="543530393d3a3d27202635203b2614373b2720352731393d3a3526277a3b2633">[email&nbsp;protected]</a></div><div>Date: May 31</div><div>Subject: Book order</div><div>Dear Mr. Morgan,</div><div>Thank you for registering for Emilio Costa\'s seminar on June 11 at the Rothford Business Center. We are glad you took advantage of the opportunity for conference participants to purchase some of Emilio Costa\'s graphic-design books at a discounted price. The information below is a confirmation of your order. The books will be waiting for you at the check-in desk on the day of the seminar. Please note that we will accept any major credit card for payment. We are looking forward to seeing you on June 11.</div><table class="table table-bordered"><tbody><tr><td>Quantity</td><td>Title</td><td>Price</td><td>Discounted Price</td><td>Total Price</td></tr><tr><td>1</td><td>Perfect Figures: Making Data Visually Appleaing</td><td>$22.00</td><td>$17.60</td><td>$17.60<br></td></tr><tr><td>1</td><td>Logos in the Information Age</td><td>$18.00</td><td>$14.40</td><td>$14.40<br></td></tr><tr><td>1</td><td>Branding Strategies in Graphic Design</td><td>$20.00</td><td>$16.00</td><td>$16.00<br></td></tr><tr><td>2</td><td>Best Practices in Web Design: A Euroean Perspective</td><td>$28.00</td><td>$22.40</td><td>$44.80<br></td></tr><tr><td><br></td><td><br></td><td><br></td><td><b>TOTAL DUE:</b></td><td><b>$92.80</b></td></tr></tbody></table><div><br></div><div><br></div><div><br></div> <hr><p><b>Attention, Seminar Participants:</b></p><p>Unfortunately, we do not have copies of Emilio Costa\'s book <i>Branding Strategies in Graphic Design</i> with us today. For those of you who have ordered it, please give your mailing address to the volunteer at the check-in desk, and the book will be mailed to your home at no cost to you. We will charge your credit card upon shipment. We are sorry for the inconvenience.</p><div><br></div><hr><p><b>*E-mail*</b></p><p><b>To: </b><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="cebca1acabbcbaafe0babdbb8ebeaba2baabbca9bcafbea6a7adbde0ada1a3">[email&nbsp;protected]</a></p><p><b>From:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="711b1e021401195f1c1e0316101f3101141d05140316031001191812025f121e1c">[email&nbsp;protected]</a></p><p><b>Date:</b> June 22</p><p><b>Sent: </b>Costa book</p><p>Dear Roberta,</p><p>I\'m looking forward to finishing up our brochure design for Entchen Financial Consultants. Before we submit our final draft, I would like to rethink how we are presenting our data. Have you had a chance to look through the Costa book I showed you? He gives great advice on improving the clarity of financial information in marketing materials. Anyway, let\'s talk about it at lunch tomorrow.</p><p>Best,<br></p><p>Joseph</p><div><br></div><hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p>Tới: Joseph Morgan &lt;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="1f75706c7a6f773172706d787e715f6f7a736b7a6d786d7e6f77767c6c317c7072">[email&nbsp;protected]</a>&gt;</p><p>Từ: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d0b1b4bdb9beb9a3a4a2b1a4bfa290b3bfa3a4b1a3b5bdb9beb1a2a3febfa2b7">[email&nbsp;protected]</a></p><p>Ngày: 31 tháng 5</p><p>Chủ đề: Đặt mua sách</p><p>Gửi anh Morgan,</p><p>Cảm ơn bạn đã đăng ký tham gia hội thảo của Emilio Costa vào ngày 11 tháng 6 tại Trung tâm Kinh doanh Rothford. Chúng tôi rất vui vì bạn đã tận dụng cơ hội dành cho những người tham gia hội nghị để mua một số cuốn sách thiết kế đồ họa của Emilio Costa với mức giá chiết khấu. Thông tin bên dưới là xác nhận đơn hàng của bạn. Sách sẽ sẵn sàng cho bạn tại bàn check-in vào ngày hội thảo. Xin lưu ý rằng chúng tôi sẽ chấp nhận bất kỳ thẻ tín dụng chính nào cho việc thanh toán. Chúng tôi rất mong được gặp bạn vào ngày 11 tháng 6.</p><table class="table table-bordered"><tbody><tr><td>Số lượng</td><td>Tiêu đề</td><td>Giá</td><td>Giá sau giảm giá</td><td>Tổng giá</td></tr><tr><td>1</td><td>Perfect Figures: Making Data Visually Appleaing</td><td>$22.00</td><td>$17.60</td><td>$17.60<br></td></tr><tr><td>1</td><td>Logos in the Information Age</td><td>$18.00</td><td>$14.40</td><td>$14.40<br></td></tr><tr><td>1</td><td>Branding Strategies in Graphic Design</td><td>$20.00</td><td>$16.00</td><td>$16.00<br></td></tr><tr><td>2</td><td>Best Practices in Web Design: A Euroean Perspective</td><td>$28.00</td><td>$22.40</td><td>$44.80<br></td></tr><tr><td><br></td><td><br></td><td><br></td><td><b>TỔNG CỘNG:</b></td><td><b>$92.80</b></td></tr></tbody></table><div><br></div><hr><div><b>Lưu ý, những người tham gia hội thảo:</b></div><div>Rất tiếc, chúng tôi không có các cuốn sách <i>Branding Strategies in Graphic Design</i>&nbsp;của Emilio Costa với chúng ta ngày hôm nay. Đối với những bạn đã đặt sách, vui lòng cung cấp địa chỉ gửi thư của bạn cho tình nguyện viên tại bàn làm thủ tục, và sách sẽ được gửi đến tận nhà miễn phí cho bạn. Chúng tôi sẽ tính phí thẻ tín dụng của bạn khi giao hàng. Chúng tôi xin lỗi về sự bất tiện này.</div><hr><div><b>*E-mail*</b></div><div><b>Tới: </b><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="cdbfa2afa8bfb9ace3b9beb88dbda8a1b9a8bfaabfacbda5a4aebee3aea2a0">[email&nbsp;protected]</a></div><div><b>Từ:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d1bbbea2b4a1b9ffbcbea3b6b0bf91a1b4bda5b4a3b6a3b0a1b9b8b2a2ffb2bebc">[email&nbsp;protected]</a></div><div><b>Ngày: </b>22 tháng 6</div><div><b>Đã gửi:</b> Cuốn sách của Costa</div><div>Roberta thân mến,</div><div>Tôi mong muốn hoàn thành thiết kế tài liệu quảng cáo của chúng tôi dành cho Entchen Financial Consultants. Trước khi chúng tôi gửi bản thảo cuối cùng của chúng tôi, tôi muốn suy nghĩ lại cách chúng tôi trình bày dữ liệu của mình. Bạn đã có cơ hội nhìn qua cuốn sách của Costa mà tôi đã cho bạn xem chưa? Anh ấy đưa ra lời khuyên tuyệt vời về việc cải thiện sự rõ ràng của thông tin tài chính trong các tài liệu tiếp thị. Dù sao thì, chúng ta hãy nói về nó vào bữa trưa ngày mai.</div><div>Chúc bạn những điều tốt nhất,</div><div>Joseph</div><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What most likely is the topic of the seminar on June 11 ?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Financial consulting', isCorrect: false },
            { content: 'B. Graphic design', isCorrect: true },
            { content: 'C. Marketing strategies', isCorrect: false },
            { content: 'D. Business writing', isCorrect: false },
          ],
          explain:
            'Điều gì có khả năng nhất là chủ đề của cuộc hội thảo vào ngày 11 tháng 6?',
        },
        {
          text: 'What iS suggested about Mr. Morgan?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. He attended the seminar with a coworker.',
              isCorrect: false,
            },
            {
              content: 'B. He gave a presentation at the seminar.',
              isCorrect: false,
            },
            {
              content: 'C. He received free shipping on a book purchase.',
              isCorrect: true,
            },
            {
              content: 'D. He paid for some books in advance.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được gợi ý về anh Morgan?',
        },
        {
          text: 'What is the purpose of the notice?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. To explain a problem', isCorrect: true },
            { content: 'B. To ask for volunteers', isCorrect: false },
            { content: 'C. To request payment', isCorrect: false },
            { content: 'D. To promote a book', isCorrect: false },
          ],
          explain: 'Mục đích của thông báo là gì?',
        },
        {
          text: 'According to the second e-mail, what does Mr. Morgan suggest changing?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. The deadline for submitting a project',
              isCorrect: false,
            },
            {
              content: 'B. The content of a book review',
              isCorrect: false,
            },
            {
              content: 'C. The time of a scheduled meeting',
              isCorrect: false,
            },
            {
              content: 'D. The display of some information',
              isCorrect: true,
            },
          ],
          explain: 'Theo bức thư thứ hai, anh Morgan đề nghị thay đổi điều gì?',
        },
        {
          text: 'How much did Mr. Morgan spend on the book he showed to Ms. Tsu?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. $17.60', isCorrect: true },
            { content: 'B. $14.40', isCorrect: false },
            { content: 'C. $16.00', isCorrect: false },
            { content: 'D. $22.40', isCorrect: false },
          ],
          explain:
            'Anh Morgan đã chi bao nhiêu cho cuốn sách mà ông đã cho cô Tsu xem?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div><b>Anton Building</b></div><div>Clanton (12 October)--The planned renovation of the historic Anton Building by Jantuni Property Developers (JPD) is facing new delays. A JPD spokesperson says their negotiations with the city regarding a package of subsidies and tax incentives are ongoing and are proving somewhat contentious. According to the renovation plan, JPD must protect the historical integrity of the Anton Building while it creates a mixed-use interior, offering both office space and lower-level retail space. However, JPD\'s city permit to do the project is on hold pending the current negotiations.</div><div><br></div><div>This is making city revitalization advocates increasingly anxious. Aditi Yadav comments. "This plan to create useful space out of an empty decaying building will go a long way to restoring vibrancy to that area of the city. I sincerely hope that JPD does not back out. In creating their offer, the City Council should consider JPD\'s excellent record of beautifully restoring and maintaining several other historic buildings in Clanton."</div><div><br></div> <hr><p><b>From:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="3253505347465b414653725e575c5d5b44531f5a57535e465a1c515d5f">[email&nbsp;protected]</a></p><p><b>To:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0a7e2478657d6f66664a606b647e7f64637a78657a6f787e736e6f7c6f66657a6f787924696567">[email&nbsp;protected]</a></p><p><b>Date:</b> 20 February</p><p><b>Subject:</b> Lease inquiry</p><p>Dear Mr. Rowell,</p><p>I am the owner of Lenoiva, a health-care technology company. We plan to expand our operations and we need new office space. The Anton Building is one of the locations in Clanton that we are considering. We have been informed that your restoration project of this building will be finished sometime this spring, which is good timing for us. We are particularly attracted by the easy access to public transportation services that your building offers. Do you still have spaces available for rent? We anticipate needing a space at least 300 square metres in size. Would there be any reserved parking for our employees if we rented there? We would appreciate any information you can provide.</p><p>Thank you in advance,</p><p><b>Ana Bautista</b></p><div><br></div><hr><p><img src="https://toeicez.com/medias/toeicfull/ets2022/ets_toeic_2022_test_1/191_195.png"></p><hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Tòa nhà Anton</b></p><p>Clanton (12 tháng 10) - Kế hoạch cải tạo Tòa nhà Anton lịch sử của Jantuni Property Developers (JPD) đang phải đối mặt với sự chậm trễ mới. Người phát ngôn của JPD cho biết các cuộc đàm phán của họ với thành phố liên quan đến gói trợ cấp và ưu đãi thuế đang diễn ra và có phần gây tranh cãi. Theo kế hoạch cải tạo, JPD phải bảo vệ tính toàn vẹn lịch sử của Tòa nhà Anton trong khi nó tạo ra một không gian nội bộ sử dụng hỗn hợp, cung cấp cả không gian văn phòng và không gian bán lẻ tầng thấp hơn. Tuy nhiên, giấy phép cấp thành phố của JPD để thực hiện dự án đang bị tạm dừng trong khi chờ các cuộc đàm phán hiện tại.</p><p>Điều này đang khiến những người ủng hộ việc tái sinh thành phố ngày càng lo lắng. Aditi Yadav bình luận. "Kế hoạch này nhằm tạo ra không gian hữu ích từ một tòa nhà mục nát trống rỗng sẽ mất một chặng đường dài để khôi phục sự sống động cho khu vực đó của thành phố. Tôi thực sự hy vọng rằng JPD sẽ không từ bỏ. Khi đưa ra lời đề nghị của họ, Hội đồng thành phố nên xem xét những kỷ lục của JPD về việc khôi phục và duy trì một cách đẹp đẽ một số tòa nhà lịch sử khác ở Clanton. "</p><hr><div><b>Từ: </b><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fc9d9e9d8988958f889dbc90999293958a9dd194999d908894d29f9391">[email&nbsp;protected]</a></div><div><b>Tới:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="65114b170a12000909250f040b11100b0c15170a150017111c01001300090a150017164b060a08">[email&nbsp;protected]</a></div><div><b>Ngày:</b> 20 tháng 2</div><div><b>Chủ đề:</b> Yêu cầu cho thuê</div><div>Ông Rowell thân mến,</div><div>Tôi là chủ sở hữu của Lenoiva, một công ty công nghệ chăm sóc sức khỏe. Chúng tôi có kế hoạch mở rộng hoạt động và chúng tôi cần không gian văn phòng mới. Tòa nhà Anton là một trong những địa điểm ở Clanton mà chúng tôi đang xem xét. Chúng tôi đã được thông báo rằng dự án trùng tu tòa nhà này của bạn sẽ hoàn thành vào mùa xuân này, đây là thời điểm tốt cho chúng tôi. Chúng tôi đặc biệt bị thu hút bởi khả năng tiếp cận dễ dàng với các dịch vụ giao thông công cộng mà tòa nhà của bạn cung cấp. Bạn vẫn còn chỗ trống cho thuê chứ? Chúng tôi dự kiến cần một không gian có diện tích ít nhất là 300 mét vuông. Có bãi đậu xe dành riêng cho nhân viên của chúng tôi nếu chúng tôi thuê ở đó không? Chúng tôi đánh giá cao bất kỳ thông tin nào bạn có thể cung cấp.</div><div>Cảm ơn bạn trước,</div><div><b>Ana Bautista</b></div><hr><p><img src="https://toeicez.com/medias/toeicfull/ets2022/ets_toeic_2022_test_1/191_195.png"></p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What is the purpose of the article?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. To report on the benefits of mixed-use buildings',
              isCorrect: false,
            },
            {
              content: 'B. To provide an update on a project a',
              isCorrect: true,
            },
            {
              content: 'C. To encourage residents to apply for jobs',
              isCorrect: false,
            },
            {
              content: 'D. To announce a change in city policy',
              isCorrect: false,
            },
          ],
          explain: 'Mục đích của bài báo là gì?',
        },
        {
          text: 'What positive aspect of the Anton Building does Ms. Yadav mention?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Its cost efficiency', isCorrect: false },
            {
              content: 'B. Its compliance with environmental standards',
              isCorrect: false,
            },
            {
              content: 'C. The anticipated quality of the renovation work',
              isCorrect: true,
            },
            {
              content: 'D. The large amount of retail space',
              isCorrect: false,
            },
          ],
          explain:
            'Cô Yadav đề cập đến khía cạnh tích cực nào của Tòa nhà Anton?',
        },
        {
          text: "What is suggested about JPD in Ms. Bautista's e-mail?",
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It received the approval it was seeking.',
              isCorrect: true,
            },
            {
              content:
                'B. It has the only available office spaces for rent in Clanton.',
              isCorrect: false,
            },
            {
              content: 'C. It has moved its main office to the Anton Building.',
              isCorrect: false,
            },
            {
              content: 'D. It is a relatively new company.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được gợi ý về JPD trong e-mail của cô Bautista?',
        },
        {
          text: 'What information about the building does Ms. Bautista request from Mr. Rowell?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. The distance to the nearest train station',
              isCorrect: false,
            },
            {
              content: "B. The other occupants' types of business",
              isCorrect: false,
            },
            {
              content: 'C. The completion date of the renovation',
              isCorrect: false,
            },
            {
              content: 'D. The availability of employee parking',
              isCorrect: true,
            },
          ],
          explain: 'Cô Bautista yêu cầu ông Rowell thông tin gì về tòa nhà?',
        },
        {
          text: 'What space would Lenoiva most likely choose to rent?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Unit 2B', isCorrect: false },
            { content: 'B. Unit 2C', isCorrect: false },
            { content: 'C. Unit 2D', isCorrect: false },
            { content: 'D. Unit 2E', isCorrect: true },
          ],
          explain: 'Lenoiva có nhiều khả năng sẽ chọn thuê mặt bằng nào nhất?',
        },
      ],
      answers: [],
    },
    {
      text: '<div><div><b>From: </b>Tanya Jefferson &lt;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="40342a252626002b2539333530302c292532336e232f2d">[email&nbsp;protected]</a>&gt;</div><div><b>To:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="40292e262f0024212e2533342f2e272521326e232f2d">[email&nbsp;protected]</a></div><div><b>Subject:</b> Request for group rental information</div><div><b>Date: </b>May 29</div><div>Hello Daneston Gear Company (DGC),<br></div><div>I am the president of an activities club. This month. our 30 members intend to take a day trip to Daneston to go boating on the lake. Could you please send me information regarding your rates and offerings? We are most interested in renting boats that seat one person. Some time ago, I rented a kayak for myself from DGC, but this will be my first time renting from DGC for a group.</div><div>Thank you,<br></div><div>Tanya Jefferson</div><div><br></div> <hr><p><b>From:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="274e494148674346494254534849404246550944484a">[email&nbsp;protected]</a></p><p><b>To:</b> Tanya Jefferson &lt;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ec9886898a8aac8789959f999c9c8085899e9fc28f8381">[email&nbsp;protected]</a>&gt;</p><p><b>Subject:</b> RE: Request for group rental information</p><p><b>Date: </b>May 30</p><p><b>Attachment: </b>&nbsp;Price list</p><p>Dear Ms. Jefferson,<br></p><p>Thank you for contacting us regarding your group\'s anticipated visit to DGC. We look forward to equipping your club for its next adventure. A price list is attached to this e-mail. If you wish to discuss our rentals in more detail, please call me at (888) 555-1578. Incidentally, we recently added a rowboat option that is an excellent choice for adults who wish to boat with their children.</p><p>I will be pleased to help you when you are ready to make your reservation.<br></p><p>Best,<br></p><p>Adam Goldstein</p><div><br></div><hr><p><b>DGC Price List</b></p><table class="table table-bordered"><tbody><tr><td><br></td><td>Boat type</td><td>Hourly rate<br></td><td>Additional 1/2 hour<br></td></tr><tr><td><b>Option 1</b><br></td><td>2-person canoe<br></td><td>$13<br></td><td>$8<br></td></tr><tr><td><b>Option 2</b><br></td><td>3-person canoe<br></td><td>$15<br></td><td>$8</td></tr><tr><td><b>Option 3</b><br></td><td>1-person kayak<br></td><td>$11<br></td><td>$8</td></tr><tr><td><b>Option 4</b><br></td><td>2-person kayak<br></td><td>$14<br></td><td>$8<br></td></tr><tr><td><b>Option 5</b><br></td><td><p>3- or 4-person rowboat&nbsp;<span>(3 adults&nbsp;</span><span>or 2 adults and 2 children</span></p></td><td>$13<br></td><td>$9<br></td></tr></tbody></table><p>- We are open every day from April to October, 10:00 A.M. to 6:30 P.M</p><p>- All boats must be returned by 6:15 P.M. on the day they are rented.</p><p>- Life jackets and paddles are included in the rental fee.</p><p>- Groups of ten or more qualify for a discount if they book at least one week in advance.</p><p><br></p><hr></div>',
      audio: '',
      image: '',
      transcript:
        '<div><p><b>Từ:</b> Tanya Jefferson &lt;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="87f3ede2e1e1c7ece2fef4f2f7f7ebeee2f5a9e4e8ea">[email&nbsp;protected]</a>&gt;</p><p><b>Tới:</b> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="80e9eee6efc0e4e1eee5f3f4efeee7e5e1f2aee3efed">[email&nbsp;protected]</a></p><p><b>Chủ đề: </b>Yêu cầu thông tin cho thuê nhóm</p><p><b>Ngày: </b>29 tháng 5</p><p>Xin chào Daneston Gear Company (DGC),</p><p>Tôi là chủ tịch của một câu lạc bộ hoạt động. Tháng này, 30 thành viên của chúng tôi dự định thực hiện một chuyến đi trong ngày đến Daneston để chèo thuyền trên hồ. Bạn có thể vui lòng gửi cho tôi thông tin về mức giá và dịch vụ của bạn được không? Chúng tôi quan tâm nhất đến việc thuê thuyền một chỗ ngồi. Cách đây một thời gian, tôi đã thuê thuyền kayak cho mình từ DGC, nhưng đây sẽ là lần đầu tiên tôi thuê thuyền từ DGC cho một nhóm.</p><p>Cảm ơn bạn,</p><p>Tanya Jefferson</p><hr><div><b>Từ: </b><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2940474f46694d48474c5a5d46474e4c485b074a4644">[email&nbsp;protected]</a></div><div><b>Tới: </b>Tanya Jefferson &lt;<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="cfbba5aaa9a98fa4aab6bcbabfbfa3a6aabde1aca0a2">[email&nbsp;protected]</a>&gt;</div><div><b>Chủ đề:</b> RE: Yêu cầu thông tin cho thuê nhóm</div><div><b>Ngày: </b>30 tháng 5</div><div><b>Đính kèm:</b>&nbsp;Bảng giá</div><div>Cô Jefferson thân mến,</div><div>Cảm ơn bạn đã liên hệ với chúng tôi về chuyến thăm dự kiến của nhóm của bạn đến DGC. Chúng tôi trông đợi được trang bị cho câu lạc bộ của bạn cho cuộc phiêu lưu tiếp theo. Một bảng giá được đính kèm trong e-mail này. Nếu bạn muốn thảo luận chi tiết hơn về việc cho thuê của chúng tôi, vui lòng gọi cho tôi theo số (888) 555-1578. Nhân tiện, gần đây chúng tôi đã thêm tùy chọn chèo thuyền, đây là một lựa chọn tuyệt vời cho người lớn muốn chèo thuyền cùng con cái của họ.</div><div>Tôi sẽ sẵn lòng giúp đỡ bạn khi bạn đã sẵn sàng đặt chỗ.</div><div>Chúc bạn những điều tốt đẹp nhất,</div><div>Adam Goldstein</div><hr><p><b>DGC Bảng giá</b></p><table class="table table-bordered"><tbody><tr><td><br></td><td>Loại thuyền</td><td>Giá theo giờ<br></td><td>Thêm nửa giờ<br></td></tr><tr><td><b>Lựa chọn 1</b><br></td><td>Ca-nô 2 người<br></td><td>$13<br></td><td>$8<br></td></tr><tr><td><b>Lựa chọn&nbsp;</b><b>2</b><br></td><td>Ca-nô 3 người<br></td><td>$15<br></td><td>$8</td></tr><tr><td><b>Lựa chọn</b><b>&nbsp;3</b><br></td><td>Kayak 1 người<br></td><td>$11<br></td><td>$8</td></tr><tr><td><b>Lựa chọn&nbsp;</b><b>4</b><br></td><td>Kayak 2 người<br></td><td>$14<br></td><td>$8<br></td></tr><tr><td><b>Lựa chọn</b><b>&nbsp;5</b><br></td><td><p>Thuyền chèo 3 hoặc 4 người (3 người lớn hoặc 2 người lớn và 2 trẻ em)<br></p></td><td>$13<br></td><td>$9<br></td></tr></tbody></table><p>- Chúng tôi mở cửa hàng ngày từ tháng 4 đến tháng 10, từ 10:00 sáng đến 6:30 chiều.</p><p>- Tất cả các thuyền phải được trả lại trước 06:15 chiều. vào ngày chúng được thuê.</p><p>- Áo phao và mái chèo đã được bao gồm trong phí thuê.</p><p>- Các nhóm từ mười người trở lên đủ điều kiện được giảm giá nếu họ đặt trước ít nhất một tuần.</p><p><br></p><hr></div>',
      explain: '',
      questions: [
        {
          text: 'What does Ms. Jefferson mention in the first e-mail?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: "A. She has used DGC's services before.",
              isCorrect: true,
            },
            {
              content: 'B. She teaches a course in boating safety.',
              isCorrect: false,
            },
            {
              content: 'C. She is a resident of Daneston.',
              isCorrect: false,
            },
            { content: 'D. She owns her own kayak.', isCorrect: false },
          ],
          explain: 'Cô Jefferson đề cập đến điều gì trong e-mail đầu tiên?',
        },
        {
          text: "What rental option best meets Ms. Jefferson's needs?",
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. Option 1', isCorrect: false },
            { content: 'B. Option 2', isCorrect: false },
            { content: 'C. Option 3', isCorrect: true },
            { content: 'D. Option 4', isCorrect: false },
          ],
          explain:
            'Phương án thuê nào đáp ứng tốt nhất nhu cầu của cô Jefferson?',
        },
        {
          text: "What is the hourly rate of DGC's newest rental option?",
          image: '',
          transcript: '',
          audio: '',
          answers: [
            { content: 'A. $11', isCorrect: false },
            { content: 'B. $13', isCorrect: true },
            { content: 'C. $14', isCorrect: false },
            { content: 'D. $15', isCorrect: false },
          ],
          explain:
            'Mức phí theo giờ của phương án cho thuê mới nhất của DGC là bao nhiêu?',
        },
        {
          text: 'What is indicated about DGC in the price list?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. It is open for business all year.',
              isCorrect: false,
            },
            {
              content: 'B. It may close for the day if the weather is bad.',
              isCorrect: false,
            },
            {
              content: 'C. It offers special rates for groups of ten or more.',
              isCorrect: true,
            },
            {
              content: 'D. It accepts reservations on its Web site.',
              isCorrect: false,
            },
          ],
          explain: 'Điều gì được chỉ ra về DGC trong bảng giá?',
        },
        {
          text: 'According to the price list, what is true about all boats?',
          image: '',
          transcript: '',
          audio: '',
          answers: [
            {
              content: 'A. They can fit three adults.',
              isCorrect: false,
            },
            {
              content: 'B. They can be rented overnight.',
              isCorrect: false,
            },
            {
              content: 'C. They are suitable for small children.',
              isCorrect: false,
            },
            {
              content: 'D. They are equipped with life jackets.',
              isCorrect: true,
            },
          ],
          explain:
            'Theo bảng giá, điều gì đúng đối với tất cả các loại thuyền?',
        },
      ],
      answers: [],
    },
  ];

  for (const {
    answers,
    audio,
    explain,
    image,
    text,
    transcript,
    questions,
  } of data) {
    const parent = await prisma.question.create({
      data: {
        audio,
        explain,
        transcript,
        image,
        text,
        partId: '884f3cfb-d7df-48c7-a479-f4fb551c4086',
        partType: PartType.PART7,
        testId: '332a0ba0-a2d1-4143-b015-9cd32df7e2b1',
      },
    });

    for (const {
      audio,
      explain,
      image,
      text,
      answers,
      transcript,
    } of questions) {
      await prisma.question.create({
        data: {
          audio,
          explain,
          transcript,
          image,
          text,
          answers: {
            createMany: {
              data: answers,
            },
          },
          parentId: parent.id,
        },
      });
    }
  }
};

part3467()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
