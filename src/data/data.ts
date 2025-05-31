import { Media, News, Sermon, LiturgicalEvent, Notification } from "../utils/interface";

// Dữ liệu mẫu
export const newsData: News[] = [
    {
        id: 1,
        title: "Thánh lễ Truyền chức Linh mục tại Giáo phận Phú Cường",
        date: "15/6/2025",
        content: [
            {
                type: 'text',
                value: "Sáng ngày 15/6/2025, tại Nhà thờ Chính Tòa Phú Cường, Đức Cha Giuse Nguyễn Tấn Tước đã chủ sự Thánh lễ Truyền chức Linh mục cho 8 thầy phó tế sau nhiều năm tu học và chuẩn bị."
            },
            {
                type: 'image',
                image: [
                    {
                        id: 1,
                        url: "/images/news-image-1.jpg",
                        alt: "Đức Cha Giuse chủ sự Thánh lễ Truyền chức"
                    }
                ]
            },
            {
                type: 'text',
                value: "Đồng tế với Đức Cha có đông đảo quý Cha trong và ngoài Giáo phận, cùng sự hiện diện của gia đình, thân nhân, cộng đoàn dân Chúa đến hiệp dâng lời cầu nguyện cho các tân linh mục."
            },
            {
                type: 'image',
                image: [{
                    id: 2,
                    url: "/images/news-image-2.jpg",
                    alt: "Các tiến chức trong nghi thức truyền chức"
                }]
            },
            {
                type: 'text',
                value: "Trong bài giảng, Đức Cha nhấn mạnh vai trò của Linh mục như là người phục vụ cộng đoàn, mang hình ảnh của Chúa Kitô giữa thế giới hôm nay, sống khiêm nhường và quảng đại."
            },
            {
                type: 'image',
                image: [{
                    id: 3,
                    url: "/images/news-image-3.jpg",
                    alt: "Các tân linh mục chụp hình lưu niệm với Đức Cha"
                }]
            }
        ]
    },
    {
        id: 2,
        title: "Giáo phận Bùi Chu: Lễ Khánh thành Nhà thờ Giáo xứ Phú Nhai",
        date: "01/5/2025",
        content: [
            {
                type: 'text',
                value: "Ngày 01/5/2025, Đức Cha Tôma Vũ Đình Hiệu - Giám mục Giáo phận Bùi Chu đã chủ sự nghi thức làm phép và dâng Thánh lễ Khánh thành Nhà thờ Giáo xứ Phú Nhai sau hơn 2 năm trùng tu."
            },
            {
                type: 'image',
                image: [{
                    id: 4,
                    url: "/images/news-image-4.jpg",
                    alt: "Nhà thờ Giáo xứ Phú Nhai sau khi trùng tu"
                }]
            },
            {
                type: 'text',
                value: "Tham dự Thánh lễ có quý Cha, tu sĩ nam nữ, và hàng ngàn giáo dân từ khắp nơi trở về cùng hiệp thông với cộng đoàn Giáo xứ Phú Nhai trong ngày vui trọng đại này."
            },
            {
                type: 'image',
                image: [{
                    id: 5,
                    url: "/images/news-image-5.jpg",
                    alt: "Cộng đoàn tham dự Thánh lễ khánh thành"
                }]
            },
            {
                type: 'text',
                value: "Sau Thánh lễ, mọi người cùng nhau chia sẻ niềm vui trong buổi tiệc thân mật, thể hiện sự gắn bó và hiệp nhất trong Đức Kitô giữa các thành phần Dân Chúa."
            }
        ]
    },
    {
        id: 3,
        title: "Giáo phận Đà Lạt tổ chức Đại hội Giới trẻ 2025",
        date: "10/7/2025",
        content: [
            {
                type: 'text',
                value: "Từ ngày 10 đến 12/7/2025, tại Trung tâm Mục vụ Đà Lạt, hơn 2.000 bạn trẻ từ khắp các giáo xứ trong Giáo phận đã quy tụ về tham dự Đại hội Giới trẻ với chủ đề 'Hãy đứng dậy và bước đi'."
            },
            {
                type: 'image',
                image: [{
                    id: 6,
                    url: "/images/news-image-6.jpg",
                    alt: "Các bạn trẻ tham dự nghi thức khai mạc"
                }]
            },
            {
                type: 'text',
                value: "Đức Cha Đaminh Nguyễn Văn Mạnh đã khai mạc Đại hội bằng Thánh lễ long trọng, kêu gọi giới trẻ sống đức tin mạnh mẽ, trở nên ánh sáng giữa thế giới hôm nay."
            },
            {
                type: 'image',
                image: [{
                    id: 7,
                    url: "/images/news-image-7.jpg",
                    alt: "Đức Cha Đaminh trong Thánh lễ khai mạc"
                }]
            },
            {
                type: 'text',
                value: "Các hoạt động của Đại hội bao gồm chia sẻ đức tin, thảo luận nhóm, đêm lửa trại, và chương trình hoan ca sôi động mang lại bầu khí trẻ trung và thiêng liêng."
            },
            {
                type: 'image',
                image: [{
                    id: 8,
                    url: "/images/news-image-8.jpg",
                    alt: "Đêm hoan ca và lửa trại"
                }]
            }
        ]
    }
];

