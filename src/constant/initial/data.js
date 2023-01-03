export const branches = [
    {
        id: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        nameEn: 'siam paragon',
        nameTh: 'สยามพารากอน',
    },
    {
        id: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        nameEn: 'central world',
        nameTh: 'เซ็นทรัลเวิร์ล'
    },
];

export const theatres = [
    // branch siam paragon
    {
        id: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        name: 'Theatre 1',
    },
    {
        id: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        name: 'Theatre 2',
    },
    {
        id: '9643748a-5535-488a-91c7-98ac61a7ad61',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        name: 'Theatre 3',
    },

    // branch central world
    {
        id: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        name: 'Theatre 1'
    },
    {
        id: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        name: 'Theatre 2'
    },
    {
        id: '80590836-34b8-4ec1-a566-5e948bd75427',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        name: 'Theatre 3'
    },
    {
        id: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        name: 'Theatre 4'
    },
];

export const seats = [
    // branch siam paragon
    // theatre 1
    {
        id: '99d65a93-0969-4c68-86b9-5be337d33aee',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        row: 'A',
        col: '1',
    },
    {
        id: '282e14cf-b48f-4ad9-8d9b-f366c9df8fb0',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        row: 'A',
        col: '2',
    },
    {
        id: '12432604-bc94-48ce-bbeb-4310afe3a583',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        row: 'A',
        col: '3',
    },
    {
        id: '8d2358b4-7123-48c3-9075-8ef4cf724fa3',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        row: 'B',
        col: '1',
    },
    {
        id: '3950a895-526a-4072-a4c1-cfdd82df3363',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        row: 'B',
        col: '2',
    },
    {
        id: '81c8337e-928d-4982-ac1b-a5f1e97307d0',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        row: 'B',
        col: '3',
    },

    // theatre 2
    {
        id: 'd9f7c8a1-5d0f-404d-b552-9fbd72ca403f',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        row: 'A',
        col: '1',
    },
    {
        id: 'c1293482-2a04-4b69-8af1-09f75e0350a9',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        row: 'A',
        col: '2',
    },
    {
        id: '348e6d75-44b8-4bce-8fdf-597f4b85b6fc',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        row: 'A',
        col: '3',
    },
    {
        id: 'e20112bb-5c48-418e-844a-477490658999',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        row: 'A',
        col: '4',
    },
    {
        id: '6402c4b0-71c9-42dc-bf3f-e201e853a5e8',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        row: 'A',
        col: '5',
    },

    // theatre 3
    {
        id: '75188656-07e9-4f3d-bb5c-21d35a58ff41',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9643748a-5535-488a-91c7-98ac61a7ad61',
        row: 'A',
        col: '1',
    },
    {
        id: 'de1260c2-ed2a-49cf-9881-3ff3f4b36300',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9643748a-5535-488a-91c7-98ac61a7ad61',
        row: 'A',
        col: '2',
    },
    {
        id: 'd1f33f91-dd65-49f6-a314-9d6cd7d6a8cd',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9643748a-5535-488a-91c7-98ac61a7ad61',
        row: 'B',
        col: '1',
    },
    {
        id: '73bdfbb3-5648-4b2d-a7f4-00a748845a2b',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9643748a-5535-488a-91c7-98ac61a7ad61',
        row: 'B',
        col: '2',
    },

    // branch central world
    // theatre 1
    {
        id: '638fa653-e612-43a6-b858-d15169a69ac8',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'A',
        col: '1',
    },
    {
        id: '63531c9c-b319-4abf-a374-df210938b3fd',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'A',
        col: '2',
    },
    {
        id: '90470235-cd77-40ec-ae8b-bd1a7fad65cc',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'A',
        col: '3',
    },
    {
        id: '0fce2149-5ee2-4719-9f15-154b3fb57d61',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'B',
        col: '1',
    },
    {
        id: '8f07c40b-2a3f-451d-b77e-74789bcd5cfb',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'B',
        col: '2',
    },
    {
        id: '060b1965-0cee-4ba5-b28d-a91c3185a9d4',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'B',
        col: '3',
    },
    {
        id: '55a1636a-d54d-4e71-bba6-88e45175cd62',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'C',
        col: '1',
    },
    {
        id: 'c309f146-0fdf-4146-ab38-ad1c96cf7112',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'C',
        col: '2',
    },
    {
        id: '786ef865-f315-43e0-ab64-cadf854bc5c4',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        row: 'C',
        col: '3',
    },

    // theatre 2
    {
        id: '6e63a5ee-c1f9-4399-919f-de0d8108de99',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        row: 'A',
        col: '1',
    },
    {
        id: '65679bbb-deb7-4647-a9da-3347fb7be3d2',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        row: 'A',
        col: '2',
    },
    {
        id: 'd6689abf-a84b-4e08-85f1-68883f126740',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        row: 'AA',
        col: '1',
    },
    {
        id: 'a1979471-1201-4515-80bb-8208852afc28',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        row: 'AA',
        col: '2',
    },
    {
        id: '61d7911a-9a7a-4a26-9d41-30c57d2d03f6',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        row: 'AA',
        col: '3',
    },

    // theatre 3
    {
        id: '3e5746d9-1710-4b94-8825-bc143bb43282',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: '80590836-34b8-4ec1-a566-5e948bd75427',
        row: 'A',
        col: '0',
    },

    // theatre 4
    {
        id: '5a6357ce-8f21-4e88-9709-b597719f4ce6',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'A',
        col: '1',
    },
    {
        id: '3d3fc5b2-83e2-446f-84d5-a9d471c7cf5b',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'B',
        col: '1',
    },
    {
        id: '6f708cae-f1e8-4d40-ad8e-6d8193f4a793',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'B',
        col: '2',
    },
    {
        id: '67fe3c47-d65b-4803-93cf-04fef1a47d57',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'C',
        col: '1',
    },
    {
        id: '76604599-0548-4c02-b17c-c93d0dd897cc',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'C',
        col: '2',
    },
    {
        id: '4ff18605-de41-4613-9ede-36949e6bd57e',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'C',
        col: '3',
    },
    {
        id: '3c1fc967-8f8d-4e77-8739-f46499890f1e',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        row: 'D',
        col: '1',
    },
];

