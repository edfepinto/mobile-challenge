import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { t } from "~/shared/intl/translator";
import { Carousel } from "~/main/components/carousel.component";

export function HomeScreen() {
  const [data] = React.useState([
    {
      title: "Chain Reaction",
      description:
        "Nullam molestie nibh in lectus. Pellentesque at nulla",
      date: "17/08/2022",
      local: "8 Eastlawn Junction",
      ticketsLimit: 1,
      organizer: "Klaus Lumsdall",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Shows e eventos",
    },
    {
      title:
        "Old Lady Who Walked in the Sea",
      description: "In hac habitasse platea dictumst.",
      date: "10/10/2022",
      local: "26 Warrior Hill",
      ticketsLimit: 2,
      organizer: "Rosetta Grimsell",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "Fracture",
      description:
        "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      date: "16/05/2022",
      local: "39 Dapin Circle",
      ticketsLimit: 3,
      organizer: "Jordanna Claydon",
      banner: "http://dummyimage.com/500x500.png/dddddd/000000",
      category: "Shows e eventos",
    },
    {
      title: "Die Weihnachtsklempner",
      description:
        "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      date: "02/06/2022",
      local: "4567 Reindahl Avenue",
      ticketsLimit: 4,
      organizer: "Garland Arnal",
      banner: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "Sympathy for Delicious",
      description:
        "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      date: "08/06/2022",
      local: "76197 Crest Line Avenue",
      ticketsLimit: 5,
      organizer: "Kermie Ollarenshaw",
      banner: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      category: "Shows e eventos Ing",
    },
    {
      title: "El Lobo",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      date: "05/10/2022",
      local: "5906 Del Sol Terrace",
      ticketsLimit: 6,
      organizer: "Wat Pender",
      banner: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "My Geisha",
      description: "Nullam molestie nibh in lectus.",
      date: "27/11/2022",
      local: "53 Tennessee Drive",
      ticketsLimit: 7,
      organizer: "Amalea Branthwaite",
      banner: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "King Lear (Korol Lir)",
      description:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      date: "06/07/2022",
      local: "191 Melby Lane",
      ticketsLimit: 8,
      organizer: "Jelene Sobczak",
      banner: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "Le ultime ore di una vergine",
      description:
        "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      date: "19/09/2022",
      local: "688 Dapin Terrace",
      ticketsLimit: 9,
      organizer: "Rob Vedyaev",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "House by the Cemetery",
      description:
        "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      date: "02/07/2022",
      local: "1858 Forest Road",
      ticketsLimit: 10,
      organizer: "Thebault Briant",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Shows e eventos",
    },
    {
      title: "Secret of Roan Inish, The",
      description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
      date: "02/09/2022",
      local: "16145 Loomis Street",
      ticketsLimit: 11,
      organizer: "Diego Giddens",
      banner: "http://dummyimage.com/500x500.png/dddddd/000000",
      category: "Shows e eventos",
    },
    {
      title: "Helen",
      description: "Fusce consequat. Nulla nisl.",
      date: "13/08/2022",
      local: "5465 Dayton Trail",
      ticketsLimit: 12,
      organizer: "Stacey Mansion",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Queen Margot (Reine Margot, La)",
      description: "Curabitur gravida nisi at nibh.",
      date: "25/04/2022",
      local: "129 Jana Road",
      ticketsLimit: 13,
      organizer: "Major Tott",
      banner: "http://dummyimage.com/500x500.png/dddddd/000000",
      category: "Congresso e palestras",
    },
    {
      title: "Johnny Mnemonic",
      description:
        "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
      date: "30/09/2022",
      local: "172 Cody Way",
      ticketsLimit: 14,
      organizer: "Levy Plunkett",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Redirected",
      description:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      date: "31/10/2022",
      local: "24037 Drewry Trail",
      ticketsLimit: 15,
      organizer: "Raimund Birckmann",
      banner: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Big Squeeze, The",
      description:
        "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
      date: "24/07/2022",
      local: "142 7th Trail",
      ticketsLimit: 16,
      organizer: "Bennett Cockrem",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Extremely Loud and Incredibly Close",
      description:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
      date: "29/08/2022",
      local: "290 Chinook Trail",
      ticketsLimit: 17,
      organizer: "Jemmy Grise",
      banner: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Sombre",
      description:
        "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
      date: "10/08/2022",
      local: "04 Nelson Junction",
      ticketsLimit: 18,
      organizer: "Tamera Upwood",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Something Wicked This Way Comes",
      description:
        "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      date: "06/10/2022",
      local: "81883 Center Place",
      ticketsLimit: 19,
      organizer: "Shantee Dibdale",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Congresso e palestras",
    },
    {
      title: "Slim Carter",
      description: "Morbi porttitor lorem id ligula.",
      date: "15/05/2022",
      local: "7036 Ohio Street",
      ticketsLimit: 20,
      organizer: "Merilee Le Leu",
      banner: "http://dummyimage.com/500x500.png/dddddd/000000",
      category: "Passeios e tours",
    },
    {
      title: "Big Trouble",
      description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      date: "25/02/2022",
      local: "5296 Gateway Pass",
      ticketsLimit: 21,
      organizer: "Phylys Spellecy",
      banner: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      category: "Passeios e tours",
    },
    {
      title: "Childhood of Maxim Gorky, The (Detstvo Gorkogo)",
      description:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
      date: "08/04/2022",
      local: "2 Eagle Crest Pass",
      ticketsLimit: 22,
      organizer: "Les Rodders",
      banner: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
      category: "Passeios e tours Ing",
    },
    {
      title: "When Nietzsche Wept",
      description:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      date: "09/09/2022",
      local: "4 Monument Court",
      ticketsLimit: 23,
      organizer: "Eba Wansbury",
      banner: "http://dummyimage.com/500x500.png/ff4444/ffffff",
      category: "Passeios e tours",
    },
    {
      title: "The Gardener",
      description:
        "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      date: "28/01/2022",
      local: "981 Mesta Park",
      ticketsLimit: 24,
      organizer: "Rance Willerson",
      banner: "http://dummyimage.com/500x500.png/cc0000/ffffff",
      category: "Passeios e tours",
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
      }}
    >
      <Carousel data={data.filter(card => card.category === "Shows e eventos")} category={"Shows e eventos"} />
      <Carousel data={data.filter(card => card.category === "Passeios e tours")} category={"Passeios e tours"} />
    </View>
  );
}