export const sermonsData: Sermon[] = [
    {
        id: 1,
        title: "CHÚA NHẬT 2 PHỤC SINH NĂM C (20.31)",
        date: "2025-04-20",
        description:
            "“Vào chiều ngày thứ nhất trong tuần, nơi các môn đệ ở, các cửa đều đóng kín, vì các ông sợ người Do-thái. Đức Giê-su đến, đứng giữa các ông và nói: ‘Bình an cho anh em!’ Nói xong, Người cho các ông xem tay và cạnh sườn. Các môn đệ vui mừng vì được thấy Chúa.”",
        image: [{
            id: 9,
            url: "/images/news-image-1.jpg",
            alt: "Đức Giê-su Phục Sinh hiện ra với các môn đệ",
        }],
        author: {
            id: 1,
            name: "Lm. Phê-rô Vân Lý",
        },
        sections: [
            {
                id: 1,
                title: "Đức tin Ki-tô giáo: phụng sinh, sự sống bị từ chối",
                content:
                    "Đức tin Ki-tô giáo là đức tin vào sự sống lại của Đức Giê-su, Đấng đã chết và sống lại để cứu độ nhân loại. Đức tin ấy không chỉ là một niềm tin suông, mà là một đời sống, một cách sống, một sự dấn thân để làm chứng cho Đức Giê-su Phục Sinh.",
                section_order: 1,
                image: [{
                    id: 10,
                    url: "/images/news-image-2.jpg",
                    alt: "Biểu tượng của đức tin Ki-tô giáo",
                }],
            },
            {
                id: 2,
                title: "Bối cảnh của Phúc Âm: niềm tin yếu đuối, sự sống bị đe dọa",
                content:
                    "Các môn đệ, sau khi Đức Giê-su chịu chết, đã sống trong sợ hãi. Họ đóng cửa, trốn tránh, không dám ra ngoài vì sợ người Do-thái. Nhưng chính trong hoàn cảnh đó, Đức Giê-su Phục Sinh đã hiện ra, mang đến bình an và Thánh Thần.",
                section_order: 2,
                image: [{
                    id: 11,
                    url: "/images/news-image-3.jpg",
                    alt: "Các môn đệ trong nỗi sợ hãi",
                }],
            },
            {
                id: 3,
                title: "Ý nghĩa của Thiên Chúa: niềm tin sống động",
                content:
                    "Đức Giê-su Phục Sinh không chỉ là một sự kiện lịch sử, mà là một thực tại sống động. Ngài vẫn hiện diện giữa chúng ta qua Bí tích Thánh Thể, qua Lời Chúa, và qua đời sống của cộng đoàn Ki-tô hữu.",
                section_order: 3,
                image: [{
                    id: 12,
                    url: "/images/news-image-4.jpg",
                    alt: "Bí tích Thánh Thể",
                }],
            },
        ],
    },
    {
        id: 2,
        title: "CHÚA NHẬT 3 PHỤC SINH NĂM C (21.1-19)",
        date: "2025-04-27",
        description:
            "“Sau đó, Đức Giê-su lại hiện ra với các môn đệ bên bờ hồ Ti-bê-ri-a. Ông Si-môn Phê-rô nói với các môn đệ: ‘Tôi đi đánh cá đây.’ Họ đáp: ‘Chúng tôi cùng đi với anh.’ Họ ra đi và lên thuyền, nhưng suốt đêm đó họ không bắt được gì.”",
        image: [{
            id: 12,
            url: "/images/news-image-5.jpg",
            alt: "Đức Giê-su hiện ra bên bờ hồ Ti-bê-ri-a",
        }],
        author: {
            id: 2,
            name: "Lm. Gio-an Lê Quang",
        },
        sections: [
            {
                id: 4,
                title: "Cuộc gặp gỡ bên bờ hồ: tình yêu và sứ mệnh",
                content:
                    "Sau khi Đức Giê-su Phục Sinh, Ngài đã hiện ra với các môn đệ bên bờ hồ Ti-bê-ri-a, nơi các ông đang đánh cá. Cuộc gặp gỡ này không chỉ là một phép lạ về mẻ cá lạ, mà còn là một lời mời gọi sâu sắc về tình yêu và sứ mệnh. Đức Giê-su hỏi Phê-rô: ‘Con có yêu mến Thầy không?’ và giao phó cho ông sứ mệnh chăn dắt đoàn chiên của Ngài.",
                section_order: 1,
                image: [{
                    id: 13,
                    url: "/images/news-image-6.jpg",
                    alt: "Phê-rô và Đức Giê-su bên bờ hồ",
                }],
            },
            {
                id: 5,
                title: "Mẻ cá lạ: biểu tượng của sự dư dật",
                content:
                    "Mẻ cá lạ mà các môn đệ bắt được sau khi nghe lời Đức Giê-su là biểu tượng của sự dư dật mà Thiên Chúa ban tặng khi chúng ta vâng lời Ngài. Điều này nhắc nhở chúng ta rằng, trong mọi khó khăn của cuộc sống, nếu chúng ta đặt niềm tin vào Chúa, Ngài sẽ ban cho chúng ta những ơn lành vượt ngoài mong đợi.",
                section_order: 2,
                image: [{
                    id: 14,
                    url: "/images/news-image-7.jpg",
                    alt: "Mẻ cá lạ bên bờ hồ",
                }],
            },
            {
                id: 6,
                title: "Sứ mệnh của Phê-rô: yêu thương và phục vụ",
                content:
                    "Qua ba lần hỏi Phê-rô ‘Con có yêu mến Thầy không?’, Đức Giê-su không chỉ khôi phục vai trò của Phê-rô sau khi ông chối Thầy, mà còn trao cho ông một sứ mệnh mới: yêu thương và phục vụ đoàn chiên của Chúa. Đây là lời mời gọi dành cho mỗi người chúng ta, sống đời Kitô hữu với tình yêu và sự dấn thân.",
                section_order: 3,
                image: [{
                    id: 8,
                    url: "/images/news-image-8.jpg",
                    alt: "Phê-rô nhận sứ mệnh từ Đức Giê-su",
                }],
            },
        ],
    },
    {
        id: 3,
        title: "CHÚA NHẬT 4 PHỤC SINH NĂM C (10.27-30)",
        date: "2025-05-04",
        description:
            "“Đức Giê-su nói: ‘Chiên của tôi thì nghe tiếng tôi; tôi biết chúng, và chúng theo tôi. Tôi ban cho chúng sự sống đời đời; không bao giờ chúng phải hư mất, và không ai cướp được chúng khỏi tay tôi.’",
        image: [{
            id: 9,
            url: "/images/news-image-9.jpg",
            alt: "Đức Giê-su, Người Chăn Chiên nhân lành",
        }],
        author: {
            id: 3,
            name: "Lm. Phao-lô Nguyễn Minh Tâm",
        },
        sections: [
            {
                id: 7,
                title: "Người Chăn Chiên nhân lành: hình ảnh của Đức Giê-su",
                content:
                    "Đức Giê-su tự nhận mình là Người Chăn Chiên nhân lành, Đấng biết rõ từng con chiên và sẵn sàng hy sinh mạng sống để bảo vệ chúng. Hình ảnh này cho thấy tình yêu vô bờ bến của Thiên Chúa dành cho nhân loại, một tình yêu không chỉ dừng lại ở lời nói mà được thể hiện qua hành động.",
                section_order: 1,
                image: [{
                    id: 10,
                    url: "/images/news-image-9.jpg",
                    alt: "Người Chăn Chiên và đàn chiên",
                }],
            },
            {
                id: 8,
                title: "Nghe tiếng Chúa: đời sống cầu nguyện",
                content:
                    "Đức Giê-su nói rằng chiên của Ngài nghe tiếng Ngài. Điều này nhắc nhở chúng ta về tầm quan trọng của đời sống cầu nguyện, lắng nghe tiếng Chúa qua Kinh Thánh, qua Bí tích, và qua những biến cố trong cuộc sống hằng ngày. Một đời sống gắn bó với Chúa sẽ giúp chúng ta nhận ra và bước theo tiếng gọi của Ngài.",
                section_order: 2,
                image: [{
                    id: 11,
                    url: "/images/news-image-8.jpg",
                    alt: "Cầu nguyện bên ánh nến",
                }],
            },
            {
                id: 9,
                title: "Sự sống đời đời: lời hứa của Thiên Chúa",
                content:
                    "Lời hứa của Đức Giê-su về sự sống đời đời là nguồn hy vọng lớn lao cho các Kitô hữu. Dù chúng ta có phải đối diện với những khó khăn, thử thách trong cuộc sống, chúng ta vẫn luôn được an ủi bởi lời hứa này: không ai có thể cướp chúng ta khỏi tay Chúa.",
                section_order: 3,
                image: [{
                    id: 12,
                    url: "/images/news-image-7.jpg",
                    alt: "Cánh cửa dẫn đến sự sống đời đời",
                }],
            },
        ],
    }
];