export const users = [
    {
        id: '467b0936-1f0e-4f5c-b08e-a955625b10a9',
        name: 'Techin Philardluck',
    },
    {
        id: '28266042-1081-4baf-b414-d4cec80d122f',
        name: 'Not Mr.Techin Philardluck',
    },
];

export const movies = [
    {
        id: "dora2021",
        nameTh: "โดราเอมอน เดอะ มูฟวี่ 2021",
        nameEn: "Doraemon The Movie 2021",
        type: "Animation",
        duration: 108,
        displayStatus: "showing",
        imageUrl: "https://cdn.majorcineplex.com/uploads/movie/3441/thumb_3441.jpg",
        descriptionEn: "One day, Nobita picks a small rocket from which a small-sized humanoid alien Papi comes out. He came from the planet named 'Pirika' to the Earth to escape from the PCIA army of his planet. At the very beginning, Doraemon and his friends were confused by the small size of Papi, but with the gadget Small Light, they became small and play together. However, the whale-shaped battleship, who chased Papi and came to the Earth, attacks Doraemon and Nobita to catch Papi. Papi blames himself for having involved everyone, but he tries to fight against the PCIA army. In order to protect Papi and his planet Pirika, Doraemon and his friends go to Pirika.",
        descriptionTh: "ภาพยนตร์ชุดนี้ถือเป็นการนำ โดราเอมอน ตอน สงครามอวกาศ จากปี 1985 (เมื่อ 37 ปีที่แล้ว) กลับมาสร้างใหม่อีกครั้ง ซึ่งภาพยนตร์ชุดรีเมคได้ห่างหายไปเป็นเวลา 6 ปี นับตั้งแต่ตอน โนบิตะกำเนิดญี่ปุ่น 2016 ออกเข้าฉายในโรงภาพยนตร์ และยังเป็นภาพยนตร์โดราเอมอนเรื่องแรกที่ได้ฉายในระบบเสียง ดอลบี แอทมอส (Dolby Atmos) ในประเทศญี่ปุ่นทั้งหมด 11 โรงภาพยนตร์ใน 10 จังหวัดทั่วประเทศญี่ปุ่น เรื่องราวนั้นจะดำเนินตามเรื่องราวเดิมในปี 1985 ในวันหนึ่ง โนบิตะได้ไปพบเจอกับยานอวกาศลำจิ๋วที่ข้างในมีมนุษย์อวกาศขนาดจิ๋วอยู่ด้วย นามว่า ปาปิ ซึ่งเดินทางมาจากดวงดาวที่มีชื่อว่า ปิริกะ เพราะหลบหนีกองทัพ PCIA (พีเซีย) ผู้แสนชั่วร้าย โดราเอมอนและผองเพื่อนจึงต้องช่วยเหลือปาปิให้กลับไปกอบกู้บ้านเมืองของเขาให้ได้ด้วยอุปกรณ์วิเศษนั่นเอง",
    },
    {
        id: "topgun",
        nameTh: "ท็อปกัน มาเวอริค",
        nameEn: "Top Gun Maverick",
        type: "Action",
        duration: 130,
        displayStatus: "showing",
        imageUrl: "https://cdn.majorcineplex.com/uploads/movie/2767/thumb_2767.jpg",
        descriptionEn: "",
        descriptionTh: "",
    },
    {
        id: "harrypotter",
        nameTh: "แฮร์รี่ พอตเตอร์ กับถ้วยอัคนี",
        nameEn: "Harry Potter and the Goblet of Fire",
        type: "Fantasy",
        duration: 157,
        displayStatus: "showing",
        imageUrl: "https://cdn.majorcineplex.com/uploads/movie/3493/thumb_3493.jpg",
        descriptionEn: "",
        descriptionTh: "",
    },
    {
        id: "blackadam",
        nameTh: "แบล็ก อดัม",
        nameEn: "BLACK ADAM",
        type: "Action",
        duration: 124,
        displayStatus: "coming-soon",
        imageUrl: "https://cdn.majorcineplex.com/uploads/movie/3085/thumb_3085.jpg",
        descriptionEn: "",
        descriptionTh: "",
    },
    {
        id: "wolfhunting",
        nameTh: "Project Wolf Hunting",
        nameEn: "Project Wolf Hunting",
        type: "Action",
        duration: 122,
        displayStatus: "coming-soon",
        imageUrl: "https://cdn.majorcineplex.com/uploads/movie/3594/thumb_3594.jpg",
        descriptionEn: "",
        descriptionTh: "",
    },
    {
        id: "omg",
        nameTh: "OMG! รักจังวะ..ผิดจังหวะ",
        nameEn: "OMG!",
        type: "Comedy",
        duration: 101,
        displayStatus: "coming-soon",
        imageUrl: "https://cdn.majorcineplex.com/uploads/movie/3485/thumb_3485.jpg",
        descriptionEn: "",
        descriptionTh: "",
    }
];

