import { style } from "typestyle";

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
                }
            }
        },
        '& .message-input': {
            width: '80%',
            $nest: {
                '& label': {
                    display: 'block',
                    fontFamily: 'GothamBold',
                    fontSize: '26px',
                    margin: '20px 0'
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
                    position: 'relative',
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
                          position: 'absolute',
                            width: '20px',
                            left: 25
                        }
                    }
                },
            }
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
                                            margin: '10px 0'
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
                                    }
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
                                            margin: '10px 0'
                                        },
                                        '& input': {
                                            width: '90%',
                                            border: 'solid black 2px',
                                            height: '40px',
                                            outline: 'none',
                                            fontFamily: 'GothamLight',
                                            paddingLeft: '10px',
                                        },
                                    }
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
                                            margin: '10px 0'
                                        },
                                        '& input': {
                                            width: '95%',
                                            border: 'solid black 2px',
                                            height: '40px',
                                            outline: 'none',
                                            fontFamily: 'GothamLight',
                                            paddingLeft: '10px',
                                        },
                                    }
                                },
                                '& .checkout': {
                                    fontFamily: 'GothamBold',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    $nest: {
                                        '& label': {
                                            fontSize: '18px',
                                            margin: '5px 0'
                                        },
                                    }

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
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            }
        },

        '& .seccion-title': {
            fontFamily: 'GothamBold',
            borderBottom: 'solid black 5px',
            width: '80%',
            margin: '40px auto',
            paddingBottom: '20px',
        },
        '& .seccion-title2': {
            fontFamily: 'GothamBold',
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
                '& .danger-text': {
                  color: 'red'
                },
                '& label': {
                    fontFamily: 'GothamBold',
                    fontSize: '21px',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '10px 0',
                    $nest : {
                        '& input': {
                            border: 'solid black 2px',
                            height: '40px',
                            outline: 'none',
                            fontFamily: 'GothamLight',
                            paddingLeft: '10px',
                            margin: '10px 0'
                        }
                    }
                },
                '& .two-inputs': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    $nest: {
                        '& label': {
                            width: '48%'
                        }
                    }
                },

                '& .one-inputs': {
                    $nest: {
                        '& label': {
                            width: '100%'
                        }
                    }
                },
                '& .checkout': {
                    $nest: {
                        '& label': {
                            flexDirection: 'row',
                            alignItems: 'center',
                            fontSize: '18px',
                            $nest: {
                                '& input': {
                                    marginLeft: '10px'
                                }
                            }
                        },
                    }

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
                                    right: 20,
                                    top: 5,
                                    maxWidth: '30px',
                                }
                            }
                        },

                        '& .facebook': {
                            backgroundColor: '#1677F0',
                        },

                        '& .google': {
                            backgroundColor: '#DF4B38',
                            $nest: {
                                '& img': {
                                    top: 10
                                }
                            }
                        },
                    }
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
                        }
                    }
                }
            }
        },

        '& .options-login': {
            display: 'flex',
            width: '80%',
            marginBottom: '40px',
            justifyContent: 'space-between',
            $nest: {
                '& h3': {
                    fontFamily: 'GothamBold',
                    fontSize: '24px',
                    paddingBottom: '20px',
                    cursor: 'pointer'
                },
                '& hr': {
                    display: 'none',
                }
            }
        },

        '@media screen and (max-width: 1200px)': {
            $nest: {
                '& .account-info': {
                    $nest: {
                        '& .wrapper': {
                            $nest: {
                                '& .photo-container': {
                                    $nest: {
                                        '& .photo-wrapper': {
                                            height: '450px',
                                            width: '350px',
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
            }
        },

        '@media screen and (max-width: 900px)': {
            $nest: {
                '& .form': {
                    width: '80%',
                },
                '& .account-info': {
                    $nest: {
                        '& .wrapper': {
                            $nest: {
                                '& .info': {
                                    margin: 'auto',
                                    width: '80%',
                                },
                                '& .photo-container': {
                                    display: 'none'
                                },
                            }
                        }
                    }
                },
            }
        },
        '@media screen and (max-width: 640px)': {
            marginTop: '40px',
            $nest: {
                '& .title': {
                    display: 'none',
                },

                '& .seccion-title': {
                  textAlign: 'center',
                  fontSize: '20px',
                  borderTop: 'solid black 5px',
                  width: '80%',
                  marginBottom: 'none',
                  borderBottom: 'none',
                  margin: '40px auto',
                  paddingTop: '20px',
                },

                '& .seccion-title2': {
                    margin: '60px 0',
                    textAlign: 'center',
                    fontSize: '20px',
                    width: '90%',
                },

                '& .message-input': {
                  width: '80%',
                  $nest: {
                      '& label': {
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'GothamBold',
                          fontSize: '26px',
                          margin: '20px 0'
                      },
                      '& textarea': {
                          display: 'inline-block',
                          fontFamily: 'GothamLight',
                          fontSize: '20px',
                          width: '100%',
                          border: 'solid #242535 5px',
                          height: '280px',
                          marginBottom: '30px',
                          textAlign: 'left',
                          padding: '0 10px',
                          outline: 'none',
                      },
                      '& button': {
                          float: 'none',
                          margin: '20px auto'
                      },
                  }
              },

                '& .options-login': {
                    width: '80%',
                    marginBottom: '40px',
                    $nest: {
                        '& h3': {
                            fontSize: '16px',
                        },
                        '& hr': {
                            display: 'block',
                            border: 'solid 1px',
                        }
                    }
                },

                '& .form': {
                    width: '90%',
                    $nest: {
                        '& label': {
                            fontSize: '16px',

                        },
                        '& .two-inputs': {
                            display: 'block',
                            $nest: {
                                '& label': {
                                    width: '100%'
                                }
                            }
                        },
        
                        '& .checkout': {
                            $nest: {
                                '& label': {
                                    fontSize: '16px',
                                },
                            }
        
                        },
        
                        '& .buttons-wrapper': {
                            $nest: {
                                '& button': {
                                    fontSize: '14px',
                                    padding: '0 40px',
                                    $nest: {
                                        '& img': {
                                            right: 10,
                                            top: 5,
                                        }
                                    }
                                },
        
                                '& .facebook': {
                                    backgroundColor: '#1677F0',
                                },
        
                            }
                        },
                        '& .info': {
                            fontSize: '14px',
                            $nest: {
                                '& .bold': {
                                    fontFamily: 'GothamBold',
                                }
                            }
                        }
                    }
                },


            }
        },
        '@media screen and (max-width: 540px)': {
            $nest: {

              '& .seccion-title': {
                margin: '20px auto',
                paddingBottom: '0',
              },

                '& .account-info': {
                  margin: 0,
                    $nest: {
                        '& .wrapper': {
                            $nest: {
                                '& .info': {
                                    margin: 'auto',
                                    width: '80%',
                                    $nest: {
                                        '& .mid': {
                                            margin: '10px 0',
                                            width: '100%',
                                            $nest: {
                                                '& label': {
                                                    fontSize: '18px',
                                                },
                                                '& input': {
                                                    width: '100%',
                                                },
                                            }
                                        },
                                        '& .big': {
                                            width: '100%',
                                            $nest: {
                                                '& label': {
                                                    fontSize: '18px',
                                                },
                                                '& input': {
                                                    width: '100%',
                                                },
                                            }
                                        },
                                    },
                                },
                            }
                        }
                    }
                },

                '& .message-input': {
                  width: '80%',
                  $nest: {
                      '& label': {
                          textAlign: 'center',
                          display: 'block',
                          fontFamily: 'GothamBold',
                          fontSize: '22px',
                          margin: '20px 0'
                      },
                      '& textarea': {
                          display: 'block',
                          width: '90%'
                      },
                      '& button': {
                          float: 'none',
                          margin: '20px auto'
                      },
                  }
              },

              '& .currentProducts-container': {
                margin: '0',
              },
            }
        },
    }
})

export default PerfilStyle