export const announcementsData: Notification[] = [
    { id: 1, title: 'Thông báo quan trọng', description: 'Hệ thống sẽ bảo trì từ 10h-12h ngày 20/04/2025.', date: '16/04/2025', image: [], isNew: true },
    { id: 2, title: 'Cập nhật lịch sinh hoạt', description: 'Lịch sinh hoạt mới đã được cập nhật trên website.', date: '15/04/2025', image: [], isNew: true },
    { id: 3, title: 'Thông báo quan trọng', description: 'Hệ thống sẽ bảo trì từ 10h-12h ngày 20/04/2025.', date: '16/04/2025', image: [], isNew: true },
    { id: 4, title: 'Cập nhật lịch sinh hoạt', description: 'Lịch sinh hoạt mới đã được cập nhật trên website.', date: '15/04/2025', image: [], isNew: true },
];

export const mediaData: Media[] = [
    { id: 1, type: 'image', url: '/images/img_media_1.jpg', title: 'Hình ảnh Lễ Giáng Sinh 2024' },
    { id: 2, type: 'video', url: '/media/test.mp4', title: 'Video cầu nguyện buổi sáng' },
    { id: 3, type: 'image', url: '/images/img_media_1.jpg', title: 'Hình ảnh Ngày hội gia đình' },
];