export const showtimes = [
    // branch siam paragon
    // Theatre 1
    {
        id: '0d336f6b-2e9c-4d07-8192-5b839a46ed86',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        movieId: 'dora2021',
        date: '2022-12-30',
        time: '14:00:00',
    },

    // Theatre 2
    {
        id: '96bb814f-e2f6-451d-83cb-13b3cf8aed47',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        movieId: 'dora2021',
        date: '2022-12-30',
        time: '20:00:00',
    },

    // Theatre 3
    {
        id: '6143fe08-004b-4815-abe1-65756ed395c1',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9643748a-5535-488a-91c7-98ac61a7ad61',
        movieId: 'dora2021',
        date: '2022-12-31',
        time: '22:30:00',
    },

    // branch central world
    // Theatre 1
    {
        id: 'ec17a0a7-9e80-4b44-a0b7-3cca2a38a915',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: '9a2ca5ef-64b6-45e4-8f7e-a0e054eaf972',
        movieId: 'dora2021',
        date: '2022-12-31',
        time: '13:00:00',
    },

    // Theatre 2
    {
        id: '4eaaedee-0d13-4ebf-953c-643b3a1a8ad4',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'f615ddf8-2dda-42b5-84ae-a1ed518fd6bd',
        movieId: 'dora2021',
        date: '2022-12-31',
        time: '14:00:00',
    },

    // Theatre 3
    {
        id: 'c282d788-9674-4bba-9317-cc22adcced4f',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: '80590836-34b8-4ec1-a566-5e948bd75427',
        movieId: 'dora2021',
        date: '2022-12-30',
        time: '10:30:00',
    },

    // Theatre 4
    {
        id: 'aec59298-3510-4fde-9666-6e93c14b5369',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        movieId: 'dora2021',
        date: '2022-12-31',
        time: '17:45:00',
    },
];

