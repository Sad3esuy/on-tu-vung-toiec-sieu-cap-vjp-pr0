// 1. DATA SOURCE
        const vocabularyData = [
    {
        "id": "1",
        "title": "MUA SẮM, NHÀ HÀNG",
        "icon": "fa-school",
        "color": "bg-red-500",
        "words": [
            {
                "en": "souvenir",
                "vi": "quà lưu niệm",
                "pron": "/ˌsuːvəˈnɪr/"
            },
            {
                "en": "be arranged",
                "vi": "Được sắp xếp",
                "pron": "/bi əˈreɪndʒd/"
            },
            {
                "en": "be stacked up",
                "vi": "Được chất đống",
                "pron": "/bi stækt ʌp/"
            },
            {
                "en": "be lined up",
                "vi": "Được xếp thành hàng",
                "pron": "/bi laɪnd ʌp/"
            },
            {
                "en": "be on display",
                "vi": "Được trưng bày",
                "pron": "/bi ɒn dɪˈspleɪ/"
            },
            {
                "en": "browse in the store",
                "vi": "nhìn quanh trong cửa hàng",
                "pron": "/braʊz ɪn ðə stɔːr/"
            },
            {
                "en": "compare prices",
                "vi": "so sánh giá cả",
                "pron": "/kəmˈper ˈpraɪsɪz/"
            },
            {
                "en": "make a selection from",
                "vi": "chọn lựa từ",
                "pron": "/meɪk ə sɪˈlekʃən frəm/"
            },
            {
                "en": "on both sides of the aisle",
                "vi": "ở hai bên lối đi",
                "pron": "/ɒn boʊθ saɪdz əv ði aɪl/"
            },
            {
                "en": "be hanging on the rack",
                "vi": "Được treo lên giá",
                "pron": "/bi ˈhæŋɪŋ ɒn ðə ræk/"
            },
            {
                "en": "be laid out for sale",
                "vi": "Được trƣng bày để bán",
                "pron": "/bi leɪd aʊt fɔːr seɪl/"
            },
            {
                "en": "be marked down",
                "vi": "treo bảng giảm giá",
                "pron": "/bi mɑːrkt daʊn/"
            },
            {
                "en": "be stocked with",
                "vi": "Được dự trữ (mặt hàng)",
                "pron": "/bi stɒkt wɪð/"
            },
            {
                "en": "cash register",
                "vi": "máy tính tiền",
                "pron": "/kæʃ ˈredʒɪstər/"
            },
            {
                "en": "reach for an item",
                "vi": "với tay lấy hàng",
                "pron": "/riːtʃ fɔːr ən ˈaɪtəm/"
            },
            {
                "en": "piles of bags",
                "vi": "chồng túi xách",
                "pron": "/paɪlz əv bægz/"
            },
            {
                "en": "on the shelves",
                "vi": "trên kệ",
                "pron": "/ɒn ðə ʃelvz/"
            },
            {
                "en": "pushing a shopping cart",
                "vi": "đẩy xe mua hàng",
                "pron": "/ˈpʊʃɪŋ ə ˈʃɒpɪŋ kɑːrt/"
            },
            {
                "en": "chef",
                "vi": "đầu bếp",
                "pron": "/ʃef/"
            },
            {
                "en": "stack of plates",
                "vi": "chồng đĩa",
                "pron": "/stæk əv pleɪts/"
            },
            {
                "en": "dine out",
                "vi": "ăn ở bên ngoài",
                "pron": "/daɪn aʊt/"
            },
            {
                "en": "leave a tip",
                "vi": "để tiền boa",
                "pron": "/liːv ə tɪp/"
            },
            {
                "en": "pour water into a glass",
                "vi": "rót nƣớc vào ly",
                "pron": "/pɔːr ˈwɔːtər ˈɪntuː ə glæs/"
            },
            {
                "en": "call the waiter over",
                "vi": "gọi bồi bàn",
                "pron": "/kɔːl ðə ˈweɪtər ˈoʊvər/"
            },
            {
                "en": "study the menu",
                "vi": "xem thực đơn",
                "pron": "/ˈstʌdi ðə ˈmenjuː/"
            },
            {
                "en": "be covered by a cloth",
                "vi": "được trải khăn trải bàn",
                "pron": "/bi ˈkʌvərd baɪ ə klɒθ/"
            },
            {
                "en": "cluttered table",
                "vi": "bàn ăn bừa bộn",
                "pron": "/ˈklʌtərd ˈteɪbəl/"
            },
            {
                "en": "be occupied",
                "vi": "có người ngồi, đặt chỗ trƣớc",
                "pron": "/bi ˈɒkjəpaɪd/"
            },
            {
                "en": "help oneself to refreshments",
                "vi": "tự phục vụ bữa ăn nhẹ",
                "pron": "/help wʌnˈself tuː rɪˈfreʃmənts/"
            },
            {
                "en": "be crowded with patrons",
                "vi": "đông nghịt khách",
                "pron": "/bi ˈkraʊdɪd wɪð ˈpeɪtrənz/"
            },
            {
                "en": "remove loaves of bread",
                "vi": "dẹp đi những ổ bánh mì",
                "pron": "/rɪˈmuːv loʊvz əv bred/"
            },
            {
                "en": "be seated on the stool",
                "vi": "ngồi trên ghế không có băng tựa",
                "pron": "/bi ˈsiːtɪd ɒn ðə stuːl/"
            },
            {
                "en": "take an order",
                "vi": "nhận đơn đặt hàng",
                "pron": "/teɪk ən ˈɔːrdər/"
            },
            {
                "en": "sit on the patio",
                "vi": "ngồi trên hành lang ngoài trời",
                "pron": "/sɪt ɒn ðə ˈpætioʊ/"
            },
            {
                "en": "wait tables",
                "vi": "phục vụ, tiếp thức ăn đứng bàn",
                "pron": "/weɪt ˈteɪbəlz/"
            }
        ]
    },
    {
        "id": "2",
        "title": "GIAO THÔNG, CÔNG TRƯỜNG",
        "icon": "fa-briefcase",
        "color": "bg-teal-500",
        "words": [
            {
                "en": "float in the water",
                "vi": "nổi trên mặt nƣớc",
                "pron": "/floʊt ɪn ðə ˈwɔːtər/"
            },
            {
                "en": "pedestrian",
                "vi": "người đi bộ",
                "pron": "/pəˈdestriən/"
            },
            {
                "en": "be packed",
                "vi": "bị nhét đầy bởi",
                "pron": "/bi pækt/"
            },
            {
                "en": "be parked on the ground",
                "vi": "đậu xe",
                "pron": "/bi pɑːrkt ɒn ðə graʊnd/"
            },
            {
                "en": "be lined up in rows",
                "vi": "xếp thẳng hàng",
                "pron": "/bi laɪnd ʌp ɪn roʊz/"
            },
            {
                "en": "block the road",
                "vi": "chắn đường",
                "pron": "/blɒk ðə roʊd/"
            },
            {
                "en": "on the deck of the boat",
                "vi": "trên boong tàu",
                "pron": "/ɒn ðə dek əv ðə boʊt/"
            },
            {
                "en": "in the back of the truck",
                "vi": "ở phía sau xe tải",
                "pron": "/ɪn ðə bæk əv ðə trʌk/"
            },
            {
                "en": "put gas in the car",
                "vi": "đổ dầu vào xe hơi",
                "pron": "/pʊt gæs ɪn ðə kɑːr/"
            },
            {
                "en": "lamppost",
                "vi": "cột đèn",
                "pron": "/læmp poʊst/"
            },
            {
                "en": "train track",
                "vi": "đường ray xe lửa",
                "pron": "/treɪn træk/"
            },
            {
                "en": "be towed away",
                "vi": "bị kéo đi",
                "pron": "/bi toʊd əˈweɪ/"
            },
            {
                "en": "be unoccupied",
                "vi": "trống chỗ",
                "pron": "/bi ʌnˈɒkjʊpaɪd/"
            },
            {
                "en": "be tied up in the harbor",
                "vi": "bị cột lại ở bến tàu",
                "pron": "/bi taɪd ʌp ɪn ðə ˈhɑːrbər/"
            },
            {
                "en": "board the vehicle",
                "vi": "lên xe",
                "pron": "/bɔːrd ðə ˈviːɪkəl/"
            },
            {
                "en": "near the platform",
                "vi": "gần thềm ga",
                "pron": "/nɪr ðə ˈplætfɔːrm/"
            },
            {
                "en": "dock",
                "vi": "bến tàu",
                "pron": "/dɒk/"
            },
            {
                "en": "curb",
                "vi": "lề phân cách",
                "pron": "/kɜːrb/"
            },
            {
                "en": "path",
                "vi": "đường, lối đi",
                "pron": "/pæθ/"
            },
            {
                "en": "sweep",
                "vi": "quét dọn, dọn dẹp",
                "pron": "/swiːp/"
            },
            {
                "en": "climb a ladder",
                "vi": "trèo lên thang",
                "pron": "/klaɪm ə ˈlædər/"
            },
            {
                "en": "be renovated",
                "vi": "được sửa chữa (tòa nhà)",
                "pron": "/bi ˈrenəveɪtɪd/"
            },
            {
                "en": "kneel in the garden",
                "vi": "quỳ trong vƣờn",
                "pron": "/niːl ɪn ðə ˈgɑːrdən/"
            },
            {
                "en": "push the wheelbarrow",
                "vi": "đẩy xe cút kít",
                "pron": "/pʊʃ ðə ˈwiːlˌbærəʊ/"
            },
            {
                "en": "operate heavy machine",
                "vi": "điều khiển trang thiết bị nặng",
                "pron": "/ˈɒpəreɪt ˈhevi məˈʃiːn/"
            },
            {
                "en": "vacuum the floor",
                "vi": "hút bụi sàn nhà",
                "pron": "/ˈvækjuːm ðə flɔːr/"
            },
            {
                "en": "lead to",
                "vi": "dẫn đến",
                "pron": "/liːd tuː/"
            },
            {
                "en": "change the light bulk",
                "vi": "thay bóng đèn",
                "pron": "/tʃeɪndʒ ðə laɪt bʌlb/"
            },
            {
                "en": "fence",
                "vi": "hàng rào",
                "pron": "/fens/"
            },
            {
                "en": "railing",
                "vi": "lan can, rào chắn",
                "pron": "/ˈreɪlɪŋ/"
            },
            {
                "en": "stairway",
                "vi": "cầu thang",
                "pron": "/ˈsteəweɪ/"
            },
            {
                "en": "construction site",
                "vi": "công trường xây dựng",
                "pron": "/kənˈstrʌkʃən saɪt/"
            },
            {
                "en": "hold a shovel",
                "vi": "cầm cái xẻng",
                "pron": "/hoʊld ə ˈʃʌvəl/"
            },
            {
                "en": "be mounted on the wall",
                "vi": "treo trên tường",
                "pron": "/bi ˈmaʊntɪd ɒn ðə wɔːl/"
            },
            {
                "en": "dig in the ground",
                "vi": "đào đất",
                "pron": "/dɪg ɪn ðə graʊnd/"
            },
            {
                "en": "wear a safety hat",
                "vi": "đội nón bảo hiểm",
                "pron": "/wer ə ˈseɪfti hæt/"
            },
            {
                "en": "pave the road",
                "vi": "lót đường",
                "pron": "/peɪv ðə roʊd/"
            },
            {
                "en": "brick",
                "vi": "gạch",
                "pron": "/brɪk/"
            },
            {
                "en": "load a box",
                "vi": "chở hộp gỗ",
                "pron": "/loʊd ə bɒks/"
            }
        ]
    },
    {
        "id": "3",
        "title": "NƠI LÀM VIỆC, THỜI GIAN RẢNH RỖI",
        "icon": "fa-cart-shopping",
        "color": "bg-blue-500",
        "words": [
            {
                "en": "applaud the speaker",
                "vi": "hoan nghênh diễn giả",
                "pron": "/əˈplɔːd ðə ˈspiːkər/"
            },
            {
                "en": "folder",
                "vi": "bìa tài liệu",
                "pron": "/ˈfoʊldər/"
            },
            {
                "en": "look into microscope",
                "vi": "nhìn vào kính hiển vi",
                "pron": "/lʊk ˈɪntuː ˈmaɪkrəskoʊp/"
            },
            {
                "en": "machine lid",
                "vi": "nắp đậy máy",
                "pron": "/məˈʃiːn lɪd/"
            },
            {
                "en": "speak into a microphone",
                "vi": "nói qua micro",
                "pron": "/spiːk ˈɪntuː ə ˈmaɪkrəfoʊn/"
            },
            {
                "en": "make photocopies",
                "vi": "sao chép lại",
                "pron": "/meɪk ˈfoʊtoʊkɒpiz/"
            },
            {
                "en": "adjust the equipment",
                "vi": "điều chỉnh thiết bị",
                "pron": "/əˈdʒʌst ði ɪˈkwɪpmənt/"
            },
            {
                "en": "wear protective glasses",
                "vi": "đeo kính bảo hộ",
                "pron": "/wer prəˈtektɪv ˈglæsɪz/"
            },
            {
                "en": "doorway",
                "vi": "cửa ra vào",
                "pron": "/ˈdɔːrweɪ/"
            },
            {
                "en": "look through a report",
                "vi": "đọc kỹ bản báo cáo",
                "pron": "/lʊk θruː ə rɪˈpɔːrt/"
            },
            {
                "en": "stare at a screen",
                "vi": "nhìn chăm chú vào màn hình",
                "pron": "/ster æt ə skriːn/"
            },
            {
                "en": "be seated at a workstation",
                "vi": "ngồi ở phòng làm việc",
                "pron": "/bi ˈsiːtɪd æt ə ˈwɜːrksteɪʃən/"
            },
            {
                "en": "sort through some paperwork",
                "vi": "sắp xếp tài liệu",
                "pron": "/sɔːrt θruː sʌm ˈpeɪpərwɜːrk/"
            },
            {
                "en": "reach for a knob",
                "vi": "với tới quả đấm cửa",
                "pron": "/riːtʃ fɔːr ə nɒb/"
            },
            {
                "en": "hold the receiver to the ear",
                "vi": "giữ ống nghe sát tai",
                "pron": "/hoʊld ðə rɪˈsiːvər tuː ði ɪr/"
            },
            {
                "en": "waive in the breeze",
                "vi": "lay động trong gió",
                "pron": "/weɪv ɪn ðə briːz/"
            },
            {
                "en": "rest outdoors",
                "vi": "nghỉ ngoài trời",
                "pron": "/rest ˈaʊtdɔːrz/"
            },
            {
                "en": "extend over the hill",
                "vi": "trải dài đến bên kia đồi",
                "pron": "/ɪkˈstend ˈoʊvər ðə hɪl/"
            },
            {
                "en": "upside-down",
                "vi": "lộn ngược",
                "pron": "/ˌʌpsaɪd ˈdaʊn/"
            },
            {
                "en": "be positioned",
                "vi": "được đặt vào",
                "pron": "/bi pəˈzɪʃənd/"
            },
            {
                "en": "walk toward an archway",
                "vi": "bước theo lối đi có mái vòm",
                "pron": "/wɔːk təˈwɔːrd ən ˈɑːrtʃweɪ/"
            },
            {
                "en": "admire sculptures",
                "vi": "thƣởng thức các tác phẩm điêu khắc",
                "pron": "/ədˈmaɪr ˈskʌlptʃərz/"
            },
            {
                "en": "hilltop",
                "vi": "đỉnh đồi",
                "pron": "/ˈhɪltɒp/"
            },
            {
                "en": "be seated in a row",
                "vi": "ngồi thẳng hàng",
                "pron": "/bi ˈsiːtɪd ɪn ə roʊ/"
            },
            {
                "en": "water the plants",
                "vi": "tưới nước cho cây",
                "pron": "/ˈwɔːtər ðə plænts/"
            },
            {
                "en": "being seating with one's legs cross",
                "vi": "ngồi bắt chéo chân",
                "pron": "/ˈbiːɪŋ ˈsiːtɪŋ wɪð wʌnz legz krɒs/"
            },
            {
                "en": "spray water into the air",
                "vi": "xịt nƣớc vào không khí",
                "pron": "/spreɪ ˈwɔːtər ˈɪntuː ði er/"
            },
            {
                "en": "grassy area",
                "vi": "khu vực phủ đầy cỏ",
                "pron": "/ˈgræsi ˈeriə/"
            },
            {
                "en": "hold a fishing pole",
                "vi": "cầm cần câu",
                "pron": "/hoʊld ə ˈfɪʃɪŋ poʊl/"
            },
            {
                "en": "row a boat",
                "vi": "chèo thuyền",
                "pron": "/roʊ ə boʊt/"
            },
            {
                "en": "in the opposite direction",
                "vi": "ở hướng ngƣợc lại",
                "pron": "/ɪn ði ˈɒpəzɪt dɪˈrekʃən/"
            },
            {
                "en": "be reflected into the water",
                "vi": "phản chiếu qua mặt nƣớc",
                "pron": "/bi rɪˈflektɪd ˈɪntuː ðə ˈwɔːtər/"
            }
        ]
    },
    {
        "id": "4",
        "title": "THỂ BỊ ĐỘNG/MIÊU TẢ GIÁN TIẾP",
        "icon": "fa-hammer",
        "color": "bg-orange-500",
        "words": [
            {
                "en": "be being carried out",
                "vi": "đang được vận chuyển",
                "pron": "/bi ˈbiːɪŋ ˈkærid aʊt/"
            },
            {
                "en": "be being renovated",
                "vi": "đang được sửa chữa",
                "pron": "/bi ˈbiːɪŋ ˈrenəveɪtɪd/"
            },
            {
                "en": "be being displayed",
                "vi": "đang được trƣng bày",
                "pron": "/bi ˈbiːɪŋ dɪˈspleɪd/"
            },
            {
                "en": "be being towed away",
                "vi": "đang được kéo đi",
                "pron": "/bi ˈbiːɪŋ toʊd əˈweɪ/"
            },
            {
                "en": "be being packed",
                "vi": "đang được đóng gói",
                "pron": "/bi ˈbiːɪŋ pækt/"
            },
            {
                "en": "be being served",
                "vi": "đang được phục vụ",
                "pron": "/bi ˈbiːɪŋ sɜːrvd/"
            },
            {
                "en": "be being cleaned",
                "vi": "đang được dọn dẹp",
                "pron": "/bi ˈbiːɪŋ kliːnd/"
            },
            {
                "en": "be being weighed on the scale",
                "vi": "đang được cân",
                "pron": "/bi ˈbiːɪŋ weɪd ɒn ðə skeɪl/"
            },
            {
                "en": "have been laid out",
                "vi": "đã được bố trí",
                "pron": "/hæv biːn leɪd aʊt/"
            },
            {
                "en": "have been arranged",
                "vi": "đã được sắp đặt",
                "pron": "/hæv biːn əˈreɪndʒd/"
            },
            {
                "en": "have been covered with",
                "vi": "đã bị phủ bởi",
                "pron": "/hæv biːn ˈkʌvərd wɪð/"
            },
            {
                "en": "have been left open",
                "vi": "đã bị mở ra",
                "pron": "/hæv biːn left ˈoʊpən/"
            },
            {
                "en": "have been sliced",
                "vi": "đã được cắt lát",
                "pron": "/hæv biːn slaɪst/"
            },
            {
                "en": "have been planted in rows",
                "vi": "đã được trồng thành hàng",
                "pron": "/hæv biːn ˈplæntɪd ɪn roʊz/"
            },
            {
                "en": "have been stacked",
                "vi": "đã được chất thành đống",
                "pron": "/hæv biːn stækt/"
            },
            {
                "en": "have been taken out",
                "vi": "đã được lấy ra",
                "pron": "/hæv biːn ˈteɪkən aʊt/"
            },
            {
                "en": "beverage",
                "vi": "thức uống",
                "pron": "/ˈbevərɪdʒ/"
            },
            {
                "en": "vehicle",
                "vi": "xe cộ",
                "pron": "/ˈviːɪkəl/"
            },
            {
                "en": "equipment",
                "vi": "trang thiết bị",
                "pron": "/ɪˈkwɪpmənt/"
            },
            {
                "en": "performance",
                "vi": "sự/buổi biểu diễn",
                "pron": "/pərˈfɔːrməns/"
            },
            {
                "en": "(musical) instrument",
                "vi": "nhạc cụ",
                "pron": "/ˈmjuːzɪkəl ˈɪnstrəmənt/"
            },
            {
                "en": "attire/costume",
                "vi": "y phục",
                "pron": "/əˈtaɪər /ˈkɒstuːm/"
            },
            {
                "en": "produce",
                "vi": "nông phẩm",
                "pron": "/ˈprɒduːs/"
            },
            {
                "en": "electronic device",
                "vi": "thiết bị điện tử",
                "pron": "/ɪˌlekˈtrɒnɪk dɪˈvaɪs/"
            },
            {
                "en": "protective gear",
                "vi": "trang thiết bị bảo hộ",
                "pron": "/prəˈtektɪv gɪr/"
            }
        ]
    },
    {
        "id": "5",
        "title": "Nhân sự",
        "icon": "fa-plane",
        "color": "bg-green-500",
        "words": [
            {
                "en": "junior",
                "vi": "nhân viên tập sự",
                "pron": "/ˈdʒuːnjər/"
            },
            {
                "en": "transfer",
                "vi": "sự thuyên chuyển",
                "pron": "/trænsˈfɜːr/"
            },
            {
                "en": "short-staffed",
                "vi": "thiếu nhân viên",
                "pron": "/ʃɔːrt stæft/"
            },
            {
                "en": "supervisor",
                "vi": "giám sát viên",
                "pron": "/ˈsuːpərvaɪzər/"
            },
            {
                "en": "boss",
                "vi": "ông chủ",
                "pron": "/bɒs/"
            },
            {
                "en": "sales representative",
                "vi": "nhân viên bán hàng",
                "pron": "/seɪlz ˌreprɪˈzentətɪv/"
            },
            {
                "en": "technician",
                "vi": "nhân viên kỹ thuật",
                "pron": "/tekˈnɪʃən/"
            },
            {
                "en": "security officer",
                "vi": "nhân viên an ninh",
                "pron": "/sɪˈkjʊrəti ˈɒfɪsər/"
            },
            {
                "en": "administrative assistant",
                "vi": "trợ lý giám đốc",
                "pron": "/ədˈmɪnɪstrətɪv əˈsɪstənt/"
            },
            {
                "en": "store clerk",
                "vi": "nhân viên bán hàng",
                "pron": "/stɔːr klɜːrk/"
            },
            {
                "en": "personnel",
                "vi": "nhân sự",
                "pron": "/ˌpɜːrsəˈnel/"
            },
            {
                "en": "salesperson",
                "vi": "nhân viên bán hàng",
                "pron": "/ˈseɪlzpɜːrsən/"
            },
            {
                "en": "crew",
                "vi": "ban, nhóm, đội (công tác)",
                "pron": "/kruː/"
            },
            {
                "en": "coworker",
                "vi": "đồng nghiệp",
                "pron": "/ˈkoʊwɜːrkər/"
            },
            {
                "en": "colleague",
                "vi": "đồng nghiệp",
                "pron": "/ˈkɒliːg/"
            },
            {
                "en": "plumber",
                "vi": "thợ sửa ống nước",
                "pron": "/ˈplʌmər/"
            },
            {
                "en": "receptionist",
                "vi": "nhân viên tiếp tân",
                "pron": "/rɪˈsepʃənɪst/"
            },
            {
                "en": "automatic mechanic",
                "vi": "thợ sửa xe hơi",
                "pron": "/ˌɔːtəˈmætɪk məˈkænɪk/"
            }
        ]
    },
    {
        "id": "6",
        "title": "Phỏng vấn",
        "icon": "fa-user-doctor",
        "color": "bg-yellow-500",
        "words": [
            {
                "en": "fill out an application",
                "vi": "điền đơn xin việc",
                "pron": "/fɪl aʊt ən ˌæplɪˈkeɪʃən/"
            },
            {
                "en": "cover letter",
                "vi": "thư xin việc",
                "pron": "/ˈkʌvər ˈletər/"
            },
            {
                "en": "candidate",
                "vi": "người dự tuyển, ứng viên",
                "pron": "/ˈkændɪdeɪt/"
            },
            {
                "en": "qualifications",
                "vi": "trình độ chuyên môn",
                "pron": "/ˌkwɒlɪfɪˈkeɪʃənz/"
            },
            {
                "en": "certificate",
                "vi": "bằng cấp, giấy chứng nhận",
                "pron": "/sərˈtɪfɪkət/"
            },
            {
                "en": "company policy",
                "vi": "chính sách công ty",
                "pron": "/ˈkʌmpəni ˈpɒləsi/"
            },
            {
                "en": "be entitled to do",
                "vi": "có quyền (làm gì)",
                "pron": "/bi ɪnˈtaɪtəld tuː duː/"
            },
            {
                "en": "replacement",
                "vi": "người thay thế",
                "pron": "/rɪˈpleɪsmənt/"
            },
            {
                "en": "annual salary",
                "vi": "lương hàng năm",
                "pron": "/ˈænjuəl ˈsæleri/"
            },
            {
                "en": "vacancy",
                "vi": "chỗ trống",
                "pron": "/ˈveɪkənsi/"
            },
            {
                "en": "workplace",
                "vi": "nơi làm việc",
                "pron": "/ˈwɜːrkpleɪs/"
            },
            {
                "en": "working conditions",
                "vi": "điều kiện làm việc",
                "pron": "/ˈwɜːrkɪŋ kənˈdɪʃənz/"
            },
            {
                "en": "reception desk",
                "vi": "bàn lễ tân",
                "pron": "/rɪˈsepʃən desk/"
            },
            {
                "en": "minimum requirements",
                "vi": "điều kiện tối thiểu",
                "pron": "/ˈmɪnɪməm rɪˈkwaɪərmənts/"
            },
            {
                "en": "narrow down the applicants",
                "vi": "tuyển chọn ứng viên",
                "pron": "/ˈnæroʊ daʊn ði ˈæplɪkənts/"
            }
        ]
    },
    {
        "id": "7",
        "title": "Sản phẩm",
        "icon": "fa-users",
        "color": "bg-purple-500",
        "words": [
            {
                "en": "special offer",
                "vi": "giảm giá đặc biệt",
                "pron": "/ˈspeʃəl ˈɔːfər/"
            },
            {
                "en": "inventory",
                "vi": "bản kê khai hàng hóa",
                "pron": "/ˈɪnvəntɔːri/"
            },
            {
                "en": "out of stock",
                "vi": "hết hàng trong kho",
                "pron": "/aʊt əv stɒk/"
            },
            {
                "en": "refund",
                "vi": "trả lại tiền, sự bồi hoàn",
                "pron": "/ˈriːfʌnd/"
            },
            {
                "en": "manufacturer",
                "vi": "nhà sản xuất",
                "pron": "/ˌmænjʊˈfæktʃərər/"
            },
            {
                "en": "warehouse",
                "vi": "kho hàng",
                "pron": "/ˈweərhaʊs/"
            },
            {
                "en": "stockroom",
                "vi": "kho hàng",
                "pron": "/ˈstɒkruːm/"
            },
            {
                "en": "release",
                "vi": "tung ra (sản phẩm)",
                "pron": "/rɪˈliːs/"
            },
            {
                "en": "launch",
                "vi": "tung ra (sản phẩm)",
                "pron": "/lɔːntʃ/"
            },
            {
                "en": "details",
                "vi": "chi tiết (sản phẩm)",
                "pron": "/ˈdiːteɪlz/"
            },
            {
                "en": "estimates",
                "vi": "bảng báo giá",
                "pron": "/ˈestɪmeɪts/"
            },
            {
                "en": "expedite",
                "vi": "xúc tiến",
                "pron": "/ˈekspədaɪt/"
            },
            {
                "en": "defects",
                "vi": "khuyết điểm",
                "pron": "/ˈdiːfekts/"
            },
            {
                "en": "warranty",
                "vi": "giấy bảo hành",
                "pron": "/ˈwɔːrənti/"
            },
            {
                "en": "rebate",
                "vi": "hoàn lại một phần tiền (sau khi đã mua sản phẩm)",
                "pron": "/ˈriːbeɪt/"
            },
            {
                "en": "distribute",
                "vi": "phân phối",
                "pron": "/dɪˈstrɪbjuːt/"
            },
            {
                "en": "supplier",
                "vi": "nhà cung cấp",
                "pron": "/səˈplaɪər/"
            },
            {
                "en": "wall-mounted unit",
                "vi": "loại treo tường",
                "pron": "/wɔːl ˈmaʊntɪd ˈjuːnɪt/"
            },
            {
                "en": "bulk purchase",
                "vi": "mua hàng số lượng lớn",
                "pron": "/bʌlk ˈpɜːrtʃəs/"
            }
        ]
    },
    {
        "id": "8",
        "title": "Hội nghị, chuyến đi công tác",
        "icon": "fa-school",
        "color": "bg-red-500",
        "words": [
            {
                "en": "registration",
                "vi": "sự đăng kí",
                "pron": "/ˌredʒɪˈstreɪʃən/"
            },
            {
                "en": "information packet",
                "vi": "một xấp các tập sách nhỏ, cung cấp thông tin",
                "pron": "/ˌɪnfərˈmeɪʃən ˈpækɪt/"
            },
            {
                "en": "itinerary",
                "vi": "lộ trình",
                "pron": "/aɪˈtɪnəreri/"
            },
            {
                "en": "amenities",
                "vi": "tiện nghi",
                "pron": "/əˈmiːnətiz/"
            },
            {
                "en": "agenda",
                "vi": "chuương trình nghị sự",
                "pron": "/əˈdʒendə/"
            },
            {
                "en": "give a presentation",
                "vi": "trình bày",
                "pron": "/gɪv ə ˌpreznˈteɪʃən/"
            },
            {
                "en": "be away on a trip",
                "vi": "đang đi công tác",
                "pron": "/bi əˈweɪ ɒn ə trɪp/"
            },
            {
                "en": "fundraising",
                "vi": "gây quỹ",
                "pron": "/ˈfʌndreɪzɪŋ/"
            },
            {
                "en": "conference",
                "vi": "hội nghị",
                "pron": "/ˈkɒnfərəns/"
            },
            {
                "en": "arrange a meeting",
                "vi": "chuẩn bị một cuộc họp",
                "pron": "/əˈreɪndʒ ə ˈmiːtɪŋ/"
            },
            {
                "en": "handout",
                "vi": "tài liệu phát tay",
                "pron": "/ˈhændaʊt/"
            },
            {
                "en": "draft",
                "vi": "bản phác thảo, đề cương",
                "pron": "/dræft/"
            },
            {
                "en": "training seminar",
                "vi": "hội thảo huấn luyện",
                "pron": "/ˈtreɪnɪŋ ˈsemɪnɑːr/"
            },
            {
                "en": "trade show",
                "vi": "hội chợ triển lãm thương mại",
                "pron": "/treɪd ʃoʊ/"
            },
            {
                "en": "submit the proposal",
                "vi": "đệ trình bản kế hoạch",
                "pron": "/səbˈmɪt ðə prəˈpoʊzl/"
            },
            {
                "en": "session",
                "vi": "niên khóa, phiên họp",
                "pron": "/ˈseʃən/"
            }
        ]
    },
    {
        "id": "9",
        "title": "Công việc",
        "icon": "fa-briefcase",
        "color": "bg-teal-500",
        "words": [
            {
                "en": "contract",
                "vi": "hợp dồng",
                "pron": "/ˈkɒntrækt/"
            },
            {
                "en": "expire",
                "vi": "hết hạn",
                "pron": "/ɪkˈspaɪər/"
            },
            {
                "en": "benefits",
                "vi": "phúc lợi",
                "pron": "/ˈbenɪfɪts/"
            },
            {
                "en": "headquarters",
                "vi": "trụ sở",
                "pron": "/ˈhedkwɔːrtərz/"
            },
            {
                "en": "branch",
                "vi": "chi nhánh",
                "pron": "/bræntʃ/"
            },
            {
                "en": "access card",
                "vi": "thẻ ra vào",
                "pron": "/ˈækses kɑːrd/"
            },
            {
                "en": "allocate",
                "vi": "phân phối, cấp",
                "pron": "/ˈæləkeɪt/"
            },
            {
                "en": "laptop (computer)",
                "vi": "máy tính xách tay",
                "pron": "/ˈlæptɒp kəmˈpjuːtər/"
            },
            {
                "en": "sales report",
                "vi": "báo cáo kinh doanh",
                "pron": "/seɪlz rɪˈpɔːrt/"
            },
            {
                "en": "workflow process",
                "vi": "quá trình xử lý công việc",
                "pron": "/ˈwɜːrkfloʊ ˈprɑːses/"
            },
            {
                "en": "deal",
                "vi": "thỏa thuận mua bán",
                "pron": "/diːl/"
            },
            {
                "en": "commute",
                "vi": "đi lại hàng ngày từ nhà đến nơi làm việc",
                "pron": "/kəˈmjuːt/"
            },
            {
                "en": "call in sick",
                "vi": "gọi điện báo ốm",
                "pron": "/kɔːl ɪn sɪk/"
            },
            {
                "en": "annual budget",
                "vi": "ngân sách hàng năm",
                "pron": "/ˈænjuəl ˈbʌdʒɪt/"
            },
            {
                "en": "specialty",
                "vi": "chuyên ngành, chuyên môn",
                "pron": "/ˈspeʃəlti/"
            },
            {
                "en": "assignment",
                "vi": "nhiệm vụ (được phân công)",
                "pron": "/əˈsaɪnmənt/"
            },
            {
                "en": "marketing strategy",
                "vi": "chiến lược kinh doanh",
                "pron": "/ˈmɑːrkətɪŋ ˈstrætədʒi/"
            },
            {
                "en": "performance",
                "vi": "hiệu suất, thành tích",
                "pron": "/pərˈfɔːrməns/"
            },
            {
                "en": "bulletin board",
                "vi": "bảng thông báo",
                "pron": "/ˈbʊlətɪn bɔːrd/"
            }
        ]
    },
    {
        "id": "10",
        "title": "Sân bay, du lịch",
        "icon": "fa-cart-shopping",
        "color": "bg-blue-500",
        "words": [
            {
                "en": "catch a plane",
                "vi": "đáp máy bay",
                "pron": "/kætʃ ə pleɪn/"
            },
            {
                "en": "miss the connection",
                "vi": "nhỡ chuyến xe, tàu (chạy nối tiếp nhau)",
                "pron": "/mɪs ðə kəˈnekʃən/"
            },
            {
                "en": "package tour",
                "vi": "tua du lịch trọn gói",
                "pron": "/ˈpækɪdʒ tʊr/"
            },
            {
                "en": "carousel",
                "vi": "băng tải hành lý (ở sân bay)",
                "pron": "/ˌkærəˈsel/"
            },
            {
                "en": "aisle seat",
                "vi": "chỗ ngồi gần lối đi",
                "pron": "/aɪl siːt/"
            },
            {
                "en": "direct flight",
                "vi": "chuyến bay thẳng",
                "pron": "/dɪˈrekt flaɪt/"
            },
            {
                "en": "board",
                "vi": "lên máy bay",
                "pron": "/bɔːrd/"
            },
            {
                "en": "final destination",
                "vi": "điểm đến cuối cùng",
                "pron": "/ˈfaɪnl ˌdestɪˈneɪʃən/"
            },
            {
                "en": "travel agent",
                "vi": "nhân viên du lịch",
                "pron": "/ˈtrævl ˈeɪdʒənt/"
            },
            {
                "en": "adjust to the time difference",
                "vi": "thích nghi với sự thay đổi múi giờ",
                "pron": "/əˈdʒʌst tuː ðə taɪm ˈdɪfrəns/"
            },
            {
                "en": "accommodation",
                "vi": "chỗ ở",
                "pron": "/əˌkɒməˈdeɪʃən/"
            },
            {
                "en": "carry-on baggage",
                "vi": "hành lý mang theo lên máy bay",
                "pron": "/ˈkæri ɒn ˈbægɪdʒ/"
            },
            {
                "en": "clear customs",
                "vi": "làm thủ tục hải quan",
                "pron": "/klɪr ˈkʌstəmz/"
            },
            {
                "en": "souvenir",
                "vi": "đồ lưu niệm",
                "pron": "/ˌsuːvəˈnɪr/"
            },
            {
                "en": "exit",
                "vi": "lối thoát",
                "pron": "/ˈegzɪt/"
            },
            {
                "en": "courtesy shuttle",
                "vi": "xe đưa đón miễn phí",
                "pron": "/ˈkɜːrtəsi ˈʃʌtl/"
            }
        ]
    },
    {
        "id": "11",
        "title": "Bệnh viện",
        "icon": "fa-hammer",
        "color": "bg-orange-500",
        "words": [
            {
                "en": "eye exam",
                "vi": "khám mắt",
                "pron": "/aɪ ɪgˈzæm/"
            },
            {
                "en": "dental appointment",
                "vi": "hẹn khám răng",
                "pron": "/ˈdentl əˈpɔɪntmənt/"
            },
            {
                "en": "doctor's office",
                "vi": "phòng mạch",
                "pron": "/ˈdɒktərz ˈɒfɪs/"
            },
            {
                "en": "have a baby",
                "vi": "sinh con",
                "pron": "/hæv ə ˈbeɪbi/"
            },
            {
                "en": "laboratory",
                "vi": "phòng thí nghiệm",
                "pron": "/ləˈbɒrətri/"
            },
            {
                "en": "medication",
                "vi": "thuốc (điều trị)",
                "pron": "/ˌmedɪˈkeɪʃən/"
            },
            {
                "en": "alleviate",
                "vi": "làm giảm đau",
                "pron": "/əˈliːvieɪt/"
            },
            {
                "en": "prescription",
                "vi": "toa thuốc",
                "pron": "/prɪˈskrɪpʃən/"
            },
            {
                "en": "itchy",
                "vi": "ngứa ngáy",
                "pron": "/ˈɪtʃi/"
            },
            {
                "en": "hoarse",
                "vi": "khàn giọng",
                "pron": "/hɔːrs/"
            },
            {
                "en": "sore throat",
                "vi": "viêm họng",
                "pron": "/sɔːr θroʊt/"
            },
            {
                "en": "diabetes",
                "vi": "bệnh tiểu đường",
                "pron": "/ˌdaɪəˈbiːtiːz/"
            },
            {
                "en": "lose/gain weight",
                "vi": "giảm/tăng cân",
                "pron": "/luːz/geɪn weɪt/"
            },
            {
                "en": "get an injection",
                "vi": "tiêm thuốc",
                "pron": "/get ən ɪnˈdʒekʃən/"
            }
        ]
    },
    {
        "id": "12",
        "title": "Cấu trúc công ty",
        "icon": "fa-plane",
        "color": "bg-green-500",
        "words": [
            {
                "en": "CEO",
                "vi": "Tổng giám đốc",
                "pron": "/ˌsiː iː ˈoʊ/"
            },
            {
                "en": "Vice president",
                "vi": "Phó chủ tịch",
                "pron": "/vaɪs ˈprezɪdənt/"
            },
            {
                "en": "Director/Division Head",
                "vi": "Giám đốc",
                "pron": "/dɪˈrektər/dɪˈvɪʒən hed/"
            },
            {
                "en": "Manager",
                "vi": "Trưởng phòng",
                "pron": "/ˈmænɪdʒər/"
            },
            {
                "en": "Assistant Manager",
                "vi": "Phó phòng",
                "pron": "/əˈsɪstənt ˈmænɪdʒər/"
            },
            {
                "en": "Human Resources",
                "vi": "Phòng Nhân sự",
                "pron": "/ˈhjuːmən rɪˈsɔːrsɪz/"
            },
            {
                "en": "Research and Development",
                "vi": "Phòng nghiên cứu và Phát triển",
                "pron": "/rɪˈsɜːrtʃ ənd dɪˈveləpmənt/"
            },
            {
                "en": "General Affairs",
                "vi": "Phòng hành chính",
                "pron": "/ˈdʒenrəl əˈferz/"
            },
            {
                "en": "Editorial",
                "vi": "Phòng biên tập",
                "pron": "/ˌedɪˈtɔːriəl/"
            },
            {
                "en": "Public Relations",
                "vi": "Phòng Quan hệ Công chúng",
                "pron": "/ˈpʌblɪk rɪˈleɪʃənz/"
            },
            {
                "en": "Overseas Sales",
                "vi": "Phòng Kinh doanh với nước ngoài",
                "pron": "/ˌoʊvərˈsiːz seɪlz/"
            },
            {
                "en": "Marketing",
                "vi": "Phòng tiếp thị",
                "pron": "/ˈmɑːrkɪtɪŋ/"
            },
            {
                "en": "Shipping",
                "vi": "Bộ phận phụ trách vận chuyển",
                "pron": "/ˈʃɪpɪŋ/"
            }
        ]
    },
    {
        "id": "13",
        "title": "Bất động sản, ngân hàng",
        "icon": "fa-user-doctor",
        "color": "bg-yellow-500",
        "words": [
            {
                "en": "property",
                "vi": "bất động sản",
                "pron": "/ˈprɒpərti/"
            },
            {
                "en": "complex",
                "vi": "khu nhà đất",
                "pron": "/ˈkɒmpleks/"
            },
            {
                "en": "real estate agent",
                "vi": "nhân viên môi giới bất động sản",
                "pron": "/riːəl ɪˈsteɪt ˈeɪdʒənt/"
            },
            {
                "en": "tenant",
                "vi": "người thuê nhà",
                "pron": "/ˈtenənt/"
            },
            {
                "en": "landlord",
                "vi": "chủ nhà",
                "pron": "/ˈlændlɔːrd/"
            },
            {
                "en": "move into",
                "vi": "dời đến",
                "pron": "/muːv ˈɪntuː/"
            },
            {
                "en": "move out of",
                "vi": "dời đi",
                "pron": "/muːv aʊt əv/"
            },
            {
                "en": "renovation",
                "vi": "sự sửa chữa (nhà cửa)",
                "pron": "/ˌrenəˈveɪʃən/"
            },
            {
                "en": "establishment",
                "vi": "cơ sở, cơ ngơi",
                "pron": "/ɪˈstæblɪʃmənt/"
            },
            {
                "en": "utilities",
                "vi": "dịch vụ điện, nước",
                "pron": "/juːˈtɪlətiz/"
            },
            {
                "en": "suburb",
                "vi": "ngoại ô",
                "pron": "/ˈsʌbɜːrb/"
            },
            {
                "en": "rental price",
                "vi": "giá thuê nhà",
                "pron": "/ˈrentl praɪs/"
            },
            {
                "en": "lease",
                "vi": "cho thuê, thuê",
                "pron": "/liːs/"
            },
            {
                "en": "deposit slip",
                "vi": "phiếu gửi tiền vào tài khoản",
                "pron": "/dɪˈpɒzɪt slɪp/"
            },
            {
                "en": "small business loan",
                "vi": "tiền cho các doanh nghiệp nhỏ vay",
                "pron": "/smɔːl ˈbɪznəs loʊn/"
            },
            {
                "en": "open an account",
                "vi": "mở một tài khoản",
                "pron": "/ˈoʊpən ən əˈkaʊnt/"
            },
            {
                "en": "porfolio",
                "vi": "danh mục vốn đầu tư",
                "pron": "/pɔːrtˈfoʊlioʊ/"
            },
            {
                "en": "exchange",
                "vi": "trao đổi",
                "pron": "/ɪksˈtʃeɪndʒ/"
            },
            {
                "en": "statement",
                "vi": "bản kê khai",
                "pron": "/ˈsteɪtmənt/"
            },
            {
                "en": "online banking",
                "vi": "hoạt động ngân hàng trên mạng",
                "pron": "/ˈɒnlaɪn ˈbæŋkɪŋ/"
            }
        ]
    },
    {
        "id": "14",
        "title": "Sắp xếp lịch làm việc",
        "icon": "fa-users",
        "color": "bg-purple-500",
        "words": [
            {
                "en": "reschedule",
                "vi": "sắp xếp lại lịch làm việc",
                "pron": "/ˌriːˈskedʒuːl/"
            },
            {
                "en": "postpone",
                "vi": "hoãn lại",
                "pron": "/poʊˈspoʊn/"
            },
            {
                "en": "make a reservation",
                "vi": "đặt trước",
                "pron": "/meɪk ə ˌrezərˈveɪʃən/"
            },
            {
                "en": "book",
                "vi": "đặt trước",
                "pron": "/bʊk/"
            },
            {
                "en": "call back",
                "vi": "gọi lại",
                "pron": "/kɔːl bæk/"
            },
            {
                "en": "make an appointment",
                "vi": "hẹn trước",
                "pron": "/meɪk ən əˈpɔɪntmənt/"
            },
            {
                "en": "function",
                "vi": "sự kiện quan trọng",
                "pron": "/ˈfʌŋkʃən/"
            },
            {
                "en": "arrange another date",
                "vi": "sắp xếp lịch làm việc vào ngày tháng khác",
                "pron": "/əˈreɪndʒ əˈnʌðər deɪt/"
            },
            {
                "en": "itinerary",
                "vi": "chương trình làm việc",
                "pron": "/aɪˈtɪnəreri/"
            },
            {
                "en": "run late",
                "vi": "trễ hơn so với lịch trình",
                "pron": "/rʌn leɪt/"
            },
            {
                "en": "coordinate schedule",
                "vi": "điều chỉnh lịch làm việc",
                "pron": "/koʊˈɔːrdɪneɪt ˈskedʒuːl/"
            },
            {
                "en": "cancel",
                "vi": "hủy",
                "pron": "/ˈkænsl/"
            },
            {
                "en": "behind schedule",
                "vi": "trễ hơn so với lịch trình",
                "pron": "/bɪˈhaɪnd ˈskedʒuːl/"
            },
            {
                "en": "meet the deadline",
                "vi": "kịp thời hạn",
                "pron": "/miːt ðə ˈdedlaɪn/"
            },
            {
                "en": "ahead of schedule",
                "vi": "trước thời hạn",
                "pron": "/əˈhed əv ˈskedʒuːl/"
            },
            {
                "en": "have a conflict in schedule",
                "vi": "lịch làm việc trùng nhau",
                "pron": "/hæv ə ˈkɒnflɪkt ɪn ˈskedʒuːl/"
            }
        ]
    },
    {
        "id": "15",
        "title": "Thời gian rảnh rỗi",
        "icon": "fa-school",
        "color": "bg-red-500",
        "words": [
            {
                "en": "gym",
                "vi": "phòng tập thể dục",
                "pron": "/dʒɪm/"
            },
            {
                "en": "be sold out",
                "vi": "đã bán hết",
                "pron": "/bi soʊld aʊt/"
            },
            {
                "en": "soap opera",
                "vi": "kịch nhiều kì trên ti vi, rađiô",
                "pron": "/soʊp ˈɒpərə/"
            },
            {
                "en": "bike trail",
                "vi": "đường dành cho xe đạp",
                "pron": "/baɪk treɪl/"
            },
            {
                "en": "art exhibit",
                "vi": "triển lãm nghệ thuật",
                "pron": "/ɑːrt ɪgˈzɪbɪt/"
            },
            {
                "en": "skating rink",
                "vi": "sân băng, sân patanh",
                "pron": "/ˈskeɪtɪŋ rɪŋk/"
            },
            {
                "en": "premiere",
                "vi": "buổi diễn ra mắt, buổi công chiếu (phim)",
                "pron": "/prɪˈmɪr/"
            },
            {
                "en": "convertible",
                "vi": "xe mui trần",
                "pron": "/kənˈvɜːrtəbl/"
            },
            {
                "en": "work out",
                "vi": "tập luyện",
                "pron": "/wɜːrk aʊt/"
            },
            {
                "en": "car rental agency",
                "vi": "công ty cho thuê xe",
                "pron": "/kɑːr ˈrentl ˈeɪdʒənsi/"
            },
            {
                "en": "directions",
                "vi": "chỉ dẫn, hướng dẫn",
                "pron": "/dɪˈrekʃənz/"
            },
            {
                "en": "double park",
                "vi": "đậu xe bên cạnh chiếc xe khác",
                "pron": "/ˈdʌbl pɑːrk/"
            },
            {
                "en": "maintenance",
                "vi": "việc bảo trì",
                "pron": "/ˈmeɪntənəns/"
            },
            {
                "en": "personal belongings",
                "vi": "đồ đạc cá nhân",
                "pron": "/ˈpɜːrsənl bɪˈlɔːŋɪŋz/"
            }
        ]
    },
    {
        "id": "16",
        "title": "Những vấn đề khác",
        "icon": "fa-briefcase",
        "color": "bg-teal-500",
        "words": [
            {
                "en": "sponsor",
                "vi": "người đỡ đầu, doanh nghiệp tài trợ",
                "pron": "/ˈspɒnsər/"
            },
            {
                "en": "silverware",
                "vi": "bộ đồ ăn bằng bạc",
                "pron": "/ˈsɪlvərwer/"
            },
            {
                "en": "appliance",
                "vi": "thiết bị gia dụng điện tử",
                "pron": "/əˈplaɪəns/"
            },
            {
                "en": "pick up lunch",
                "vi": "đi ăn trưa",
                "pron": "/pɪk ʌp lʌntʃ/"
            },
            {
                "en": "freshly-baked",
                "vi": "mới nướng",
                "pron": "/ˈfreʃli beɪkt/"
            },
            {
                "en": "remodeling",
                "vi": "việc tu sửa lại",
                "pron": "/ˌriːˈmɒdəlɪŋ/"
            },
            {
                "en": "voucher",
                "vi": "phiếu trả tiền",
                "pron": "/ˈvaʊtʃər/"
            },
            {
                "en": "premium",
                "vi": "phí bảo hiểm",
                "pron": "/ˈpriːmiəm/"
            },
            {
                "en": "gift-wrap",
                "vi": "gói quà tặng",
                "pron": "/gɪft ræp/"
            },
            {
                "en": "distribution",
                "vi": "sự phân phối",
                "pron": "/ˌdɪstrɪˈbjuːʃən/"
            },
            {
                "en": "relative",
                "vi": "họ hàng thân thuộc",
                "pron": "/ˈrelətɪv/"
            },
            {
                "en": "catering",
                "vi": "việc cung cấp thực phẩm cho các dịp lễ, sự kiện lớn",
                "pron": "/ˈkeɪtərɪŋ/"
            },
            {
                "en": "renovation",
                "vi": "sự đổi mới",
                "pron": "/ˌrenəˈveɪʃən/"
            },
            {
                "en": "guarantee",
                "vi": "bảo hành",
                "pron": "/ˌgærənˈtiː/"
            },
            {
                "en": "policy",
                "vi": "điều khoản bảo hiểm",
                "pron": "/ˈpɒləsi/"
            }
        ]
    },
    {
        "id": "17",
        "title": "Thông báo",
        "icon": "fa-cart-shopping",
        "color": "bg-blue-500",
        "words": [
            {
                "en": "Annual report",
                "vi": "Thông báo thường niên",
                "pron": "/ˈænjuəl rɪˈpɔːrt/"
            },
            {
                "en": "Track",
                "vi": "Theo đuổi, theo dấu",
                "pron": "/træk/"
            },
            {
                "en": "Attribute",
                "vi": "Cho là, quy cho là",
                "pron": "/əˈtrɪbjuːt/"
            },
            {
                "en": "Shut down",
                "vi": "Kết thúc, ngừng hoạt động",
                "pron": "/ʃʌt daʊn/"
            },
            {
                "en": "Dedication",
                "vi": "Sự tận tâm",
                "pron": "/ˌdedɪˈkeɪʃən/"
            },
            {
                "en": "Extra training",
                "vi": "Huấn luyện thêm",
                "pron": "/ˈekstrə ˈtreɪnɪŋ/"
            },
            {
                "en": "Clarity",
                "vi": "Làm sáng tỏ",
                "pron": "/ˈklærəti/"
            },
            {
                "en": "Unplug",
                "vi": "Rút phích cắm ra",
                "pron": "/ˌʌnˈplʌg/"
            },
            {
                "en": "Log off",
                "vi": "Tắt (máy tính)",
                "pron": "/lɔːg ɔːf/"
            },
            {
                "en": "Assign",
                "vi": "Phân công",
                "pron": "/əˈsaɪn/"
            },
            {
                "en": "Identification card",
                "vi": "Giấy chứng minh",
                "pron": "/aɪˌdentɪfɪˈkeɪʃən kɑːrd/"
            },
            {
                "en": "Securing system",
                "vi": "Hệ thống an ninh",
                "pron": "/sɪˈkjʊərɪŋ ˈsɪstəm/"
            },
            {
                "en": "Temporary",
                "vi": "Tạm thời",
                "pron": "/ˈtempəreri/"
            },
            {
                "en": "Reduce the use of",
                "vi": "Giảm việc sử dụng",
                "pron": "/rɪˈduːs ðə juːs əv/"
            }
        ]
    },
    {
        "id": "18",
        "title": "Thông báo ở cửa hàng",
        "icon": "fa-hammer",
        "color": "bg-orange-500",
        "words": [
            {
                "en": "Attention, please!",
                "vi": "Xin chú ý",
                "pron": "/əˈtenʃən pliːz/"
            },
            {
                "en": "Alert",
                "vi": "Cảnh giác",
                "pron": "/əˈlɜːrt/"
            },
            {
                "en": "At half price",
                "vi": "Phân nửa giá",
                "pron": "/æt hæf praɪs/"
            },
            {
                "en": "Miss out",
                "vi": "Bỏ qua cơ hội",
                "pron": "/mɪs aʊt/"
            },
            {
                "en": "Complimentary",
                "vi": "Biếu, mời",
                "pron": "/ˌkɒmplɪˈmentri/"
            },
            {
                "en": "Advantage",
                "vi": "Ưu điểm",
                "pron": "/ədˈvæntɪdʒ/"
            },
            {
                "en": "Proceed to",
                "vi": "Đi đến",
                "pron": "/prəˈsiːd tuː/"
            },
            {
                "en": "Shipping and handling charge",
                "vi": "Phí vận chuyển",
                "pron": "/ˈʃɪpɪŋ ənd ˈhændlɪŋ tʃɑːrdʒ/"
            },
            {
                "en": "Checkout line",
                "vi": "Quầy tính tiền",
                "pron": "/ˈtʃekaʊt laɪn/"
            },
            {
                "en": "On duty &gt;&lt; Off duty",
                "vi": "Đang làm việc &gt;&lt; Hết ca làm việc",
                "pron": "/ɒn ˈduːti/ &gt;&lt; /ɔːf ˈduːti/"
            },
            {
                "en": "At a large discount",
                "vi": "Đại hạ giá",
                "pron": "/æt ə lɑːrdʒ ˈdɪskaʊnt/"
            },
            {
                "en": "Organic",
                "vi": "Có hệ thống, hữu cơ",
                "pron": "/ɔːrˈgænɪk/"
            },
            {
                "en": "Bulky",
                "vi": "Cồng kềnh",
                "pron": "/ˈbʌlki/"
            },
            {
                "en": "Patron",
                "vi": "Khách quen",
                "pron": "/ˈpeɪtrən/"
            },
            {
                "en": "Circulation desk",
                "vi": "Quầy cho mượn sách",
                "pron": "/ˌsɜːrkjəˈleɪʃən desk/"
            },
            {
                "en": "Extend operating hours",
                "vi": "Kéo dài giờ hoạt động",
                "pron": "/ɪkˈstend ˈɒpəreɪtɪŋ aʊərz/"
            }
        ]
    },
    {
        "id": "19",
        "title": "Thông báo liên quan đến giao thông",
        "icon": "fa-plane",
        "color": "bg-green-500",
        "words": [
            {
                "en": "Be closed for",
                "vi": "Bị chặn lại vì",
                "pron": "/bi kloʊzd fɔːr/"
            },
            {
                "en": "Closure",
                "vi": "Sự đóng cửa (chặn đường)",
                "pron": "/ˈkloʊʒər/"
            },
            {
                "en": "Southbound",
                "vi": "Đi về phía nam",
                "pron": "/ˈsaʊθbaʊnd/"
            },
            {
                "en": "Board the vehicle",
                "vi": "Lên xe",
                "pron": "/bɔːrd ðə ˈviːɪkl/"
            },
            {
                "en": "On the scene",
                "vi": "Ở hiện trường",
                "pron": "/ɒn ðə siːn/"
            },
            {
                "en": "Direct traffic",
                "vi": "Hướng dẫn luồng xe cộ",
                "pron": "/dɪˈrekt ˈtræfɪk/"
            },
            {
                "en": "Take an alternate route",
                "vi": "Đi đường vòng",
                "pron": "/teɪk ən ˈɔːltərnət ruːt/"
            },
            {
                "en": "Landing",
                "vi": "Hạ cánh",
                "pron": "/ˈlændɪŋ/"
            },
            {
                "en": "Incoming &gt;&lt; Outcoming",
                "vi": "Đi vào &gt;&lt; Đi ra, rời",
                "pron": "/ˈɪnkʌmɪŋ/ &gt;&lt; /ˈaʊtkʌmɪŋ/"
            },
            {
                "en": "Periodically",
                "vi": "Theo định kì",
                "pron": "/ˌpɪriˈɒdɪkli/"
            },
            {
                "en": "Underway",
                "vi": "(kế hoạch) đang tiến hành",
                "pron": "/ˌʌndərˈweɪ/"
            },
            {
                "en": "Be caught in traffic",
                "vi": "Bị kẹt xe",
                "pron": "/bi kɔːt ɪn ˈtræfɪk/"
            },
            {
                "en": "Intersection",
                "vi": "Giao lộ",
                "pron": "/ˌɪntərˈsekʃən/"
            },
            {
                "en": "Turbulence",
                "vi": "Sự hỗn loạn",
                "pron": "/ˈtɜːrbjələns/"
            },
            {
                "en": "Flight itinerary",
                "vi": "Thời biểu các chuyến bay",
                "pron": "/flaɪt aɪˈtɪnəreri/"
            },
            {
                "en": "Cancellation",
                "vi": "Sự hủy bỏ",
                "pron": "/ˌkænsəˈleɪʃən/"
            }
        ]
    },
    {
        "id": "20",
        "title": "Tin nhắn hướng dẫn tự động",
        "icon": "fa-user-doctor",
        "color": "bg-yellow-500",
        "words": [
            {
                "en": "reach",
                "vi": "Được nối đến",
                "pron": "/riːtʃ/"
            },
            {
                "en": "Technical problem",
                "vi": "Sự cố kỹ thuật",
                "pron": "/ˈteknɪkl ˈprɒbləm/"
            },
            {
                "en": "Extension (ext.)",
                "vi": "Số nội bộ, số máy nhánh",
                "pron": "/ɪkˈstenʃən/"
            },
            {
                "en": "Regular hours",
                "vi": "Giờ hoạt động thường lệ",
                "pron": "/ˈregjələr aʊərz/"
            },
            {
                "en": "Come across",
                "vi": "Tình cờ phát hiện",
                "pron": "/kʌm əˈkrɒs/"
            },
            {
                "en": "Put someone through",
                "vi": "(Điện thoại) nối máy với",
                "pron": "/pʊt ˈsʌmwʌn θruː/"
            },
            {
                "en": "Automated telephone reservation system",
                "vi": "Hệ thống đặt trước qua điện thoại tự động",
                "pron": "/ˈɔːtəmeɪtɪd ˈtelɪfoʊn ˌrezərˈveɪʃən ˈsɪstəm/"
            },
            {
                "en": "Press",
                "vi": "Nhấn số",
                "pron": "/pres/"
            },
            {
                "en": "After the tone",
                "vi": "Sau khi nghe tiếng bíp",
                "pron": "/ˈæftər ðə toʊn/"
            },
            {
                "en": "Agent",
                "vi": "Nhân viên",
                "pron": "/ˈeɪdʒənt/"
            },
            {
                "en": "Call back",
                "vi": "Gọi lại",
                "pron": "/kɔːl bæk/"
            },
            {
                "en": "Hang up",
                "vi": "Cúp máy",
                "pron": "/hæŋ ʌp/"
            },
            {
                "en": "Hold on",
                "vi": "Giữ máy chờ",
                "pron": "/hoʊld ɒn/"
            },
            {
                "en": "Telephone operator",
                "vi": "Nhân viên trực tổng đài điện thoại",
                "pron": "/ˈtelɪfoʊn ˈɒpəreɪtər/"
            },
            {
                "en": "Connect",
                "vi": "Kết nối",
                "pron": "/kəˈnekt/"
            }
        ]
    },
    {
        "id": "21",
        "title": "Hộp thư thoại cá nhân",
        "icon": "fa-users",
        "color": "bg-purple-500",
        "words": [
            {
                "en": "Mobile phone",
                "vi": "Điện thoại di động",
                "pron": "/ˈmoʊbaɪl foʊn/"
            },
            {
                "en": "Ready for pick-up",
                "vi": "Sẵn sàng nghe",
                "pron": "/ˈredi fɔːr pɪk ʌp/"
            },
            {
                "en": "Return a call",
                "vi": "Gọi điện trả lời",
                "pron": "/rɪˈtɜːrn ə kɔːl/"
            },
            {
                "en": "Answering machine",
                "vi": "Máy trả lời tự động",
                "pron": "/ˈænsərɪŋ məˈʃiːn/"
            },
            {
                "en": "Be scheduled to do",
                "vi": "Lên kế hoạch (làm gì)",
                "pron": "/bi ˈskedʒuːld tuː duː/"
            },
            {
                "en": "Apologize for",
                "vi": "Xin lỗi về",
                "pron": "/əˈpɒlədʒaɪz fɔːr/"
            },
            {
                "en": "Make a phone call",
                "vi": "Gọi điện thoại",
                "pron": "/meɪk ə foʊn kɔːl/"
            },
            {
                "en": "Leave a message",
                "vi": "Để lại tin nhắn",
                "pron": "/liːv ə ˈmesɪdʒ/"
            },
            {
                "en": "Remind",
                "vi": "Nhắc, nhắc nhở",
                "pron": "/rɪˈmaɪnd/"
            },
            {
                "en": "Mailing address",
                "vi": "Địa chỉ gửi thư",
                "pron": "/ˈmeɪlɪŋ əˈdres/"
            },
            {
                "en": "Direct number",
                "vi": "Điện thoại chính",
                "pron": "/dɪˈrekt ˈnʌmbər/"
            },
            {
                "en": "Status of repair",
                "vi": "Tình trạng sửa chữa",
                "pron": "/ˈsteɪtəs əv rɪˈper/"
            }
        ]
    },
    {
        "id": "22",
        "title": "Hộp thư thoại công việc",
        "icon": "fa-school",
        "color": "bg-red-500",
        "words": [
            {
                "en": "Voice mail message",
                "vi": "Hộp thư thoại",
                "pron": "/vɔɪs meɪl ˈmesɪdʒ/"
            },
            {
                "en": "Toll-free number",
                "vi": "Số điện thoại miễn cước phí",
                "pron": "/toʊl friː ˈnʌmbər/"
            },
            {
                "en": "Confirm",
                "vi": "Xác nhận",
                "pron": "/kənˈfɜːrm/"
            },
            {
                "en": "Appreciate",
                "vi": "Đánh giá cao, cảm kích",
                "pron": "/əˈpriːʃieɪt/"
            },
            {
                "en": "Interruption",
                "vi": "Sự gián đoạn",
                "pron": "/ˌɪntəˈrʌpʃən/"
            },
            {
                "en": "Area code",
                "vi": "Mã vùng",
                "pron": "/ˈeriə koʊd/"
            },
            {
                "en": "Get through",
                "vi": "Kết nối được",
                "pron": "/get θruː/"
            },
            {
                "en": "Feel free to do",
                "vi": "(Nói khi cho phép) cứ tự nhiên (làm gì đó)",
                "pron": "/fiːl friː tuː duː/"
            },
            {
                "en": "Place an order",
                "vi": "Đặt hàng",
                "pron": "/pleɪs ən ˈɔːrdər/"
            },
            {
                "en": "Out of office",
                "vi": "Không có mặt ở văn phòng",
                "pron": "/aʊt əv ˈɒfɪs/"
            },
            {
                "en": "Web site",
                "vi": "Trang web",
                "pron": "/web saɪt/"
            },
            {
                "en": "Set up an appointment",
                "vi": "Ấn định cuộc hẹn",
                "pron": "/set ʌp ən əˈpɔɪntmənt/"
            },
            {
                "en": "System malfunction",
                "vi": "Sự trục trặc của hệ thống",
                "pron": "/ˈsɪstəm ˌmælˈfʌŋkʃən/"
            },
            {
                "en": "Job opening",
                "vi": "Cơ hội việc làm",
                "pron": "/dʒɒb ˈoʊpənɪŋ/"
            }
        ]
    },
    {
        "id": "23",
        "title": "Dự báo thời tiết",
        "icon": "fa-briefcase",
        "color": "bg-teal-500",
        "words": [
            {
                "en": "Breezy",
                "vi": "Có gió hiu hiu",
                "pron": "/ˈbriːzi/"
            },
            {
                "en": "Heavy rain",
                "vi": "Mưa to",
                "pron": "/ˈhevi reɪn/"
            },
            {
                "en": "Poor weather conditions",
                "vi": "Điều kiện thời tiết tồi tệ",
                "pron": "/pʊr ˈweðər kənˈdɪʃənz/"
            },
            {
                "en": "Chilly",
                "vi": "Rất lạnh",
                "pron": "/ˈtʃɪli/"
            },
            {
                "en": "Temperature",
                "vi": "Nhiệt độ",
                "pron": "/ˈtemprətʃər/"
            },
            {
                "en": "Celsius",
                "vi": "(Độ) C",
                "pron": "/ˈselsiəs/"
            },
            {
                "en": "Fahrenheit",
                "vi": "(Độ) F",
                "pron": "/ˈfærənhaɪt/"
            },
            {
                "en": "Humidity",
                "vi": "Độ ẩm",
                "pron": "/hjuːˈmɪdəti/"
            },
            {
                "en": "Degree",
                "vi": "Độ",
                "pron": "/dɪˈgriː/"
            },
            {
                "en": "Gusty",
                "vi": "Có gió giật từng cơn",
                "pron": "/ˈgʌsti/"
            },
            {
                "en": "Scorcher",
                "vi": "Ngày rất nóng, ngày trời nóng như thiêu đốt",
                "pron": "/ˈskɔːrtʃər/"
            },
            {
                "en": "High &gt;&lt; Low",
                "vi": "Cao &gt;&lt; Thấp",
                "pron": "/haɪ/ &gt;&lt; /loʊ/"
            },
            {
                "en": "Accumulation",
                "vi": "Sự tích tụ",
                "pron": "/əˌkjuːmjəˈleɪʃən/"
            }
        ]
    },
    {
        "id": "24",
        "title": "Giới thiệu sản phẩm",
        "icon": "fa-cart-shopping",
        "color": "bg-blue-500",
        "words": [
            {
                "en": "Stay tuned for",
                "vi": "Giữ nguyên sóng",
                "pron": "/steɪ tuːnd fɔːr/"
            },
            {
                "en": "Audience",
                "vi": "Thính giả",
                "pron": "/ˈɔːdiəns/"
            },
            {
                "en": "Newscaster",
                "vi": "Phát thanh viên chương trình tin tức",
                "pron": "/ˈnuːzkæstər/"
            },
            {
                "en": "Radio show",
                "vi": "Chương trình radiô",
                "pron": "/ˈreɪdioʊ ʃoʊ/"
            },
            {
                "en": "Live",
                "vi": "(Phát sóng) trực tiếp",
                "pron": "/laɪv/"
            },
            {
                "en": "Critic",
                "vi": "Nhà phê bình",
                "pron": "/ˈkrɪtɪk/"
            },
            {
                "en": "Channel",
                "vi": "Kênh",
                "pron": "/ˈtʃænl/"
            },
            {
                "en": "Upcoming concert",
                "vi": "Buổi hòa nhạc sắp tới",
                "pron": "/ˈʌpkʌmɪŋ ˈkɒnsərt/"
            },
            {
                "en": "Be broadcast on",
                "vi": "Được phát sóng trên",
                "pron": "/bi ˈbrɔːdkæst ɒn/"
            },
            {
                "en": "Hourly",
                "vi": "Hàng giờ",
                "pron": "/ˈaʊərli/"
            },
            {
                "en": "Special guest",
                "vi": "Khách mời đặc biệt",
                "pron": "/ˈspeʃəl gest/"
            },
            {
                "en": "Commercial break",
                "vi": "Thời gian quảng cáo",
                "pron": "/kəˈmɜːrʃəl breɪk/"
            }
        ]
    },
    {
        "id": "25",
        "title": "Quảng cáo sản phẩm",
        "icon": "fa-hammer",
        "color": "bg-orange-500",
        "words": [
            {
                "en": "Drop in",
                "vi": "Ghé lại",
                "pron": "/drɒp ɪn/"
            },
            {
                "en": "Durable",
                "vi": "Lâu bền",
                "pron": "/ˈdʊrəbl/"
            },
            {
                "en": "Competitor",
                "vi": "Đối thủ cạnh tranh",
                "pron": "/kəmˈpetɪtər/"
            },
            {
                "en": "Dispatch",
                "vi": "Gửi đi",
                "pron": "/dɪˈspætʃ/"
            },
            {
                "en": "Sign up for",
                "vi": "Đăng kí",
                "pron": "/saɪn ʌp fɔːr/"
            },
            {
                "en": "Maintenance",
                "vi": "Sự bảo trì",
                "pron": "/ˈmeɪntənəns/"
            },
            {
                "en": "Warranty",
                "vi": "Giấy bảo hành",
                "pron": "/ˈwɔːrənti/"
            },
            {
                "en": "Environmentally friendly",
                "vi": "Thân thiện với môi trường",
                "pron": "/ɪnˌvaɪrənˈmentəli ˈfrendli/"
            },
            {
                "en": "Utility company",
                "vi": "Công ty tiện ích công cộng (cung ứng điện,",
                "pron": "/juːˈtɪləti ˈkʌmpani/"
            },
            {
                "en": "Car show",
                "vi": "Cuộc triển lãm xe hơi",
                "pron": "/kɑːr ʃoʊ/"
            },
            {
                "en": "Nutritional value",
                "vi": "Giá trị dinh dưỡng",
                "pron": "/nuːˈtrɪʃənl ˈvæljuː/"
            },
            {
                "en": "Equipment",
                "vi": "Trang thiết bị",
                "pron": "/ɪˈkwɪpmənt/"
            },
            {
                "en": "Instruction",
                "vi": "Lời hướng dẫn",
                "pron": "/ɪnˈstrʌkʃən/"
            },
            {
                "en": "Unit",
                "vi": "Đơn vị",
                "pron": "/ˈjuːnɪt/"
            }
        ]
    },
    {
        "id": "26",
        "title": "Hướng dẫn tham quan",
        "icon": "fa-plane",
        "color": "bg-green-500",
        "words": [
            {
                "en": "Video equipment",
                "vi": "Thiết bị video",
                "pron": "/ˈvɪdioʊ ɪˈkwɪpmənt/"
            },
            {
                "en": "Exhibit",
                "vi": "Vật trưng bày",
                "pron": "/ɪgˈzɪbɪt/"
            },
            {
                "en": "Key site",
                "vi": "Khu di tích quan trọng",
                "pron": "/kiː saɪt/"
            },
            {
                "en": "Historic city",
                "vi": "Thành phố có tầm quan trọng về mặt lịch sử",
                "pron": "/hɪˈstɔːrɪk ˈsɪti/"
            },
            {
                "en": "Last approximately",
                "vi": "Kéo dài khoảng",
                "pron": "/læst əˈprɒksɪmətli/"
            },
            {
                "en": "Spectacular",
                "vi": "Ngoạn mục",
                "pron": "/spekˈtækjələr/"
            },
            {
                "en": "Aquarium",
                "vi": "Bể cá",
                "pron": "/əˈkweriəm/"
            },
            {
                "en": "Lean out of the window",
                "vi": "Nhoài người qua cửa sổ",
                "pron": "/liːn aʊt əv ðə ˈwɪndoʊ/"
            },
            {
                "en": "Direct",
                "vi": "Chỉ đường, hướng dẫn",
                "pron": "/dɪˈrekt/"
            },
            {
                "en": "Donation",
                "vi": "Vật tặng/cúng",
                "pron": "/doʊˈneɪʃən/"
            },
            {
                "en": "Admission free",
                "vi": "Phí vào cửa",
                "pron": "/ədˈmɪʃən friː/"
            },
            {
                "en": "Landmark",
                "vi": "Mốc, sự kiện đánh dấu một giai đoạn quan trọng",
                "pron": "/ˈlændmɑːrk/"
            },
            {
                "en": "Tourist attraction",
                "vi": "Nơi thu hút khách du lịch",
                "pron": "/ˈtʊrɪst əˈtrækʃən/"
            }
        ]
    },
    {
        "id": "27",
        "title": "Giới thiệu",
        "icon": "fa-user-doctor",
        "color": "bg-yellow-500",
        "words": [
            {
                "en": "Instructor",
                "vi": "Giảng viên",
                "pron": "/ɪnˈstrʌktər/"
            },
            {
                "en": "Keynote speaker",
                "vi": "Người diễn thuyết chính",
                "pron": "/ˈkiːnoʊt ˈspiːkər/"
            },
            {
                "en": "Expert",
                "vi": "Chuyên gia",
                "pron": "/ˈekspɜːrt/"
            },
            {
                "en": "Prominent",
                "vi": "Lỗi lạc, xuất chúng",
                "pron": "/ˈprɒmɪnənt/"
            },
            {
                "en": "Be honored to do",
                "vi": "Hân hạnh/vinh dự làm gì đó",
                "pron": "/bi ˈɒnərd tuː duː/"
            },
            {
                "en": "Performance",
                "vi": "Sự biểu diễn, thành tựu",
                "pron": "/pərˈfɔːrməns/"
            },
            {
                "en": "Pager",
                "vi": "Máy nhắn tin",
                "pron": "/ˈpeɪdʒər/"
            },
            {
                "en": "Flash photography",
                "vi": "Chụp hình có đèn flash",
                "pron": "/flæʃ fəˈtɒgrəfi/"
            },
            {
                "en": "Be prohibited",
                "vi": "Bị cấm",
                "pron": "/bi prəˈhɪbɪtɪd/"
            },
            {
                "en": "Auditorium",
                "vi": "Thính phòng",
                "pron": "/ˌɔːdɪˈtɔːriəm/"
            },
            {
                "en": "Entrepreneur",
                "vi": "Doanh nhân",
                "pron": "/ˌɒntrəprəˈnɜːr/"
            },
            {
                "en": "Filmmaker",
                "vi": "Nhà làm phim",
                "pron": "/ˈfɪlmmeɪkər/"
            },
            {
                "en": "Award ceremony",
                "vi": "Lễ trao giải thưởng",
                "pron": "/əˈwɔːrd ˈserəmoʊni/"
            },
            {
                "en": "Work history",
                "vi": "Kinh nghiệm làm việc",
                "pron": "/wɜːrk ˈhɪstəri/"
            }
        ]
    },
    {
        "id": "28",
        "title": "Thuyết trình",
        "icon": "fa-users",
        "color": "bg-purple-500",
        "words": [
            {
                "en": "Principle",
                "vi": "Nguyên tắc",
                "pron": "/ˈprɪnsəpl/"
            },
            {
                "en": "Supplement with",
                "vi": "Bổ sung với",
                "pron": "/ˈsʌplɪment wɪð/"
            },
            {
                "en": "Intermission",
                "vi": "Khoảng thời gian tạm nghỉ",
                "pron": "/ˌɪntərˈmɪʃən/"
            },
            {
                "en": "Conserve energy",
                "vi": "Bảo toàn năng lượng",
                "pron": "/kənˈsɜːrv ˈenərdʒi/"
            },
            {
                "en": "Brief",
                "vi": "Báo cáo ngắn gọn",
                "pron": "/briːf/"
            },
            {
                "en": "Cover",
                "vi": "Đề cập đến",
                "pron": "/ˈkʌvər/"
            },
            {
                "en": "Give one’s comments on the subject",
                "vi": "Đưa ra nhận xét về chủ đề",
                "pron": "/gɪv wʌnz ˈkɒments ɒn ðə ˈsʌbdʒɪkt/"
            },
            {
                "en": "Brainstorming",
                "vi": "Động não",
                "pron": "/ˈbreɪnstɔːrmɪŋ/"
            },
            {
                "en": "Comment",
                "vi": "Nhận xét, lời phê bình",
                "pron": "/ˈkɒment/"
            }
        ]
    }
];

        // 2. STATE MANAGEMENT
        const app = {
            data: vocabularyData,
            config: {
                correctCode: "NAPCARD20KTHAGAONTOIEC",
                // Danh sách các mã code hợp lệ (bao gồm cả link QR user đang dùng)
                validCodes: [
                    "NAPCARD20KTHAGAONTOIEC",
                    "https://q.me-qr.com/mornqf4g",
                    "https://get-qr.com/umGK7G"
                ]
            },
            state: {
                isLoggedIn: false,
                html5QrCode: null,
                currentTopicIndex: null,
                learnedWords: {}, 
                flashcardQueue: [],
                currentCardIndex: 0,
                quizScore: 0,
                quizQueue: [],
                gameCards: [],
                gameSelected: [],
                gameMatches: 0,
                // New Features state
                spellingQueue: [],
                currentSpellingIndex: 0,
                spellingScore: 0,
                filterSource: 'all',
                searchTerm: ''
            },

            // --- Initialization ---
            init() {
                // Load Custom Data from LocalStorage
                const savedCustom = localStorage.getItem('toeic_custom_data');
                if (savedCustom) {
                    try {
                        const parsed = JSON.parse(savedCustom);
                        if (Array.isArray(parsed)) {
                            this.data = [...this.data, ...parsed];
                        }
                    } catch(e) {
                        console.error("Error loading custom data", e);
                    }
                }

                // Initialize Data with Mock Sources if missing
                this.data.forEach((t, i) => {
                    if (!t.source) {
                        // Mock assignment for demo purposes based on index
                        t.source = `Part ${(i % 4) + 1}`; 
                    }
                });

                // Check Dark Mode
                if (localStorage.getItem('toeic_dark_mode') === 'true') {
                    document.documentElement.classList.add('dark');
                }

                // Check Session Storage
                if (sessionStorage.getItem('toeic_auth') === 'true') {
                    this.state.isLoggedIn = true;
                }

                if (this.state.isLoggedIn) {
                    this.loadProgress();
                    this.goHome();
                } else {
                    this.showLogin();
                }

                // Initialize mobile menu
                this.initMobileMenu();
            },

            showLogin() {
                this.hideAllViews();
                document.getElementById('view-login').classList.remove('hidden');
                document.querySelector('nav').classList.add('hidden'); // Hide nav on login
            },

            handleLogin() {
                const input = document.getElementById('access-code').value.trim().toUpperCase();
                if (input === this.config.correctCode) {
                    this.completeLogin();
                } else {
                    alert('Mã code không chính xác! Vui lòng thử lại.');
                }
            },

            completeLogin() {
                this.state.isLoggedIn = true;
                sessionStorage.setItem('toeic_auth', 'true');
                this.stopScanner();
                document.querySelector('nav').classList.remove('hidden');
                this.loadProgress();
                this.goHome();
            },

            // --- QR Scanner ---
            startScanner() {
                document.getElementById('reader-container').classList.remove('hidden');
                document.getElementById('btn-scan-qr').classList.add('hidden'); 
                
                if (!this.state.html5QrCode) {
                    try {
                        this.state.html5QrCode = new Html5Qrcode("reader");
                    } catch (e) {
                        console.error("Init Error", e);
                    }
                }

                if (this.state.html5QrCode && this.state.html5QrCode.isScanning) return;

                const qrCodeSuccessCallback = (decodedText, decodedResult) => {
                    this.verifyCode(decodedText);
                };
                
                const config = { fps: 10, qrbox: { width: 250, height: 250 } };
                
                this.state.html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
                .catch(err => {
                    console.error("Error starting QR scanner", err);
                    alert("Không thể mở camera. Vui lòng cấp quyền hoặc nhập code thủ công.");
                    this.stopScanner();
                });
            },

            async handleQrFile(input) {
                if (input.files.length === 0) return;
                const imageFile = input.files[0];

                // Kiểm tra loại file
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
                if (!allowedTypes.includes(imageFile.type)) {
                    alert('Chỉ chấp nhận file ảnh có định dạng: JPEG, PNG, GIF, WebP');
                    input.value = '';
                    return;
                }

                // Kiểm tra kích thước file (max 10MB)
                const maxSize = 10 * 1024 * 1024; // 10MB
                if (imageFile.size > maxSize) {
                    alert('Kích thước file quá lớn. Vui lòng chọn file dưới 10MB.');
                    input.value = '';
                    return;
                }

                // Disable button và hiển thị loading
                const uploadBtn = document.getElementById('btn-upload-qr');
                const originalText = uploadBtn.innerHTML;
                uploadBtn.disabled = true;
                uploadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Đang xử lý...';

                // 1. Dọn dẹp scanner cũ (nếu có)
                if (this.state.html5QrCode) {
                    try {
                        if (this.state.html5QrCode.isScanning) {
                            await this.state.html5QrCode.stop();
                        }
                        this.state.html5QrCode.clear();
                    } catch (e) {
                        // ignore error
                    }
                    this.state.html5QrCode = null;
                }

                try {
                    // 2. Thử scan bằng jsQR trước (tốt hơn cho file)
                    let decodedText;
                    try {
                        decodedText = await this.scanQrFromFile(imageFile);
                    } catch (jsQrError) {
                        console.warn('jsQR failed, trying html5-qrcode:', jsQrError);
                        // Fallback to html5-qrcode
                        const hiddenDiv = document.createElement('div');
                        hiddenDiv.style.display = 'none';
                        document.body.appendChild(hiddenDiv);
                        
                        const html5QrCode = new Html5Qrcode(hiddenDiv);
                        decodedText = await html5QrCode.scanFile(imageFile, false);
                        html5QrCode.clear();
                        document.body.removeChild(hiddenDiv);
                    }
                    
                    this.verifyCode(decodedText);
                } catch (err) {
                    console.error("File Scan Error:", err);
                    
                    let errorMsg = "Không tìm thấy mã QR trong ảnh.";
                    if (err?.toString().includes("No MultiFormat Readers") || err?.toString().includes("No QR code found")) {
                        errorMsg = "Không thể giải mã QR từ ảnh này.";
                    } else if (err?.toString().includes("Failed to load image") || err?.toString().includes("Failed to read file")) {
                        errorMsg = "Không thể đọc file ảnh. Vui lòng thử lại.";
                    }

                    alert(`${errorMsg}\n\nGợi ý:\n1. Ảnh quá mờ hoặc bị vỡ hạt -> Hãy dùng ảnh gốc rõ nét.\n2. Ảnh chứa quá nhiều chi tiết thừa -> Hãy cắt (crop) sát vào mã QR.\n3. Đảm bảo ảnh có định dạng hỗ trợ (PNG, JPG, JPEG).\n4. Kiểm tra xem mã QR có bị hỏng hoặc quá nhỏ không.\n5. Thử dùng ảnh có độ phân giải cao hơn.`);
                } finally {
                    input.value = ''; // Reset input
                    // Khôi phục button
                    uploadBtn.disabled = false;
                    uploadBtn.innerHTML = originalText;
                }
            },

            // Hàm scan QR từ file sử dụng jsQR
            async scanQrFromFile(file) {
                return new Promise((resolve, reject) => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const img = new Image();
                    
                    img.onload = () => {
                        try {
                            // Resize canvas to image size
                            canvas.width = img.width;
                            canvas.height = img.height;
                            
                            // Draw image to canvas
                            ctx.drawImage(img, 0, 0);
                            
                            // Get image data
                            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                            
                            // Scan QR code
                            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                                inversionAttempts: "dontInvert",
                            });
                            
                            if (code && code.data) {
                                console.log('QR Code found:', code.data);
                                resolve(code.data);
                            } else {
                                reject(new Error('No QR code found in image'));
                            }
                        } catch (error) {
                            console.error('Error processing image:', error);
                            reject(error);
                        }
                    };
                    
                    img.onerror = (error) => {
                        console.error('Image load error:', error);
                        reject(new Error('Failed to load image'));
                    };
                    
                    // Load image from file
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        img.src = e.target.result;
                    };
                    reader.onerror = (error) => {
                        console.error('File read error:', error);
                        reject(new Error('Failed to read file'));
                    };
                    reader.readAsDataURL(file);
                });
            },

            verifyCode(code) {
                // Kiểm tra code có trong danh sách hợp lệ hoặc khớp mã gốc không
                const isValid = (this.config.validCodes && this.config.validCodes.includes(code)) 
                             || code === this.config.correctCode;

                if (isValid) {
                    const cleanupAndLogin = () => {
                        try {
                            if (this.state.html5QrCode) {
                                this.state.html5QrCode.clear(); 
                            }
                        } catch(e) {}
                        this.completeLogin();
                    };

                    if (this.state.html5QrCode && this.state.html5QrCode.isScanning) {
                         this.state.html5QrCode.stop()
                             .then(cleanupAndLogin)
                             .catch(cleanupAndLogin);
                    } else {
                         cleanupAndLogin();
                    }
                } else {
                    alert(`Mã QR đã quét được: "${code}"\nNhưng mã này không đúng với hệ thống!`);
                }
            },

            stopScanner() {
                if (this.state.html5QrCode) {
                    const cleanup = () => {
                        try { this.state.html5QrCode.clear(); } catch(e){}
                        this.resetScannerUI();
                    };

                    if (this.state.html5QrCode.isScanning) {
                        this.state.html5QrCode.stop()
                            .then(cleanup)
                            .catch((err) => {
                                console.error("Failed to stop scanning", err);
                                cleanup();
                            });
                    } else {
                        cleanup();
                    }
                } else {
                    this.resetScannerUI();
                }
            },

            resetScannerUI() {
                document.getElementById('reader-container').classList.add('hidden');
                document.getElementById('btn-scan-qr').classList.remove('hidden');
            },

            loadProgress() {
                const stored = localStorage.getItem('toeic_app_learned');
                if (stored) {
                    this.state.learnedWords = JSON.parse(stored);
                } else {
                    this.state.learnedWords = {};
                    // Init empty arrays for topics
                    this.data.forEach(t => { this.state.learnedWords[t.id] = [] });
                }
            },

            saveProgress() {
                localStorage.setItem('toeic_app_learned', JSON.stringify(this.state.learnedWords));
                this.renderDashboard(); // Re-render to update progress bars
            },

            resetProgress() {
                if(confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ học?')) {
                    localStorage.removeItem('toeic_app_learned');
                    this.loadProgress();
                    this.goHome();
                }
            },

            saveCustomData() {
                // Save only items that are not in the original const vocabularyData
                // We identify them by checking against the original list
                const originalIds = new Set(vocabularyData.map(d => d.id));
                const customItems = this.data.filter(d => !originalIds.has(d.id));
                localStorage.setItem('toeic_custom_data', JSON.stringify(customItems));
            },

            // --- Navigation / View Switching ---
            hideAllViews() {
                document.querySelectorAll('main > section').forEach(el => el.classList.add('hidden'));
            },

            goHome() {
                this.hideAllViews();
                document.getElementById('view-dashboard').classList.remove('hidden');
                this.renderDashboard();
                this.state.currentTopicIndex = null;
            },

            toggleMobileMenu() {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.toggle('hidden');
            },

            // Close mobile menu when clicking outside
            initMobileMenu() {
                document.addEventListener('click', (e) => {
                    const mobileMenu = document.getElementById('mobile-menu');
                    const menuButton = e.target.closest('button[onclick*="toggleMobileMenu"]');
                    
                    if (!menuButton && !mobileMenu.contains(e.target)) {
                        mobileMenu.classList.add('hidden');
                    }
                });
            },

            selectTopic(index) {
                this.state.currentTopicIndex = index;
                const topic = this.data[index];
                
                // Update Action View Title
                document.getElementById('action-topic-title').innerText = topic.title;
                
                this.hideAllViews();
                document.getElementById('view-actions').classList.remove('hidden');
            },

            showActions() {
                if (this.state.currentTopicIndex !== null) {
                    this.selectTopic(this.state.currentTopicIndex);
                } else {
                    this.goHome();
                }
            },

            toggleDarkMode() {
                document.documentElement.classList.toggle('dark');
                localStorage.setItem('toeic_dark_mode', document.documentElement.classList.contains('dark'));
            },

            handleSearch(val) {
                this.state.searchTerm = val.toLowerCase();
                this.renderDashboard();
            },

            handleFilter(source) {
                this.state.filterSource = source;
                this.renderDashboard();
            },

            // --- Data Import Feature ---
            handleImport(input) {
                if (input.files.length === 0) return;
                const file = input.files[0];
                const reader = new FileReader();

                reader.onload = (e) => {
                    const content = e.target.result;
                    let newData = null;

                    try {
                        if (file.name.endsWith('.json')) {
                            newData = JSON.parse(content);
                            if (!Array.isArray(newData)) throw new Error('Format JSON không hợp lệ (phải là mảng)');
                            
                            // Enhance JSON data with custom IDs if needed or mark them
                            newData = newData.map(item => ({
                                ...item,
                                source: item.source || 'Custom Import',
                                id: item.id || `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
                            }));

                        } else if (file.name.endsWith('.csv')) {
                            newData = this.parseCSV(content);
                        } else {
                            alert('Chỉ hỗ trợ file .json hoặc .csv');
                            return;
                        }

                        if (newData && newData.length > 0) {
                            // Merge logic: Add new topics to existing data instead of replacing
                            const confirmMsg = `Tìm thấy ${newData.length} chủ đề mới. Bạn có muốn thêm chúng vào danh sách hiện tại không?`;
                            
                            if (confirm(confirmMsg)) {
                                this.data = [...this.data, ...newData];
                                
                                // Save to localStorage
                                this.saveCustomData();
                                
                                // Update filter to include new source if any
                                // Reset filters to show potential new items
                                this.state.filterSource = 'Custom Import'; 
                                this.state.searchTerm = '';
                                document.querySelector('#filter-source').value = 'Custom Import';
                                document.querySelector('input[placeholder="Tra từ vựng..."]').value = '';
                                
                                // Reset learned progress only for new IDs to avoid errors
                                newData.forEach(t => { 
                                    if (!this.state.learnedWords[t.id]) {
                                        this.state.learnedWords[t.id] = []; 
                                    }
                                });
                                
                                this.renderDashboard();
                                
                                // Count total words
                                const totalWords = newData.reduce((acc, t) => acc + (t.words ? t.words.length : 0), 0);
                                alert(`Import thành công! Đã thêm ${newData.length} chủ đề với ${totalWords} từ vựng mới.`);
                            }
                        } else {
                            alert('File không chứa dữ liệu hợp lệ.');
                        }
                    } catch (err) {
                        console.error(err);
                        alert('Lỗi khi đọc file: ' + err.message);
                    }
                    
                    // Reset input
                    input.value = '';
                };

                reader.readAsText(file);
            },

            parseCSV(csvText) {
                const lines = csvText.trim().split('\n');
                if (lines.length < 2) return []; // Only header or empty

                // Expected Header: Topic, Word, Meaning, Pronunciation
                // We'll group by Topic
                const topicsMap = {};
                let topicCounter = 1;

                // Skip header (row 0)
                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (!line) continue;
                    
                    // Simple CSV split by comma (doesn't handle quoted commas well but sufficient for simple requirement)
                    const parts = line.split(',');
                    // Handle cases where pronunciation might be missing or extra commas
                    // Ideally use a CSV parser lib, but manual split for simplicity:
                    // Format: Topic, Word, Meaning, Pronunciation
                    if (parts.length < 3) continue;

                    const topicTitle = parts[0].trim();
                    const en = parts[1].trim();
                    const vi = parts[2].trim();
                    const pron = parts[3] ? parts[3].trim() : '';

                    if (!topicsMap[topicTitle]) {
                        topicsMap[topicTitle] = {
                            id: `custom_${topicCounter++}`,
                            title: topicTitle,
                            icon: "fa-book", // Default icon
                            color: "bg-indigo-500", // Default color
                            source: "Custom Import",
                            words: []
                        };
                    }

                    topicsMap[topicTitle].words.push({ en, vi, pron });
                }

                return Object.values(topicsMap);
            },

            downloadTemplate() {
                // Prepare sample CSV
                const csvContent = "Topic, Word, Meaning, Pronunciation\n" +
                                   "Common Phrases, Hello, Xin chào, /həˈləʊ/\n" +
                                   "Common Phrases, Thank you, Cảm ơn, /θæŋk juː/\n" +
                                   "Work, Meeting, Cuộc họp, /ˈmiːtɪŋ/";
                
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement("a");
                const url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", "toeic_template.csv");
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },

            // --- Dashboard Logic ---
            renderDashboard() {
                const container = document.getElementById('topic-list');
                container.innerHTML = '';
                
                let filteredData = this.data;

                // Filter by Source
                if (this.state.filterSource !== 'all') {
                    filteredData = filteredData.filter(t => t.source === this.state.filterSource);
                }

                // Filter by Search (Search in Title OR in Words)
                if (this.state.searchTerm) {
                    filteredData = filteredData.filter(t => {
                        const titleMatch = t.title.toLowerCase().includes(this.state.searchTerm);
                        const wordMatch = t.words.some(w => w.en.toLowerCase().includes(this.state.searchTerm) || w.vi.toLowerCase().includes(this.state.searchTerm));
                        return titleMatch || wordMatch;
                    });
                }

                if (filteredData.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center text-gray-500 py-10">Không tìm thấy chủ đề nào.</div>';
                    return;
                }

                filteredData.forEach((topic) => {
                    // Find original index to keep click handling correct
                    const originalIndex = this.data.findIndex(d => d.id === topic.id);
                    
                    // Calculate progress
                    const total = topic.words.length;
                    const learnedInit = this.state.learnedWords[topic.id] || [];
                    const learnedCount = learnedInit.length;
                    const percent = Math.round((learnedCount / total) * 100);

                    const el = document.createElement('div');
                    el.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer border border-gray-100 group dark:bg-slate-800 dark:border-slate-700';
                    el.onclick = () => this.selectTopic(originalIndex);
                    
                    el.innerHTML = `
                        <div class="p-4 md:p-6">
                            <div class="flex items-center mb-3 md:mb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 ${topic.color} bg-opacity-20 rounded-full flex items-center justify-center text-${topic.color.replace('bg-', '')} mr-3 md:mr-4">
                                    <i class="fa-solid ${topic.icon} text-lg md:text-xl text-white py-1.5 px-2 md:py-2 md:px-3 rounded-full ${topic.color}"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-base md:text-xl text-gray-800 group-hover:text-brand-600 transition dark:text-gray-200">${topic.title}</h3>
                                    <span class="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-gray-400">${topic.source}</span>
                                </div>
                            </div>
                            
                            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2 dark:bg-slate-700">
                                <div class="bg-brand-600 h-2.5 rounded-full transition-all duration-1000" style="width: ${percent}%"></div>
                            </div>
                            <div class="flex justify-between text-xs text-gray-500 font-medium dark:text-gray-400">
                                <span>Tiến độ</span>
                                <span>${learnedCount}/${total} từ (${percent}%)</span>
                            </div>
                        </div>
                    `;
                    container.appendChild(el);
                });
            },

            // --- Flashcard Logic (Tinder Swipe) ---
            startFlashcards() {
                const topic = this.data[this.state.currentTopicIndex];
                this.state.flashcardQueue = [...topic.words].sort(() => 0.5 - Math.random());
                this.state.currentCardIndex = 0;

                this.hideAllViews();
                document.getElementById('view-flashcard').classList.remove('hidden');
                document.getElementById('fc-complete-msg').classList.add('hidden');
                
                // Show Card & Controls
                document.querySelector('.perspective-1000').classList.remove('hidden');
                document.querySelector('.perspective-1000').nextElementSibling.classList.remove('hidden'); 

                this.renderCard();
                this.initSwipeListeners();
            },

            renderCard() {
                const queue = this.state.flashcardQueue;
                if (this.state.currentCardIndex >= queue.length) {
                    // Finished
                    document.querySelector('.perspective-1000').classList.add('hidden');
                    document.querySelector('.perspective-1000').nextElementSibling.classList.add('hidden'); // Hide controls
                    document.getElementById('fc-complete-msg').classList.remove('hidden');
                    return;
                }

                const word = queue[this.state.currentCardIndex];
                const cardInner = document.getElementById('flashcard-inner');
                const cardEl = document.getElementById('flashcard-swipe');
                
                // Reset Styles
                cardInner.classList.remove('rotate-y-180');
                cardEl.style.transform = '';
                cardEl.classList.remove('is-animating');
                
                // Hide Badges
                document.getElementById('swipe-like').style.opacity = '0';
                document.getElementById('swipe-nope').style.opacity = '0';

                // Update content
                document.getElementById('fc-front').innerText = word.en;
                
                const pronEl = document.getElementById('fc-pronunciation');
                const backPronEl = document.getElementById('fc-back-pron');
                
                if (word.pron && word.pron.trim() !== "") {
                    pronEl.innerText = word.pron;
                    pronEl.classList.remove('hidden');
                    backPronEl.innerText = word.pron;
                    backPronEl.classList.remove('hidden');
                } else {
                    pronEl.classList.add('hidden');
                    backPronEl.classList.add('hidden');
                }
                
                // Back Side fields
                document.getElementById('fc-back-en').innerText = word.en;
                document.getElementById('fc-back').innerText = word.vi;
                
                document.getElementById('fc-progress').innerText = `${this.state.currentCardIndex + 1}/${queue.length}`;
            },

            flipCard() {
                document.getElementById('flashcard-inner').classList.toggle('rotate-y-180');
            },
            
            resetCardPosition() {
                 const cardEl = document.getElementById('flashcard-swipe');
                 cardEl.classList.add('is-animating');
                 cardEl.style.transform = 'translate(0px, 0px) rotate(0deg)';
                 document.getElementById('swipe-like').style.opacity = '0';
                 document.getElementById('swipe-nope').style.opacity = '0';
            },

            markCard(isLearned) {
                const topicId = this.data[this.state.currentTopicIndex].id;
                const currentWord = this.state.flashcardQueue[this.state.currentCardIndex];
                const learnedList = this.state.learnedWords[topicId] || [];

                if (isLearned) {
                    if (!learnedList.includes(currentWord.en)) {
                        learnedList.push(currentWord.en);
                        this.state.learnedWords[topicId] = learnedList;
                        this.saveProgress();
                    }
                } 
                
                // Wait for animation to finish before rendering next
                setTimeout(() => {
                    this.state.currentCardIndex++;
                    this.renderCard();
                }, 300);
            },

            triggerSwipe(direction) {
                const cardEl = document.getElementById('flashcard-swipe');
                cardEl.classList.add('is-animating');
                const screenWidth = window.innerWidth;
                
                if (direction === 'right') {
                   cardEl.style.transform = `translate(${screenWidth + 100}px, 50px) rotate(30deg)`;
                   this.markCard(true);
                } else {
                   cardEl.style.transform = `translate(-${screenWidth + 100}px, 50px) rotate(-30deg)`;
                   this.markCard(false);
                }
            },

            initSwipeListeners() {
                const card = document.getElementById('flashcard-swipe');
                if(card.dataset.listenerAdded) return;
                
                let startX, moveX, isDragging = false;

                // Mouse Events
                card.addEventListener('mousedown', (e) => {
                    if(e.target.closest('button')) return; // Ignore if clicking play audio but we have event stopPropagation there
                    isDragging = true;
                    startX = e.clientX;
                    card.classList.remove('is-animating');
                });
                
                // Touch Events
                card.addEventListener('touchstart', (e) => {
                    if(e.target.closest('button')) return;
                    isDragging = true;
                    startX = e.touches[0].clientX;
                    card.classList.remove('is-animating');
                });

                const handleMove = (x) => {
                    if (!isDragging) return;
                    moveX = x - startX;
                    const rotate = moveX / 15;
                    card.style.transform = `translate(${moveX}px, 0) rotate(${rotate}deg)`;

                    // Show Hints
                    if (moveX > 0) {
                        document.getElementById('swipe-like').style.opacity = Math.min(moveX / 100, 1);
                        document.getElementById('swipe-nope').style.opacity = 0;
                    } else {
                        document.getElementById('swipe-nope').style.opacity = Math.min(Math.abs(moveX) / 100, 1);
                        document.getElementById('swipe-like').style.opacity = 0;
                    }
                };

                const handleEnd = () => {
                   if (!isDragging) return;
                   isDragging = false;
                   const threshold = 100;
                   
                   if (Math.abs(moveX) > threshold) {
                       this.triggerSwipe(moveX > 0 ? 'right' : 'left');
                   } else {
                       this.resetCardPosition();
                   }
                   moveX = 0;
                };

                window.addEventListener('mousemove', (e) => handleMove(e.clientX));
                window.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX));
                window.addEventListener('mouseup', handleEnd);
                window.addEventListener('touchend', handleEnd);
                
                card.dataset.listenerAdded = 'true';
            },

            playAudio() {
                const word = this.state.flashcardQueue[this.state.currentCardIndex];
                if (!word) return;
                
                const utterance = new SpeechSynthesisUtterance(word.en);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;
                speechSynthesis.speak(utterance);
            },

            // --- Quiz Logic ---
            startQuiz() {
                const topic = this.data[this.state.currentTopicIndex];
                this.state.quizQueue = [...topic.words].sort(() => 0.5 - Math.random());
                this.state.currentCardIndex = 0; // reusing generic index
                this.state.quizScore = 0;

                this.hideAllViews();
                document.getElementById('view-quiz').classList.remove('hidden');
                document.getElementById('quiz-container').classList.remove('hidden');
                document.getElementById('quiz-result').classList.add('hidden');
                document.getElementById('quiz-score').innerText = '0';

                this.renderQuizQuestion();
            },

            renderQuizQuestion() {
                const queue = this.state.quizQueue;
                if (this.state.currentCardIndex >= queue.length) {
                   this.finishQuiz();
                   return;
                }

                const correctWord = queue[this.state.currentCardIndex];
                const topic = this.data[this.state.currentTopicIndex];

                // Pick 3 wrong answers
                const allOtherWords = topic.words.filter(w => w.en !== correctWord.en);
                const wrongOptions = allOtherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
                
                let options = [...wrongOptions, correctWord];
                options.sort(() => 0.5 - Math.random()); // Shuffle options

                // Render UI
                document.getElementById('quiz-question').innerText = correctWord.en;
                document.getElementById('quiz-feedback').style.opacity = '0';
                document.getElementById('quiz-next-btn').classList.add('hidden');

                const optionInfo = document.getElementById('quiz-options');
                optionInfo.innerHTML = '';

                options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = `w-full p-4 text-left border-2 border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition font-medium text-gray-700`;
                    btn.innerText = opt.vi;
                    btn.onclick = (e) => this.handleQuizAnswer(opt.en, correctWord.en, e.target);
                    optionInfo.appendChild(btn);
                });
            },

            handleQuizAnswer(selectedEn, correctEn, btnElement) {
                // Disable all buttons
                const buttons = document.querySelectorAll('#quiz-options button');
                buttons.forEach(btn => btn.disabled = true);

                const feedback = document.getElementById('quiz-feedback');
                feedback.style.opacity = '1';

                if (selectedEn === correctEn) {
                    btnElement.classList.add('bg-green-100', 'border-green-500', 'text-green-700');
                    btnElement.innerHTML += ' <i class="fa-solid fa-check float-right mt-1"></i>';
                    this.state.quizScore += 10;
                    document.getElementById('quiz-score').innerText = this.state.quizScore;
                    feedback.innerText = "Chính xác! 🎉";
                    feedback.className = "mt-4 text-center h-8 font-bold text-lg text-green-600";
                    // Audio feedback
                    const utterance = new SpeechSynthesisUtterance("Correct");
                    utterance.lang = 'en-US';
                    speechSynthesis.speak(utterance);
                } else {
                    btnElement.classList.add('bg-red-100', 'border-red-500', 'text-red-700');
                    // Find correct one to highlight
                    buttons.forEach(btn => {
                        if(btn.innerText.includes(this.data[this.state.currentTopicIndex].words.find(w => w.en === correctEn).vi)) {
                            btn.classList.add('bg-green-50', 'border-green-300');
                        }
                    });
                    feedback.innerText = "Sai rồi! 😢";
                    feedback.className = "mt-4 text-center h-8 font-bold text-lg text-red-600";
                }

                document.getElementById('quiz-next-btn').classList.remove('hidden');
            },

            nextQuiz() {
                this.state.currentCardIndex++;
                this.renderQuizQuestion();
            },

            finishQuiz() {
                document.getElementById('quiz-container').classList.add('hidden');
                document.getElementById('quiz-result').classList.remove('hidden');
                document.getElementById('quiz-final-score').innerText = this.state.quizScore + " Points";
            },

            // --- Game Logic ---
            startGame() {
                const topic = this.data[this.state.currentTopicIndex];
                const dataset = [...topic.words].sort(() => 0.5 - Math.random()).slice(0, 6);
                
                let deck = [];
                dataset.forEach(w => {
                    deck.push({ id: w.en, content: w.en, type: 'en' });
                    deck.push({ id: w.en, content: w.vi, type: 'vi' });
                });
                
                this.state.gameCards = deck.sort(() => 0.5 - Math.random());
                this.state.gameSelected = [];
                this.state.gameMatches = 0;
                
                this.hideAllViews();
                document.getElementById('view-game').classList.remove('hidden');
                document.getElementById('game-win').classList.add('hidden');
                document.getElementById('game-left').innerText = dataset.length;

                this.renderGameGrid();
            },

            renderGameGrid() {
                const grid = document.getElementById('game-grid');
                grid.innerHTML = '';
                
                this.state.gameCards.forEach((card, idx) => {
                    const el = document.createElement('div');
                    // "game-card" is the container. 
                    // "h-24 sm:h-32" ensures responsiveness.
                    el.className = `game-card relative h-24 sm:h-32 cursor-pointer select-none perspective-1000`;
                    el.dataset.idx = idx;
                    el.onclick = () => this.handleCardClick(idx, el);
                    
                    // 3D Inner Container
                    el.innerHTML = `
                        <div class="game-card-inner w-full h-full relative shadow-sm rounded-xl border-2 border-brand-100 bg-white hover:shadow-md transition">
                            <!-- Front (Face Down) -->
                            <div class="front absolute w-full h-full backface-hidden flex items-center justify-center rounded-xl bg-white">
                                <i class="fa-solid fa-question text-brand-200 text-2xl"></i>
                            </div>
                            <!-- Back (Face Up) -->
                            <div class="back absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center rounded-xl bg-brand-50 border-2 border-brand-500 px-2 text-center overflow-hidden">
                                <span class="font-bold text-brand-700 text-xs sm:text-sm break-words leading-tight">${card.content}</span>
                            </div>
                        </div>
                    `;
                    
                    grid.appendChild(el);
                });
            },

            handleCardClick(idx, element) {
                // Ignore if matched, already flipped, or 2 cards already active
                if (element.classList.contains('matched') || 
                    element.classList.contains('flipped') ||
                    this.state.gameSelected.length === 2) return;

                const cardData = this.state.gameCards[idx];

                // Flip it
                element.classList.add('flipped');
                
                this.state.gameSelected.push({ idx, id: cardData.id, el: element });

                if (this.state.gameSelected.length === 2) {
                    this.checkMatch();
                }
            },

            checkMatch() {
                const [first, second] = this.state.gameSelected;
                
                if (first.id === second.id) {
                    // Macth!
                    this.state.gameMatches++;
                    document.getElementById('game-left').innerText = (this.state.gameCards.length / 2) - this.state.gameMatches;
                    
                    setTimeout(() => {
                        // Mark as matched (pop out effect)
                        first.el.classList.add('matched');
                        second.el.classList.add('matched');
                        
                        // Check Win
                        if (this.state.gameMatches === this.state.gameCards.length / 2) {
                            document.getElementById('game-win').classList.remove('hidden');
                        }
                    }, 600);
                    
                    this.state.gameSelected = [];
                } else {
                    // No match
                    setTimeout(() => {
                        // Flip back
                        first.el.classList.remove('flipped');
                        second.el.classList.remove('flipped');
                        this.state.gameSelected = [];
                    }, 1000);
                }
            },

            // --- Spelling Bee Logic ---
            startSpellingBee() {
                const topic = this.data[this.state.currentTopicIndex];
                this.state.spellingQueue = [...topic.words].sort(() => 0.5 - Math.random());
                this.state.currentSpellingIndex = 0;
                this.state.spellingScore = 0;

                this.hideAllViews();
                document.getElementById('view-spelling').classList.remove('hidden');
                document.getElementById('spelling-score').innerText = '0';
                
                this.renderSpelling();
            },

            renderSpelling() {
                const queue = this.state.spellingQueue;
                if (this.state.currentSpellingIndex >= queue.length) {
                    alert(`Hoàn thành! Điểm của bạn: ${this.state.spellingScore}`);
                    this.showActions();
                    return;
                }

                const wordObj = queue[this.state.currentSpellingIndex];
                const cleanWord = wordObj.en.trim();
                
                document.getElementById('spelling-meaning').innerText = wordObj.vi;
                document.getElementById('spelling-feedback').innerText = '';
                document.getElementById('btn-next-spelling').classList.add('hidden');
                
                const container = document.getElementById('spelling-input-container');
                container.innerHTML = '';
                
                // Hint: Show first 2 characters?
                // Only if word length > 2
                const hintCount = cleanWord.length > 3 ? 2 : (cleanWord.length > 1 ? 1 : 0);
                const hintText = cleanWord.substring(0, hintCount);
                document.getElementById('spelling-hint').innerText = hintCount > 0 ? `Gợi ý: ${hintText}...` : '';

                // Create inputs per character
                for (let i = 0; i < cleanWord.length; i++) {
                    const char = cleanWord[i];
                    if (char === ' ') {
                        // Space separator
                        const space = document.createElement('div');
                        space.className = "w-4 h-12 flex items-center justify-center";
                        container.appendChild(space);
                    } else {
                        const input = document.createElement('input');
                        input.type = "text";
                        input.maxLength = 1;
                        input.className = "w-10 h-14 border-2 border-gray-300 rounded-lg text-center text-xl font-bold uppercase focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none m-1";
                        input.dataset.index = i;
                        
                        // Auto focus next logic
                        input.oninput = (e) => {
                            if (e.target.value.length === 1) {
                                let next = input.nextElementSibling;
                                while(next && next.tagName !== 'INPUT') {
                                    next = next.nextElementSibling;
                                }
                                if (next) next.focus();
                            }
                        };
                        input.onkeydown = (e) => {
                            if (e.key === 'Backspace' && e.target.value === '') {
                                let prev = input.previousElementSibling;
                                while(prev && prev.tagName !== 'INPUT') {
                                    prev = prev.previousElementSibling;
                                }
                                if (prev) prev.focus();
                            }
                            if (e.key === ' ') {
                                e.preventDefault();
                                let next = input.nextElementSibling;
                                while(next && next.tagName !== 'INPUT') {
                                    next = next.nextElementSibling;
                                }
                                if (next) next.focus();
                            }
                        };

                        container.appendChild(input);
                    }
                }
                
                // Focus first
                const first = container.querySelector('input');
                if (first) first.focus();
            },

            checkSpelling() {
                const wordObj = this.state.spellingQueue[this.state.currentSpellingIndex];
                const cleanWord = wordObj.en.trim().toLowerCase();
                
                const inputs = document.querySelectorAll('#spelling-input-container input');
                let userWord = "";
                let inputIndex = 0;
                
                for(let i=0; i<cleanWord.length; i++) {
                     if (cleanWord[i] === ' ') {
                         userWord += " ";
                     } else {
                         userWord += inputs[inputIndex].value.toLowerCase();
                         inputIndex++;
                     }
                }

                const feedback = document.getElementById('spelling-feedback');
                
                if (userWord === cleanWord) {
                    feedback.innerText = "Chính xác! +10 điểm";
                    feedback.className = "h-8 font-bold mt-2 text-green-600";
                    this.state.spellingScore += 10;
                    document.getElementById('spelling-score').innerText = this.state.spellingScore;
                    document.getElementById('btn-next-spelling').classList.remove('hidden');
                    
                    // Lock inputs
                    inputs.forEach(inp => {
                        inp.classList.add('bg-green-100', 'border-green-500');
                        inp.disabled = true;
                    });
                } else {
                    feedback.innerText = "Chưa đúng, thử lại nhé!";
                    feedback.className = "h-8 font-bold mt-2 text-red-500";
                    // Highlight wrong
                    inputs.forEach(inp => inp.classList.add('border-red-300'));
                }
            },

            nextSpelling() {
                this.state.currentSpellingIndex++;
                this.renderSpelling();
            }
        };

        // Initialize App on Load
        window.addEventListener('DOMContentLoaded', () => {
            app.init();
        });