export const liturgicalWeekData: LiturgicalEvent[] = [
    {
        id: 1,
        date: "2025-04-28", // Thứ Hai
        title: "Thánh Louis Marie de Montfort (Lễ nhớ)",
        massTimes: ["05:30", "18:00"],
        liturgicalColor: "Trắng",
        readings: {
            firstReading: "Cv 14,5-18",
            psalm: "Tv 113",
            gospel: "Ga 14,21-26"
        },
        celebrant: "Lm. Gioan Trần Văn A",
        notes: "Lễ kính riêng trong Hội Dòng Mến Thánh Giá."
    },
    {
        id: 2,
        date: "2025-04-29", // Thứ Ba
        title: "Thánh Catarina thành Siena (Lễ kính)",
        massTimes: ["06:00", "17:30"],
        liturgicalColor: "Trắng",
        readings: {
            firstReading: "1 Ga 1,5 – 2,2",
            psalm: "Tv 102",
            gospel: "Mt 11,25-30"
        },
        celebrant: "Lm. Giuse Nguyễn Văn B"
    },
    {
        id: 3,
        date: "2025-04-30", // Thứ Tư
        title: "Thánh Giuse Thợ (Lễ trọng chuyển ngày)",
        massTimes: ["05:30", "19:00"],
        liturgicalColor: "Trắng",
        readings: {
            firstReading: "St 1,26-31a",
            psalm: "Tv 89",
            gospel: "Mt 13,54-58"
        },
        celebrant: "Lm. Phêrô Lê Văn C"
    },
    {
        id: 4,
        date: "2025-05-01", // Thứ Năm
        title: "Thánh Giuse Thợ (Lễ trọng)",
        massTimes: ["05:00", "18:00"],
        liturgicalColor: "Trắng",
        readings: {
            firstReading: "St 2,4b-9.15",
            psalm: "Tv 127",
            gospel: "Mt 13,54-58"
        },
        celebrant: "Đức Cha Giuse Đỗ Mạnh Hùng",
        notes: "Ngày Quốc tế Lao động – cầu nguyện cho người lao động."
    },
    {
        id: 5,
        date: "2025-05-02", // Thứ Sáu
        title: "Thánh Athanasiô, giám mục tiến sĩ Hội Thánh (Lễ nhớ)",
        massTimes: ["05:30", "17:00"],
        liturgicalColor: "Trắng",
        readings: {
            firstReading: "Cv 15,22-31",
            psalm: "Tv 56",
            gospel: "Ga 15,12-17"
        },
        celebrant: "Lm. Giacôbê Phạm Văn D"
    },
    {
        id: 6,
        date: "2025-05-03", // Thứ Bảy
        title: "Thánh Philipphê và thánh Giacôbê (Lễ kính)",
        massTimes: ["06:00", "18:00"],
        liturgicalColor: "Đỏ",
        readings: {
            firstReading: "1 Cr 15,1-8",
            psalm: "Tv 18",
            gospel: "Ga 14,6-14"
        },
        celebrant: "Lm. Antôn Lê Văn E"
    },
    {
        id: 7,
        date: "2025-05-04", // Chúa Nhật
        title: "Chúa Nhật V Phục Sinh (Lễ Chúa Nhật)",
        massTimes: ["05:30", "07:00", "09:00", "17:30"],
        liturgicalColor: "Trắng",
        readings: {
            firstReading: "Cv 9,26-31",
            secondReading: "1 Ga 3,18-24",
            gospel: "Ga 15,1-8"
        },
        celebrant: "Lm. Đaminh Nguyễn Văn F",
        notes: "Thánh lễ có rước lễ trọng thể cho các em thiếu nhi."
    }
];

const sqlResultNews = [
  {
    news_id: 1,
    news_title: "Breaking News: Tech Update",
    is_published: true,
    news_created_at: "2025-05-17 12:00:00",
    news_updated_at: "2025-05-17 12:30:00",
    news_deleted_at: null,
    news_block_id: 1,
    news_id_ref: 1,
    news_block_title: "Tech Innovations",
    content: "New advancements in AI technology...",
    news_block_order: 1,
    news_block_created_at: "2025-05-17 12:05:00",
    news_block_updated_at: "2025-05-17 12:35:00",
    news_block_deleted_at: null,
    news_block_images_id: 1,
    news_block_id_ref: 1,
    image_id: 1,
    news_block_images_order: 1,
    news_block_images_created_at: "2025-05-17 12:10:00",
    news_block_images_updated_at: "2025-05-17 12:40:00",
    news_block_images_deleted_at: null,
    image_id_ref: 1,
    url: "https://example.com/image1.jpg",
    alt: "AI technology illustration",
    image_created_at: "2025-05-17 12:10:00",
    image_updated_at: "2025-05-17 12:40:00",
    image_deleted_at: null,
  },
];