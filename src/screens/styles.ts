import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  homebar: {
    marginHorizontal: 12,
    marginTop: 12,
    position: 'relative',
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontFamily: 'arial',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    color: 'gray',
    // backgroundColor: '#c8dbeb',
    // marginHorizontal: 15,
  },
  cartCount: {
    position: 'absolute',
    right: -6,
    top: -6,
    width: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    zIndex: 999,
  },
  cartnumber: {
    fontFamily: 'regular',
    fontWeight: 600,
    fontSize: 12,
    color: 'white',
  },

  // homepage styles

  homecont: {
    width: '100%',
  },

  // wellcome styles
  wellcontainer: {
    paddingHorizontal: 10,
  },
  wellcometext: {
    fontSize: 28,
    fontFamily: 'arial',
    fontWeight: 700,
    marginTop: 10,
  },
  wellcometext2: {
    fontSize: 24,
    fontFamily: 'arial',
    fontWeight: 700,
    marginTop: 5,
    color: '#254446',
  },
  searchcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfecf7',
    borderRadius: 15,
    marginVertical: 15,
    height: 45,
  },
  searchicon: {
    marginHorizontal: 10,
    color: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchwrapper: {
    flex: 1,
    backgroundColor: '#cfecf7',
    marginRight: 10,
    borderRadius: 10,
  },
  searchinput: {
    fontFamily: 'arial',
    width: '100%',
    height: '100%',
  },
  searchbtn: {
    width: 40,
    height: '100%',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#254446',
    color: 'white',
  },
  searchicons: {
    color: 'gray',
  },
  camicons: {
    color: 'white',
  },
  Caroseal: {
    flex: 1,
    alignItems: 'center',
  },

  // header styles
  headingcontainer: {
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headertext: {
    fontWeight: 700,
    fontSize: 18,
  },
  prrwacontainer: {
    marginTop: 20,
  },

  strcont: {
    width: 162,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#d3e7f8',
  },
  imgcontainer: {
    flex: 1,
    width: '90%',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
    overflow: 'scroll',
    padding: 5,
  },
  imgstyle: {
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  prodeatils: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    fontWeight: 800,
    fontSize: 18,
    marginBottom: 3,
  },
  supplier: {
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 3,
    color: 'gray',
  },
  price: {
    fontWeight: 800,
    fontSize: 10,
    marginBottom: 2,
    color: 'gray',
  },
  addbtn: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  prrwacontainer: {
    marginTop: 10,
    marginLeft: 12,
  },
  prodeatilscontainer: {
    flex: 1,
  },
  // upperrow: {
  //   marginHorizontal: 20,
  //   flexDirection: 'row',
  //   position: 'absolute',
  //   top: 0,
  //   zIndex: 99,
  //   justifyContent: 'space-between', // Centers items horizontally
  // },
  prodectimg: {
    width: '100%',
    height: '50%',
  },
  details: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titlerow: {
    marginHorizontal: 10,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
  },
  producttitle: {
    fontWeight: 700,
    fontSize: 20,
  },
  pricetitle: {
    padding: 8,
    fontWeight: 800,
    fontSize: 15,
  },
  pricewrapper: {
    backgroundColor: '#deedf7',
    borderRadius: 20,
  },
  rotinrow: {
    marginHorizontal: 10,
    paddingBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5,
  },
  rating: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 3,
  },
  ratingtext: {
    color: 'gray',
    fontWeight: 700,
    paddingHorizontal: 6,
  },
  descrptions: {
    marginTop: 40,
    marginHorizontal: 12,
  },
  description: {
    fontWeight: 700,
    fontSize: 18,
  },
  descriptiontxt: {
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 22,
    marginVertical: 10,
    marginHorizontal: 5,
    color: 'gray',
  },
  locatio: {
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#deedf7',
  },
  cartrow: {
    // marginHorizontal: 10,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 10,
  },
  cartbtn: {
    backgroundColor: '#254446',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 10,
    marginLeft: 10,
  },
  cartrowbtn: {
    flexDirection: 'row',
    columnGap: 60,
    alignItems: 'center',
  },
  carttext: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
  },
  ddtocartbtn: {
    width: 40,
    backgroundColor: '#254446',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //  .dots {
  //   display: flex;
  // }

  // .dots div {
  //   height: 12px;
  //   width: 12px;
  //   border-radius: 50%;
  //   margin: 0 5px;
  //   background-color: #462ab8;
  //   animation: bounce 1s infinite alternate;
  // }

  // @keyframes bounce {
  //   to {
  //     opacity: 0.2;
  //     transform: translateY(-10px);
  //   }
  // }

  // .dots div:nth-child(2) {
  //   animation-delay: 0.3s;
  // }

  // .dots div:nth-child(3) {
  //   animation-delay: 0.6s;
  // }
  newarrivalcontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  upperrow: {
    flexDirection: 'row',
    width: '93%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    backgroundColor: '#254446',
    borderRadius: 30,
    top: 20,
    zIndex: 100,
  },
  headingtxt: {
    fontSize: 20,
    fontWeight: 400,
    color: '#ccc',
    marginHorizontal: 6,
  },
  productlistcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  prodlistdatacontainer: {
    alignItems: 'center',
    paddingTop: '18%',
    paddingLeft: 5,
    rowGap: 20,
  },
  flatlistcarts: {
    gap: 10,
  },
  supperator: {
    height: 15,
  },

  // single product

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discount: {
    fontSize: 14,
    color: '#FF5722',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingText: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 14,
  },
  deliveryText: {
    fontSize: 14,
    color: 'gray',
  },
  weight: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
  },
  addToCartButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // your orders pade styles ✅ Styles

  orderdspage: {
    marginHorizontal: 10,
    marginVertical: 6,
  },
  orders: {
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: '#ededed',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  headers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  pricevalue: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '600',
  },
  orderdel: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
  },
  header: {
    fontSize: 14,
    fontWeight: '700',
    marginVertical: 6,
  },
  pageHeader: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
  },
  pageHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 24,
  },
  reorderSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ededed',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 8,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  featureContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 15,
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    minWidth: 120,
    borderWidth: 1,
    borderColor: '#ededed',
    marginTop: 10,
  },
  featureImage: {
    width: 80,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 11,
    textAlign: 'center',
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ffbdbd',
    borderRadius: 8,
  },
  countButtonLeft: {
    backgroundColor: '#ffbdbd',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  countButtonRight: {
    backgroundColor: '#ccffcf',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  addButton: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  countText: {
    fontSize: 11,
    color: 'red',
  },
  cartbtns: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // pagenatation
  pagenatation: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
