import { style } from 'typestyle';

const PerfilStyle = style({
  padding: '50px 0',
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  $nest: {
    '& .title': {
      fontFamily: 'GothamBold',
      $nest: {
        '& span': {
          fontFamily: 'GothamLight',
        },
      },
    },
    '& .message-input': {
      width: '80%',
      $nest: {
        '& label': {
          display: 'block',
          fontFamily: 'GothamBold',
          fontSize: '26px',
          margin: '20px 0',
        },
        '& textarea': {
          display: 'inline-block',
          fontFamily: 'GothamLight',
          fontSize: '20px',
          width: '100%',
          border: 'solid #242535 5px',
          height: '380px',
          marginBottom: '30px',
          textAlign: 'left',
          padding: '0 10px',
          outline: 'none',
        },
        '& button': {
          float: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '120px',
          backgroundColor: '#00EF8E',
          minWidth: '220px',
          border: 'none',
          padding: '20px 0',
          marginLeft: '20px',
          color: '#273F4F',
          fontFamily: 'GothamBold',
          fontSize: '16px',
          cursor: 'pointer',
          $nest: {
            '& img': {
              width: '20px',
              marginRight: '20px',
            },
          },
        },
      },
    },

    '& .account-info': {
      marginTop: '80px',
      width: '100%',
      $nest: {
        '& .wrapper': {
          display: 'flex',
          width: '100%',
          margin: 'auto',
          $nest: {
            '& .info': {
              width: '50%',
              marginLeft: '10%',
              $nest: {
                '& .small': {
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  margin: '10px 0',
                  width: '100%',
                  $nest: {
                    '& label': {
                      width: '100%',
                      display: 'block',
                      fontFamily: 'GothamBold',
                      fontSize: '21px',
                      margin: '10px 0',
                    },
                    '& .inputs': {
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '20px',
                    },
                    '& input': {
                      width: '30%',
                      border: 'solid black 2px',
                      height: '40px',
                      outline: 'none',
                      fontFamily: 'GothamLight',
                      paddingLeft: '10px',
                    },
                  },
                },
                '& .mid': {
                  margin: '10px 0',
                  display: 'inline-block',
                  width: '50%',
                  $nest: {
                    '& label': {
                      display: 'block',
                      fontFamily: 'GothamBold',
                      fontSize: '21px',
                      margin: '10px 0',
                    },
                    '& input': {
                      width: '90%',
                      border: 'solid black 2px',
                      height: '40px',
                      outline: 'none',
                      fontFamily: 'GothamLight',
                      paddingLeft: '10px',
                    },
                  },
                },
                '& .big': {
                  margin: '10px 0',
                  display: 'inline-block',
                  width: '100%',
                  $nest: {
                    '& label': {
                      display: 'block',
                      fontFamily: 'GothamBold',
                      fontSize: '21px',
                      margin: '10px 0',
                    },
                    '& input': {
                      width: '95%',
                      border: 'solid black 2px',
                      height: '40px',
                      outline: 'none',
                      fontFamily: 'GothamLight',
                      paddingLeft: '10px',
                    },
                  },
                },
                '& .checkout': {
                  fontFamily: 'GothamBold',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  $nest: {
                    '& label': {
                      fontSize: '18px',
                      margin: '5px 0',
                    },
                  },
                },
              },
            },
            '& .photo-container': {
              width: '50%',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              $nest: {
                '& .photo-wrapper': {
                  position: 'relative',
                  height: '90%',
                  width: '80%',
                  backgroundColor: '#FF7065',
                  $nest: {
                    '& .photo': {
                      position: 'absolute',
                      top: 35,
                      left: '-60px',
                      width: '100%',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    '& .danger-text': {
      color: 'red',
    },

    '& .seccion-title': {
      borderBottom: 'solid black 5px',
      width: '80%',
      margin: '40px auto',
      paddingBottom: '20px',
    },
    '& .seccion-title2': {
      textAlign: 'center',
      borderBottom: 'solid black 5px',
      width: '80%',
      margin: '80px auto',
      paddingBottom: '20px',
    },

    '& .currentProducts-container': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '80%',
      margin: '80px 0',
      boxSizing: 'border-box',
      overflow: 'hidden',
      overflowX: 'scroll',
    },

    '& .form': {
      width: '50%',
      $nest: {
        '& label': {
          fontFamily: 'GothamBold',
          fontSize: '21px',
          display: 'flex',
          flexDirection: 'column',
          margin: '10px 0',
          $nest: {
            '& input': {
              border: 'solid black 2px',
              height: '40px',
              outline: 'none',
              fontFamily: 'GothamLight',
              paddingLeft: '10px',
              margin: '10px 0',
            },
          },
        },
        '& .two-inputs': {
          display: 'flex',
          justifyContent: 'space-between',
          $nest: {
            '& label': {
              width: '48%',
            },
          },
        },

        '& .one-inputs': {
          $nest: {
            '& label': {
              width: '100%',
            },
          },
        },
        '& .checkout': {
          $nest: {
            '& label': {
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: '18px',
              $nest: {
                '& input': {
                  marginLeft: '10px',
                },
              },
            },
          },
        },

        '& .buttons-wrapper': {
          $nest: {
            '& button': {
              cursor: 'pointer',
              margin: '10px 0',
              backgroundColor: 'black',
              border: 'none',
              position: 'relative',
              fontFamily: 'GothamBold',
              fontSize: '20px',
              color: 'white',
              width: '100%',
              height: '50px',
              $nest: {
                '& img': {
                  position: 'absolute',
                  right: 30,
                  top: 5,
                  maxWidth: '30px',
                },
              },
            },

            '& .facebook': {
              backgroundColor: '#1677F0',
            },

            '& .google': {
              backgroundColor: '#DF4B38',
            },
          },
        },
        '& .info': {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          fontFamily: 'GothamLight',
          fontSize: '21px',
          margin: '20px 0',
          $nest: {
            '& .bold': {
              fontFamily: 'GothamBold',
            },
          },
        },
      },
    },
  },
});

export default PerfilStyle;