export const bookings = [
    // branch siam paragon
    // Theatre 2
    {
        id: 'f54b7815-9e41-4c14-a430-5a586a01b161',
        userId: '467b0936-1f0e-4f5c-b08e-a955625b10a9',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: 'd7c01b7e-14df-4f4f-ae2d-71bce9d076d3',
        showtimeId: '96bb814f-e2f6-451d-83cb-13b3cf8aed47',
        seatId: 'd9f7c8a1-5d0f-404d-b552-9fbd72ca403f',
    },

    // Theatre 3
    {
        id: 'c1a3bc0d-9744-44da-8715-579a72d17aea',
        userId: '28266042-1081-4baf-b414-d4cec80d122f',
        branchId: 'a5d72ae0-d811-42f3-8f67-412382cd67fc',
        theatreId: '9643748a-5535-488a-91c7-98ac61a7ad61',
        showtimeId: '6143fe08-004b-4815-abe1-65756ed395c1',
        seatId: '75188656-07e9-4f3d-bb5c-21d35a58ff41',
    },

    // branch central world
    // Theatre 1
    {
        id: 'aaacbb61-9c57-4dc8-9c68-3e05da62c93e',
        userId: '28266042-1081-4baf-b414-d4cec80d122f',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'ecf7605c-3015-4b2a-b543-e06e189b9c19',
        showtimeId: 'ec17a0a7-9e80-4b44-a0b7-3cca2a38a915',
        seatId: '638fa653-e612-43a6-b858-d15169a69ac8',
    },

    // Theatre 3
    {
        id: 'b153c865-02d7-4879-aafc-e975688088ff',
        userId: '467b0936-1f0e-4f5c-b08e-a955625b10a9',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: '80590836-34b8-4ec1-a566-5e948bd75427',
        showtimeId: 'c282d788-9674-4bba-9317-cc22adcced4f',
        seatId: '3e5746d9-1710-4b94-8825-bc143bb43282',
    },

    // Theatre 4
    {
        id: 'b8d4233f-bf79-42fb-9688-59e9a41340d7',
        userId: '28266042-1081-4baf-b414-d4cec80d122f',
        branchId: '35c91c3a-3935-4931-ba01-8b9551e3ed90',
        theatreId: 'fdef9342-62d6-4a77-86db-8a95c6cc98d2',
        showtimeId: 'aec59298-3510-4fde-9666-6e93c14b5369',
        seatId: '5a6357ce-8f21-4e88-9709-b597719f4ce6',
    },
];
