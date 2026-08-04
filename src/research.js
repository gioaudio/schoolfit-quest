/* ============================================================
   RESEARCH LAYER — imported 2026-07-31 from an external pass
   over all 22 schools (SchoolFit_Quest_COMPLETE_DATA_EXPORT).

   This is EVIDENCE, not scoring. Nothing here feeds the match
   score directly. It exists so the app can say what is actually
   known about a school, and mark plainly what is not.

   Every field carries one of:
     confirmed              verified against a published source
     partial                some evidence, incomplete
     not_publicly_verified  looked for, not found publicly
     not_stated             the school does not say
     portal_only            behind a parent login

   Those five states must NEVER be collapsed into yes/no. A
   school that does not publish its tutor group size has not
   told us it has none. 251 of the 770 fields here are explicit
   unknowns and they are the honest part of the dataset.

   Entry to the SCHOOL and entry to a PROGRAM are kept separate.
   Contemporary music and music PRODUCTION are kept separate:
   a large, successful music department is not evidence of DAWs,
   recording or sound engineering, and the data shows the two
   come apart badly.
   ============================================================ */

const RESEARCH = {
 "Melville Senior High School — Academic Extension": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Local-intake students have the standard public-school entry route. Out-of-area entry is generally through Gifted and Talented or an approved specialist program."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Academic Extension is a school-based pathway, not an out-of-area enrolment route. Selection uses school testing, reports and NAPLAN, and placement can be reviewed by subject."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Gifted and Talented, Academic Extension and approved specialist pathways operate alongside the mainstream school.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/academic-extension-course/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Academic Extension covers English, Mathematics, Science and Humanities; Mathematics is streamed from Year 8. Full setting in other subjects was not verified.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/academic-extension-course/"
   },
   "movement_between_levels": {
    "status": "confirmed",
    "detail": "Placement can be reviewed by subject using achievement and teacher recommendation.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/academic-extension-course/"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Academic Extension, Gifted and Talented and specialist pathways provide formal stretch.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/academic-extension-course/"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support and Student Services are published, but precise entry thresholds and intervention frequency were not found.",
    "source": "https://melville.wa.edu.au/about/annual-reports-business-plans-and-school-reviews/"
   },
   "framework": {
    "status": "partial",
    "detail": "The school publishes program-specific extension structures; a single whole-school instructional framework was not confirmed.",
    "source": "https://melville.wa.edu.au/about/annual-reports-business-plans-and-school-reviews/"
   }
  },
  "subjects": {
   "source": {
    "summary": "Current senior handbook covering ATAR, General and vocational pathways.",
    "url": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf",
    "access": "Public handbook"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Applications, Methods and Specialist pathways are included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature pathways are included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "ATAR and General science pathways are included; consult the handbook for the current named list.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Humanities and Social Sciences pathways are included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "languages": {
     "status": "partial",
     "detail": "Language study is available, but the current senior language list was not extracted into this dataset.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Art and design/media pathways are included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and Technologies pathways are included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computing and digital-technology pathways are included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is included.",
     "source": "https://melville.wa.edu.au/wp-content/uploads/2025/09/2025-Senior-School-Handbook-final-v3.pdf"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "More than 54 interschool teams across athletics, swimming, netball, AFL, basketball, rugby, touch, cross-country, soccer/futsal, volleyball and water polo.",
    "source": "https://melville.wa.edu.au/learning/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Dance, drama, media, music and visual art, supported by performing-arts spaces, studios, cameras and 3D-printing resources.",
    "source": "https://melville.wa.edu.au/learning/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Robotics, EV Challenge, virtual reality, computer laboratories and digital technologies are published.",
    "source": "https://melville.wa.edu.au/learning/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Debating, mock trials, student council and Tournament of Minds provide leadership and applied problem-solving, but a dedicated entrepreneurship pathway was not verified.",
    "source": "https://melville.wa.edu.au/learning/"
   }
  },
  "music": {
   "orchestral": {
    "status": "not_publicly_verified",
    "detail": "A full strings or symphony orchestra was not verified."
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert Bands are published as part of Music in Focus.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/music-in-focus/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "VOX choir is published.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/music-in-focus/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Swing Band is published.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/music-in-focus/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary Guitar and other contemporary performance opportunities are published.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/music-in-focus/"
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "No dedicated DAW, studio-recording or music-production curriculum was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "IMSS and private instrumental tuition are available across a range of instruments.",
    "source": "https://melville.wa.edu.au/school-programs/school-based-programs/music-in-focus/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "partial",
    "detail": "Year Coordinators and Student Services are published; a named daily tutor or homeroom unit was not verified.",
    "source": "https://melville.wa.edu.au/about/annual-reports-business-plans-and-school-reviews/"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "partial",
    "detail": "Published support includes Year Coordinators, Learning Support Coordinator and allied professionals; a formal step-by-step chain was not found.",
    "source": "https://melville.wa.edu.au/about/annual-reports-business-plans-and-school-reviews/"
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2024,
   "summary": "The external review validated strong relationships, broad pathways and student support. It did not provide a simple culture rating.",
   "positives": [
    "Parents and students described a supportive, diverse and comprehensive school.",
    "Specialist and extension pathways were valued for real-world qualifications."
   ],
   "concerns": [
    "Most formal recommendations concerned sharpening self-assessment evidence rather than a major deficiency."
   ],
   "sources": [
    "https://melville.wa.edu.au/about/annual-reports-business-plans-and-school-reviews/"
   ]
  },
  "academicStanding": {
   "summary": "Strong comprehensive-school outcomes. The 2025 WACE achievement rate was reported at 96%, above the state rate and slightly above like schools.",
   "score": 82,
   "url": "https://melville.wa.edu.au/wp-content/uploads/2026/03/Annual-Report-2025-Schools-Online-Upload.pdf",
   "label": "2025 Annual Report"
  },
  "entryReality": "Local-intake students have the standard public-school entry route. Out-of-area entry is generally through Gifted and Talented or an approved specialist program.",
  "programAccess": "Academic Extension is a school-based pathway, not an out-of-area enrolment route. Selection uses school testing, reports and NAPLAN, and placement can be reviewed by subject.",
  "seniorSubjects": {
   "summary": "Official senior-school guide available, covering ATAR, General and vocational pathways.",
   "url": "https://melville.wa.edu.au/wp-content/uploads/2025/08/2026-Senior-School-Course-Guide.pdf",
   "access": "Public guide"
  },
  "musicReality": {
   "style": "Mixed classroom music: performance, composition, analysis and music literacy.",
   "production": "Limited verified production",
   "note": "Music in Focus and senior Music are credible, but a dedicated DAW, recording or production curriculum was not verified."
  },
  "productionScore": 45,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Computer Science ATAR is listed in the current 2026 senior handbook."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "A Robotics Club is current, and the 2025 student guide records Junior RoboCup placings."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering Studies ATAR is listed through senior school; lower years also include engineering and robotics contexts."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Senior Design and Media Production include digital design, games/media contexts and Adobe production tools."
   },
   "makerspace": {
    "status": "partial",
    "detail": "The school publishes computer laboratories, workshops and a flexible STEM space, but not a facility formally named makerspace or fab lab."
   },
   "note": "Strong verified breadth across senior computing, engineering, robotics competition and digital media. The facilities evidence is substantial but not a formally named makerspace."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Art is offered at ATAR and General level in senior school."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design is offered at ATAR and General level, and the specialist Graphic Design Media program runs from Years 7–12."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Senior drama-related study and a regular Dance and Drama Showcase are publicly documented."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis is offered at ATAR and General level, with Certificate III Screen and Media also listed."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Certificate II Dance is listed in senior school and dance is included in the annual showcase."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "The Approved Specialist Graphic Design Media program uses specialist testing, portfolio evidence and interview stages."
   },
   "artFacility": {
    "status": "partial",
    "detail": "Dedicated arts learning spaces are evident, but no current source checked named a major theatre, gallery or arts block."
   },
   "note": "Visual art, design, film and dance all have verified senior pathways. Graphic Design Media is a genuine selective entry route rather than a general school activity."
  },
  "sport": {
   "body": "School Sport WA and school-managed interschool competition",
   "division": "SSWA McMahon Shield Tier 2; school swimming and athletics teams are listed as Division 2",
   "specialistProgram": "Specialist Netball Program — Tier 1 Netball WA endorsed; online application, trial, interview and offer",
   "note": "Touch Football and futsal are also listed, but they were not converted into rugby or soccer-only evidence where the code would be misleading.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR",
     "English as an Additional Language or Dialect General"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General",
     "Science in Practice General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Career and Employability General",
     "Certificate II Workplace Skills",
     "Certificate III Business"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese First Language ATAR",
     "Chinese Background Language ATAR",
     "Chinese Second Language ATAR",
     "Chinese Second Language General",
     "Italian Second Language ATAR",
     "Italian Second Language General"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Visual Arts ATAR",
     "Visual Arts General",
     "Design ATAR",
     "Design (Graphics) General",
     "Media Production and Analysis ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Certificate III Screen and Media",
     "Certificate III Music (Performance)",
     "Certificate II Dance",
     "Certificate II Creative Industries (Live Production)"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Aviation General",
     "Building and Construction General",
     "Children, Family and Community General",
     "Food Science and Technology General",
     "Materials Design and Technology (Metal) General",
     "Materials Design and Technology (Wood) General",
     "Certificate II Engineering Pathways"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Physical Education Studies ATAR",
     "Physical Education Studies General",
     "Outdoor Education General",
     "Certificate III Sport, Aquatics and Recreation",
     "Certificate II Sports Coaching (Specialist Netball)"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1071,
   "topQuarterPct": 32,
   "teachingStaffFTE": 97.3,
   "nonTeachingFTE": 44.2,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 14.4,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Student Services team, with Year Coordinators",
   "unitSize": null,
   "contactFrequency": "",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Teacher or Year Coordinator → Student Services when additional support is required",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 1,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "tennisCourts": {
     "value": 1,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "makerspace": {
     "value": 1,
     "status": "partial"
    },
    "recentBuild": {
     "value": "2025 handbook: new Sports Hall and STEM facility.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://melville.wa.edu.au/learning/arts/",
       "title": "Arts facilities",
       "quote": "We offer state of the art facilities including a Performing Arts Centre which is an incredible performance space for dance, drama and music showcases.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.melville.wa.edu.au/wp-content/uploads/2022/11/Prospectus-2022-Web-Version.pdf",
       "title": "College prospectus",
       "quote": "Arts precinct with a Performing Arts Centre, film and television, multi-media and music studios, as well as three visual arts studios.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "official prospectus; older facility inventory"
      },
      "F3": {
       "url": "https://melville.wa.edu.au/learning/technologies/",
       "title": "Technologies",
       "quote": "One flexible STEM space.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F4": {
       "url": "https://www.melville.wa.edu.au/wp-content/uploads/2024/11/MSHS-Handbook-2025.pdf",
       "title": "2025 handbook campus map",
       "quote": "Gymnasium, Tennis and Netball Courts ... New Sports Hall and STEM facility ... Performing Arts Centre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "academic": {
     "value": "2024: Beazley Medal; WA School-Based Apprentice of the Year; 100% WACE and OLNA completion; Top 20 WA NAPLAN performance in Years 7 and 9 in 2023 and 2024.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://melville.wa.edu.au/about/awards-and-achievements/",
       "title": "Awards and achievements",
       "quote": "Our students excelled with an unparalleled 100% Western Australian Certificate of Education (WACE) and Online Literacy and Numeracy Assessment (OLNA) completion.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2024 results published in 2025"
      },
      "D2": {
       "url": "https://melville.wa.edu.au/about/principals-welcome/",
       "title": "2024 awards",
       "quote": "Our students achieve outstanding successes demonstrated by our 2024 awards including the Beazley Medal and WA School-Based Apprentice of the Year.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 0,
   "blazerRequired": false,
   "separateFormalUniform": false,
   "groomingRules": "",
   "assemblyFrequency": "",
   "chapelOrService": 0,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "House Swimming Carnival",
    "House Athletics Carnival",
    "Anzac commemoration",
    "Year 12 graduation"
   ],
   "note": "Published formality is concentrated in House identity, carnivals and school ceremonies rather than a blazer-and-tie daily presentation model."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": 2,
     "status": "confirmed"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "On-campus/current named qualifications: Certificate II Engineering Pathways; Certificate II Workplace Skills; Certificate III Business; Certificate III Screen and Media; Certificate III Music (Performance); Certificate II Dance; Certificate II Creative Industries (Live Production); Certificate III Sport, Aquatics and Recreation; Certificate II Sports Coaching; and a Year 10 Certificate II Music pathway. External TAFE/RTO fields vary and are not converted into category scores without a named qualification.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "TAFEWA, fee-for-service providers and private Registered Training Organisations",
    "releaseDay": true,
    "facilities": [
     "technology workshops",
     "screen and media facilities",
     "music and live-production facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 2,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFEWA",
     "Qantas",
     "Netball WA",
     "local businesses and industry contacts"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "All Saints’ College": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open independent-school application with waiting pools and major intake planning several years ahead. No residential catchment."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Scholarships and specialist opportunities do not replace the normal admissions process. A scholarship applicant still needs an enrolment pathway and place."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "The school is non-selective but uses personalisation, acceleration, advanced placement and scholarships.",
    "source": "https://www.allsaints.wa.edu.au/our-difference/personalisation"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Flexible and personalised pathways are published; conventional subject setting rules are not stated as a single system.",
    "source": "https://www.allsaints.wa.edu.au/our-difference/personalisation"
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Stage-not-age and advanced-placement approaches permit movement, but exact thresholds are not public.",
    "source": "https://www.allsaints.wa.edu.au/our-difference/personalisation"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Acceleration, advanced placement, extension, project learning and scholarships support students who are ahead.",
    "source": "https://www.allsaints.wa.edu.au/our-difference/personalisation"
   },
   "behind": {
    "status": "partial",
    "detail": "Personalised learning and support are published; exact intervention thresholds are not public."
   },
   "framework": {
    "status": "confirmed",
    "detail": "Personalisation, stage-not-age progression, project-based learning and student agency.",
    "source": "https://www.allsaints.wa.edu.au/our-difference/personalisation"
   }
  },
  "subjects": {
   "source": {
    "summary": "Public Years 11–12 subject list.",
    "url": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college",
    "access": "Public subject list"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Biology, Chemistry, Human Biology, Physics and Psychology are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Economics, Geography, Modern History and Politics and Law are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Chinese and French are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts is offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "music": {
     "status": "confirmed",
     "detail": "Contemporary Music and Western Art Music are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design pathways are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Applied Information Technology and Computer Science are offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "A broad co-ed sports and co-curricular program is published.",
    "source": "https://www.allsaints.wa.edu.au/stages-of-the-journey/senior-school"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Drama, Visual Art, Screen and Media, music and production opportunities are published.",
    "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computer Science, AIT, media technology and innovation opportunities are published.",
    "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Innovation and entrepreneurship is a named scholarship and program strength.",
    "source": "https://www.allsaints.wa.edu.au/enrolments/scholarships/innovation-and-entrepreneurship-scholarship"
   }
  },
  "music": {
   "orchestral": {
    "status": "partial",
    "detail": "Western Art Music and ensemble activity are published; a current complete orchestra list was not verified."
   },
   "wind_band": {
    "status": "partial",
    "detail": "Band opportunities exist; exact current concert-band hierarchy was not fully verified."
   },
   "choral": {
    "status": "confirmed",
    "detail": "College Choir is compulsory for music scholarship recipients and available within the music program.",
    "source": "https://www.allsaints.wa.edu.au/enrolments/scholarships/music-scholarship"
   },
   "jazz": {
    "status": "partial",
    "detail": "Jazz-related ensemble activity is visible, but exact current structure was not verified."
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary Music is a named senior subject and contemporary ensembles/original work are supported.",
    "source": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college"
   },
   "production": {
    "status": "partial",
    "detail": "Original composition, post-production, technical production and an industry-standard media/podcast studio are published; no dedicated audio-production qualification was verified.",
    "source": "https://www.allsaints.wa.edu.au/about-us/our-campus"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Individual instrumental tuition is available; music scholarships include one weekly 30-minute lesson.",
    "source": "https://www.allsaints.wa.edu.au/enrolments/scholarships/music-scholarship"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "Tutor Group within a House.",
    "source": "https://www.allsaints.wa.edu.au/stages-of-the-journey/senior-school"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "partial",
    "detail": "Tutor and House structures connect to student wellbeing staff; a complete published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "2023–2026",
   "summary": "SEEK contains mixed staff evidence. It is anecdotal and cannot represent all staff experiences.",
   "positives": [
    "Recent and aggregate reviews commonly describe welcoming colleagues, supportive staff and a culture that values innovation."
   ],
   "concerns": [
    "A February 2023 teacher review advised going in with eyes open; aggregate themes include workload, management and parent-pressure concerns."
   ],
   "sources": [
    "https://www.seek.com.au/companies/all-saints-college-753034/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Very strong academic environment with extensive university preparation, although a directly comparable current median ATAR was not located in the reviewed public material.",
   "score": 87,
   "url": "https://www.allsaints.wa.edu.au/policies-reports",
   "label": "Annual reports and performance evidence"
  },
  "entryReality": "Open independent-school application with waiting pools and major intake planning several years ahead. No residential catchment.",
  "programAccess": "Scholarships and specialist opportunities do not replace the normal admissions process. A scholarship applicant still needs an enrolment pathway and place.",
  "seniorSubjects": {
   "summary": "Current public Years 11–12 subject list includes ATAR, General and VET options across mathematics, sciences, computing, arts, music, media and humanities.",
   "url": "https://www.allsaints.wa.edu.au/faq/~board/faqs/post/what-subjects-can-year-11-and-12-students-study-at-the-college",
   "access": "Public subject list"
  },
  "musicReality": {
   "style": "Contemporary Music and Western Art Music are explicitly offered.",
   "production": "Some verified production",
   "note": "Contemporary music, original creation and media facilities are visible; the evidence supports production-adjacent opportunity but not a dedicated senior audio-production qualification."
  },
  "productionScore": 72,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "The public senior list includes Computer Science ATAR and Applied Information Technology ATAR and General."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Robotics Club is published as a whole-College co-curricular activity."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "The complete public Year 11–12 list was checked. It includes computing and Design, but no Engineering Studies or senior Materials Design and Technology."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Senior Design Photography, Design General and Certificate III Screen and Media are listed."
   },
   "makerspace": {
    "status": "partial",
    "detail": "Tech Hub is named publicly, and InnovatED uses prototyping and product creation; the page does not establish a full fabrication laboratory."
   },
   "note": "Computing and digital creative pathways are verified. Engineering is a checked-and-absent senior finding, not an unchecked blank."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts is offered at ATAR and General level in Years 11–12."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design Photography, Design General and Screen and Media are listed in the senior subject offering."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama ATAR is offered and HotHouse Company provides regular performance and production work."
   },
   "film": {
    "status": "confirmed",
    "detail": "Certificate III Screen and Media and the College Media Hub provide verified screen-production pathways."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is offered at ATAR and General level, with Ballet, Contemporary, Hip Hop and Jazz also offered co-curricularly."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Drama and Dance scholarships require a separate application and selection process."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names a performance theatre, dance studio and dedicated media-production space."
   },
   "note": "All five arts areas have substantial curriculum or co-curricular evidence, with selective scholarship routes and named specialist facilities."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Southern Associated Schools",
   "division": "ACC Swimming B Division in 2026",
   "specialistProgram": "",
   "note": "Windsurfing, touch rugby and triathlon are also published. Touch rugby is not coded as rugby union.",
   "fields": {
    "afl": {
     "status": "partial"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "partial"
    },
    "basketball": {
     "status": "partial"
    },
    "soccer": {
     "status": "partial"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "partial"
    },
    "volleyball": {
     "status": "partial"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "partial"
    },
    "crosscountry": {
     "status": "partial"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "confirmed"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Politics and Law ATAR",
     "Certificate II Workplace Skills",
     "Certificate III Business",
     "Certificate III Events"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese Second Language ATAR",
     "French Second Language ATAR",
     "Certificate III Applied Language (French context)"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Dance ATAR",
     "Dance General",
     "Drama ATAR",
     "Music Contemporary ATAR",
     "Music Western Art ATAR",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Design (Photography) ATAR",
     "Design General",
     "Certificate II Creative Industries",
     "Certificate III Screen and Media"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology ATAR (Year 11 only)",
     "Applied Information Technology General (Year 11 only)",
     "Computer Science ATAR",
     "Design (Photography) ATAR",
     "Design General",
     "Certificate II Hospitality",
     "Certificate II Workplace Skills",
     "Certificate III Business"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies General",
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Certificate II Sport Coaching"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1162,
   "topQuarterPct": 66,
   "teachingStaffFTE": 126.1,
   "nonTeachingFTE": 91.4,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 10.9,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Tutor Group within the House system",
   "unitSize": null,
   "contactFrequency": "Daily morning Tutor Group in Senior School",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 2,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 2,
     "status": "confirmed"
    },
    "bursary": {
     "value": 0,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Up to 100% tuition for the First Nations scholarship; academic and music awards up to 50% academic tuition.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Up to 50% academic tuition plus 100% of one 30-minute individual lesson each week.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Scholarship examination and interview; music and performing-arts audition; reports, NAPLAN and supporting material for relevant awards.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.allsaints.wa.edu.au/enrolments/scholarships",
       "title": "2027 scholarship inventory",
       "quote": "We are pleased to offer the following scholarships ... Academic Scholarship ... Music Scholarship ... Dance and Drama Scholarship ... Innovation and Entrepreneurship Scholarship ... Aboriginal and Torres Strait Islander Scholarship.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2027 entry; current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.allsaints.wa.edu.au/enrolments/scholarships/academic-scholarship",
       "title": "Academic scholarship",
       "quote": "Academic Scholarships are awarded ... as evidenced in the student’s performance in the scholarship examination and interview.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2027 entry"
      },
      "S3": {
       "url": "https://www.allsaints.wa.edu.au/enrolments/scholarships/music-scholarship",
       "title": "Music scholarship",
       "quote": "The Music Scholarship provides up to 50% remission of academic tuition fees and 100% remission of one 30-minute individual music lesson per week.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2027 entry"
      },
      "S4": {
       "url": "https://www.allsaints.wa.edu.au/enrolments/scholarships/aboriginalandtorresstraitislander-scholarship",
       "title": "First Nations scholarship",
       "quote": "The scholarship may provide up to 100% remission of tuition fees depending on financial statements and may include other educational expenses.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2027 entry"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "pool": {
     "value": 2,
     "status": "confirmed"
    },
    "poolLength": {
     "value": "25m indoor pool plus hydrotherapy pool",
     "status": "confirmed"
    },
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "recordingStudio": {
     "value": 1,
     "status": "partial"
    },
    "musicSchool": {
     "value": 1,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2026: multimillion-dollar Facilities Operations and childcare project, including a Theatre Workshop.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.allsaints.wa.edu.au/about-us/our-campus",
       "title": "Campus facilities",
       "quote": "A state-of-the-art performance theatre ... Aquatic centre, including a heated 25 metre indoor swimming pool and hydrotherapy pool ... Indoor Sports Centre including a fully equipped gymnasium and a rock-climbing wall ... The Cave – an industry-standard media room and podcast studio.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.allsaints.wa.edu.au/about-us/our-history",
       "title": "Campus history",
       "quote": "The College’s facilities have been enriched with an Aquatic Centre (2002), Indoor Sports Centre (2010) and Centre for Performing Arts (2013).",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F3": {
       "url": "https://www.allsaints.wa.edu.au/news/~board/news/post/facilities-operations-centre-construction-hits-new-heights",
       "title": "Current capital project",
       "quote": "The facility will also house a Theatre Workshop ... The construction ... is part of a multimillion-dollar project.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Director of Music",
      "Theatre Manager",
      "Theatre Technician"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.allsaints.wa.edu.au/enrolments/scholarships/music-scholarship",
       "title": "Music scholarship selection",
       "quote": "Shortlisted applicants will be invited to audition with the Director of Music.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2027 entry"
      },
      "R2": {
       "url": "https://www.allsaints.wa.edu.au/news/~board/news/post/meet-the-team-behind-the-curtain-dave-spooner-and-julian-nichols-power-performing-arts-at-all-saints-college",
       "title": "Performing-arts operations",
       "quote": "Theatre Manager ... Theatre Technician.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": null,
   "blazerRequired": null,
   "separateFormalUniform": null,
   "groomingRules": "",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Presentation Evening",
    "Chapel services",
    "Eucharists",
    "student leadership commissioning"
   ],
   "note": "Public evidence strongly establishes worship, Houses and a compulsory Presentation Evening, while detailed uniform rules remain within family-facing systems."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 2,
     "status": "confirmed"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current on-campus list: Certificate II Creative Industries; Certificate II Hospitality; Certificate II Sport Coaching; Certificate II Workplace Skills; Certificate III Applied Language (French context); Certificate III Business; Certificate III Events; Certificate III Screen and Media. External certificate applications may broaden the menu, so unlisted fields remain null rather than zero.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "External TAFE or Registered Training Organisation options through flexible Senior School pathways",
    "releaseDay": null,
    "facilities": [
     "The Cave industry-standard media room and podcast studio"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 1,
    "careersStaffNamed": null,
    "industryLinks": [],
    "atarVetSplit": ""
   }
  }
 },
 "Perth Modern School": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Entry is only through WA’s statewide Gifted and Talented selection process. Most entry is in Year 7, with limited later vacancies and no Year 12 entry."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "The entire school is academically selective; this is not a local-intake option."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "The whole school is fully academically selective through the statewide Academic Selective Entry Test.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "All students enter as gifted learners. Course differentiation and extension are school-wide; ordinary mixed-ability mainstream classes do not exist in the same sense as a comprehensive school.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "The school offers a broad choice-laden timetable, but published movement rules between subject levels were not located.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Gifted differentiation, inquiry tasks, extension and university/competition partnerships are school-wide.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "behind": {
    "status": "confirmed",
    "detail": "Student Services, education assistants, psychologist, nurse, chaplain and individual plans support students at educational risk and twice-exceptional learners.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "framework": {
    "status": "confirmed",
    "detail": "Teaching for Impact, GERRIC-informed gifted pedagogy, SOLO taxonomy and Quality Teaching Strategy.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   }
  },
  "subjects": {
   "source": {
    "summary": "Official senior curriculum includes a wide ATAR and selected General offering.",
    "url": "https://www.perthmodern.wa.edu.au/learning/senior-school/",
    "access": "Public senior curriculum"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Biology, Chemistry, Human Biology, Physics and Psychology are offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Ancient and Modern History, Economics, Geography, Philosophy and Ethics, and Politics and Law are offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Chinese, French, Italian and Japanese are offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts is offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered, including ATAR Music.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and Engineering pathways are offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computer Science is offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Volleyball, badminton, rowing and broader school sport are published partnerships or programs.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Visual Arts, Drama, Music and performance opportunities are embedded in the curriculum.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computer Science, computational and algorithmic thinking, academic challenges and technology access are published.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Student Council, academic challenges and inquiry projects develop leadership, but a dedicated enterprise/startup program was not verified.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "String Orchestra and Symphony Orchestra are published.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Wind Band and other wind ensembles are published.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choir is published.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz ensembles are published.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary ensembles are published, although they are not presented as the defining music pathway.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   },
   "production": {
    "status": "partial",
    "detail": "Technology and composition are used in music; a dedicated production, engineering or DAW pathway was not verified.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "IMSS tuition and school ensembles are available.",
    "source": "https://www.perthmodern.wa.edu.au/learning/senior-school/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "Advocacy Group.",
    "source": "https://www.perthmodern.wa.edu.au/student-life/wellbeing/"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "confirmed",
    "detail": "One period each week.",
    "source": "https://www.perthmodern.wa.edu.au/student-life/wellbeing/"
   },
   "continuity": {
    "status": "confirmed",
    "detail": "The same Advocacy teacher stays with the student through secondary school.",
    "source": "https://www.perthmodern.wa.edu.au/student-life/wellbeing/"
   },
   "escalation": {
    "status": "partial",
    "detail": "Advocacy teacher and Year Coordinator connect into Student Services, including psychologist, nurse and support staff. A formal arrow-chain was not located.",
    "source": "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2023,
   "summary": "The review describes a high-performance environment with high satisfaction, strong student knowledge and explicit wellbeing structures.",
   "positives": [
    "Students viewed selection as an opportunity to achieve excellence together.",
    "Reviewers found skilled staff with insightful knowledge of students and strong gifted differentiation."
   ],
   "concerns": [
    "Maintain explicit wellbeing focus and clarify a unified pedagogical framework.",
    "Continue broadening course offerings to support health and wellbeing."
   ],
   "sources": [
    "https://www.perthmodern.wa.edu.au/wp-content/uploads/2024/07/Perth-Modern-School-Public-School-Review-report-June-2023.pdf"
   ]
  },
  "academicStanding": {
   "summary": "WA’s highest-performing fully selective public school. The school reports the state’s top academic ranking across multiple recent years, including 2025.",
   "score": 100,
   "url": "https://www.perthmodern.wa.edu.au/",
   "label": "Official school performance reporting"
  },
  "entryReality": "Entry is only through WA’s statewide Gifted and Talented selection process. Most entry is in Year 7, with limited later vacancies and no Year 12 entry.",
  "programAccess": "The entire school is academically selective; this is not a local-intake option.",
  "seniorSubjects": {
   "summary": "Official senior curriculum handbook available.",
   "url": "https://www.perthmodern.wa.edu.au/learning/senior-school/",
   "access": "Public senior curriculum"
  },
  "musicReality": {
   "style": "Primarily academically oriented instrumental, ensemble and performance music.",
   "production": "Production not verified",
   "note": "No dedicated contemporary production or DAW pathway was verified in the official music evidence."
  },
  "productionScore": 30,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Computer Science is listed in the current 2027 senior handbook through Year 12."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "The school reports Robotics Club teams competing in FIRST Lego League and a current senior handbook includes mechatronic robotics work."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering Studies and Materials Design and Technology are listed in the current senior handbook."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Senior Design and middle-year Blender, Unity and game-development activities are published."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current public source checked named a makerspace, fab lab or equivalent dedicated fabrication facility."
   },
   "note": "Current senior computing and engineering are well verified. Robotics and digital creation are also documented; a named makerspace was not publicly verified."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts ATAR is listed through Years 11 and 12."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design ATAR is listed in the current senior handbook."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama ATAR continues through Year 12 and includes public performance."
   },
   "film": {
    "status": "confirmed",
    "detail": "Film-making appears within drama and other creative work, but no standalone senior Media Production course is listed."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is offered in Year 10 and includes showcase performance, but is absent from the current Years 11–12 list."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "The school’s entry route is academic Gifted and Talented selection; no arts-selective admission pathway is listed."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "Named facilities include the Cyril Tyler Auditorium, Casey Drama Centre and Irene Greenwood Studio."
   },
   "note": "Visual Arts, Design and Drama have verified senior depth. Dance and film are present but do not constitute standalone senior pathways in the checked handbook."
  },
  "sport": {
   "body": "School Sport WA",
   "division": "SSWA McMahon Shield Tier 2 champion in 2024",
   "specialistProgram": "",
   "note": "The aggregate McMahon Shield result demonstrates broad SSWA participation but was not used to invent individual sport fields.",
   "fields": {
    "afl": {
     "status": "not_publicly_verified"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "partial"
    },
    "soccer": {
     "status": "not_publicly_verified"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "not_publicly_verified"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "not_publicly_verified"
    },
    "crosscountry": {
     "status": "not_publicly_verified"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "Literature ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Physics ATAR",
     "Psychology ATAR"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Ancient History ATAR (Year 11 only in 2026)",
     "Economics ATAR",
     "Geography ATAR (Year 11 only in 2026)",
     "Modern History ATAR",
     "Philosophy and Ethics ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese Second Language ATAR",
     "French Second Language ATAR",
     "Italian Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Visual Arts ATAR",
     "Drama ATAR",
     "Music ATAR",
     "Design ATAR"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Computer Science ATAR",
     "Design ATAR",
     "Engineering Studies ATAR",
     "Materials Design and Technology General",
     "Food Science and Technology General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Physical Education Studies ATAR",
     "Health Studies General"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "mostly ATAR"
  },
  "myschool": {
   "icsea": 1230,
   "topQuarterPct": 79,
   "teachingStaffFTE": 105.1,
   "nonTeachingFTE": 27.3,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 14.0,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Advocacy group",
   "unitSize": null,
   "contactFrequency": "One period per week",
   "sameAdultAcrossYears": "yes",
   "handoverPoint": "No planned handover during the student's school journey",
   "escalationChain": "Advocacy teacher or Year Coordinator → Student Services specialist support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "confirmed"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 1,
     "status": "confirmed"
    },
    "music": {
     "value": 1,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 0,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Annual cash value varies; no tuition-remission percentage is published.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "A named alumni-funded music scholarship exists; no instrumental-tuition or hire coverage is published.",
     "status": "partial"
    },
    "applicationBasis": {
     "value": "Academic merit and financial need; continued educational performance, progress, contribution and co-curricular involvement.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.perthmodern.wa.edu.au/sphinx-scholarships/",
       "title": "Sphinx scholarships",
       "quote": "The multi-year Scholarships will be renewed in Years 8, 9 and 10, conditional upon satisfactory educational performance and progress.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.perthmodern.wa.edu.au/year-7-entry-scholarship/",
       "title": "Year 7 entry scholarship",
       "quote": "The Scholarships will be awarded annually on the grounds of academic merit and need.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S3": {
       "url": "https://www.perthmodern.wa.edu.au/the-sphinx-foundation/",
       "title": "Scholarship fund",
       "quote": "Since its launch, the Sphinx Scholarship Fund has enabled the lifetime award of ... 550 Sphinx Scholarships and Bursaries ... valued at $675,000.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": 669,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2025: a 2025–2029 Campus Masterplan was unveiled; this is planning evidence, not a completed build.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.perthmodern.wa.edu.au/venue-hire/",
       "title": "Venue inventory",
       "quote": "Embleton Music Centre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.perthmodern.wa.edu.au/perth-mod-since-2005/",
       "title": "Campus and results timeline",
       "quote": "The Cyril Tyler Auditorium opens ... Perth Modern School launches its 2025-2029 Business Plan ... and unveils a future-focused Campus Masterplan.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "academic": {
     "value": "2025: 10 perfect ATARs of 99.95; 83 students at ATAR 99+; 22 General Exhibitions; more than 100 Certificates of Distinction; published as the school's ninth number-one WACE result since 2016.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.perthmodern.wa.edu.au/wace-results/",
       "title": "WACE results",
       "quote": "Perth Modern School has achieved the number one academic ranking for the WACE in 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 and 2025.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025 results"
      },
      "D2": {
       "url": "https://www.perthmodern.wa.edu.au/perth-mod-since-2005/",
       "title": "2025 results timeline",
       "quote": "The Class of 2025 achieves ... 10 students attaining a perfect ATAR of 99.95, a state-record 83 students achieving an ATAR of 99+, 22 students awarded a General Exhibition ... and over 100 Certificates of Distinction.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": false,
   "separateFormalUniform": true,
   "groomingRules": "Uniform must be neat, clean and ironed; make-up and jewellery are to be minimal, and visible piercings are discouraged.",
   "assemblyFrequency": "Weekly Advocacy period includes House activities and assemblies; whole-school assembly frequency is not separately stated.",
   "chapelOrService": 0,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Anzac commemoration",
    "Honours Assemblies",
    "Presentation Ceremony",
    "Sphinx Society events"
   ],
   "note": "The school combines relaxed everyday day wear with a compulsory formal set used for named ceremonies and honours occasions."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 0,
     "status": "confirmed"
    },
    "construction": {
     "value": 0,
     "status": "confirmed"
    },
    "automotive": {
     "value": 0,
     "status": "confirmed"
    },
    "business": {
     "value": 0,
     "status": "confirmed"
    },
    "it": {
     "value": 0,
     "status": "confirmed"
    },
    "health": {
     "value": 0,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": 0,
     "status": "confirmed"
    },
    "sportRec": {
     "value": 0,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": 0,
     "status": "confirmed"
    },
    "creative": {
     "value": 0,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": 0,
     "status": "confirmed"
    },
    "maritime": {
     "value": 0,
     "status": "confirmed"
    }
   },
   "note": "The 2026 handbook contains no named school VET certificate program. This is a checked absence, not an unchecked field.",
   "delivery": {
    "onCampus": false,
    "externalPartner": "",
    "releaseDay": false,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": 0,
    "workplaceLearning": 0,
    "careersStaffNamed": false,
    "industryLinks": [],
    "atarVetSplit": "Default program: six ATAR courses, or five ATAR courses and one General course."
   }
  }
 },
 "John Curtin College of the Arts": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Students enter through the local public-school intake or through the statewide Gifted and Talented Arts selection process."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Specialist Music, Media Arts and other arts programs require the relevant testing, audition, workshop or portfolio. Program admission is not implied by local enrolment."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Gifted and Talented Arts programs operate alongside local-intake mainstream entry.",
    "source": "https://www.jc.wa.edu.au/join-us/how-to-apply/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Specialist cohorts are grouped for their arts discipline. Whole-school academic setting by subject was not fully verified.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules between academic levels were not located."
   },
   "ahead": {
    "status": "partial",
    "detail": "Specialist arts, extension and academic enrichment are available; the exact route for a non-specialist student who becomes far ahead is not fully verified.",
    "source": "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   },
   "behind": {
    "status": "partial",
    "detail": "PROPEL and Student Services provide academic and pastoral support; exact intervention thresholds were not found.",
    "source": "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   },
   "framework": {
    "status": "confirmed",
    "detail": "Creativity and whole-child development are explicit organising principles; PROPEL integrates academic and pastoral support.",
    "source": "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   }
  },
  "subjects": {
   "source": {
    "summary": "Upper-school course and pathway resources are published through current-student materials.",
    "url": "https://www.jc.wa.edu.au/my-jcca/current-students/",
    "access": "Public course resources"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "english": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "languages": {
     "status": "partial",
     "detail": "Language options exist; the current senior language list was not verified in this pass.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum; consult the current course guide for exact course names.",
     "source": "https://www.jc.wa.edu.au/my-jcca/current-students/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "School sport and a specialist football pathway are available.",
    "source": "https://www.jc.wa.edu.au/programs/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Seven Gifted and Talented Arts disciplines include Music, Music Theatre, Ballet, Dance, Drama, Media Arts and Visual Arts.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/"
   },
   "computing": {
    "status": "partial",
    "detail": "Media Arts provides substantial screen and digital production. A separate specialist computing or robotics pathway was not verified.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Productions, project roles and arts leadership provide authentic responsibility; a dedicated entrepreneurship program was not verified.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Wind Orchestras, Symphony Orchestra, Junior String Orchestra and Chamber Orchestra are published.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Four Wind Orchestras are published.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "JC Chorus, Gifted and Talented choir, Chamber Choir and Gospel Choir are published.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Band is published.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary Ensembles 1–6 are published.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "production": {
    "status": "partial",
    "detail": "Composition and production-adjacent work exist; advanced screen, sound and recording work may sit more clearly in Media Arts than Music.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Specialist students receive instrumental or vocal development and must participate in ensembles.",
    "source": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "PROPEL groups.",
    "source": "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "partial",
    "detail": "PROPEL is timetabled across Years 7–12; exact weekly frequency was not verified.",
    "source": "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Multi-age grouping is published, but the same-adult continuity rule was not stated."
   },
   "escalation": {
    "status": "partial",
    "detail": "PROPEL teachers connect academic and pastoral concerns to Student Services; a formal published chain was not found.",
    "source": "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2021,
   "summary": "The review validated a whole-child culture in which wellbeing and academic excellence are guided through creativity.",
   "positives": [
    "Reviewers described exemplary performance across the review domains.",
    "Student support and creative identity were central rather than peripheral."
   ],
   "concerns": [
    "The current review is older than those available for several comparison schools."
   ],
   "sources": [
    "https://www.jc.wa.edu.au/resource/public-school-review-2021/"
   ]
  },
  "academicStanding": {
   "summary": "Academically above state averages while serving a specialist-arts population. Recent reporting indicates a median ATAR above the state median and high WACE completion.",
   "score": 80,
   "url": "https://www.jc.wa.edu.au/resource/annual-report/",
   "label": "Annual reports"
  },
  "entryReality": "Students enter through the local public-school intake or through the statewide Gifted and Talented Arts selection process.",
  "programAccess": "Specialist Music, Media Arts and other arts programs require the relevant testing, audition, workshop or portfolio. Program admission is not implied by local enrolment.",
  "seniorSubjects": {
   "summary": "Upper-school course information is published through the College’s course-guide and enrolment resources.",
   "url": "https://www.jc.wa.edu.au/my-jcca/current-students/",
   "access": "Current-student course resources"
  },
  "musicReality": {
   "style": "Selective instrumental and vocal performance, composition and advanced arts practice.",
   "production": "Some verified production",
   "note": "Music itself remains performance-led; serious recording, screen and production work may be more available through Media Arts than through the Music course alone."
  },
  "productionScore": 78,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Applied Information Technology is published in the current Year 11 and Year 12 course resources."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "The College identifies FRC Team 9970 and a FIRST Robotics course launching in 2026."
   },
   "engineering": {
    "status": "partial",
    "detail": "Technologies pathways include engineering and Materials Design and Technology, but a current public Year 12 Engineering Studies course was not verified."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "The selective Media Arts pathway includes film, visual and audio editing, animation, game art and advanced software."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current public source checked named a general makerspace or fab lab."
   },
   "note": "Robotics and digital media are distinctive verified strengths. Senior AIT is confirmed; senior engineering depth is only partially established."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts is one of the College’s Gifted and Talented Arts programs."
   },
   "design": {
    "status": "confirmed",
    "detail": "Visual and Media Arts programs include digital design, animation, game art, photography and production design."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is a selective Gifted and Talented program with extensive public-performance work."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Arts is a selective program covering film, editing, animation and screen production."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Ballet and Contemporary Dance are separate selective Gifted and Talented programs."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Entry to the specialist arts programs uses discipline-specific auditions, workshops or portfolio assessment."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names Curtin Theatre, dance and drama studios, visual-arts workshops and media-production facilities."
   },
   "note": "All arts fields are substantial selective pathways, not merely general electives. Access depends on the relevant Gifted and Talented Arts selection process."
  },
  "sport": {
   "body": "School Sport WA and school-managed specialist competition",
   "division": "SSWA McMahon Shield Tier 2 equal third in 2024",
   "specialistProgram": "Approved Specialist Football Program — direct College application followed by trials",
   "note": "The College’s McMahon Shield placing was retained as broad context only and was not used to infer unnamed teams.",
   "fields": {
    "afl": {
     "status": "not_publicly_verified"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "not_publicly_verified"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "not_publicly_verified"
    },
    "athletics": {
     "status": "not_publicly_verified"
    },
    "crosscountry": {
     "status": "not_publicly_verified"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "partial"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR",
     "English as an Additional Language or Dialect General"
    ],
    "status": "partial"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Integrated Science General",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General"
    ],
    "status": "partial"
   },
   "hass": {
    "subjects": [
     "Geography ATAR",
     "Modern History ATAR",
     "Modern History General",
     "Philosophy and Ethics ATAR",
     "Politics and Law ATAR"
    ],
    "status": "partial"
   },
   "languages": {
    "subjects": [
     "Italian Second Language ATAR"
    ],
    "status": "partial"
   },
   "arts": {
    "subjects": [
     "Dance ATAR",
     "Dance General",
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Music General",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Design (Photography) ATAR",
     "Design (Photography) General",
     "Design (Dimensional) ATAR",
     "Design (Dimensional) General"
    ],
    "status": "partial"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology ATAR",
     "Food Science and Technology General",
     "Materials Design and Technology (Textiles) General",
     "Design (Photography) ATAR",
     "Design (Photography) General",
     "Design (Dimensional) ATAR",
     "Design (Dimensional) General"
    ],
    "status": "partial"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Physical Education Studies General"
    ],
    "status": "partial"
   },
   "atarVetBalance": "genuine mix"
  },
  "myschool": {
   "icsea": 1129,
   "topQuarterPct": 50,
   "teachingStaffFTE": 120.8,
   "nonTeachingFTE": 46.3,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 14.6,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "College Engagement, with year-banded Directors and Coordinators",
   "unitSize": null,
   "contactFrequency": "Triage and appointments as required; no whole-school recurring meeting cadence stated",
   "sameAdultAcrossYears": "no",
   "handoverPoint": "Coordinator band changes after Year 8 and Year 10; Director band changes on entry to Year 10",
   "escalationChain": "College Engagement → triage assessment → appropriate coordinator, nurse, psychologist or external service",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "confirmed"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 1,
     "status": "confirmed"
    },
    "music": {
     "value": 0,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 1,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 0,
     "status": "confirmed"
    },
    "bursary": {
     "value": 0,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Variable credit against school contributions and charges; no fixed maximum published.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Self-nomination or nomination by another person; written response to criteria; two referees for self-nomination; good standing.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.jc.wa.edu.au/my-jcca/parent-and-citizens/college-scholarships/",
       "title": "College scholarships",
       "quote": "The College Scholarships are open to all Year 8 to 12 students ... The categories are ... Creativity ... Wellbeing ... Excellence.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page updated 10 March 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": 456,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.jc.wa.edu.au/services-facilities/theatre/",
       "title": "Performance theatres",
       "quote": "The main venue on the College campus, Curtin Theatre seats 456 and is superbly equipped for drama, dance and musical performances.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/",
       "title": "Music program facilities",
       "quote": "Students who reach Level 9 or 10 have their names permanently placed on the Honour Board in Mia Moorna.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Associate Principal of Creativity and the Arts",
      "Director of Music and Music Theatre",
      "Assistant Director — Music",
      "Assistant Director — Music Theatre"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.jc.wa.edu.au/our-people/",
       "title": "Specialist leadership",
       "quote": "Associate Principal of Creativity and the Arts ... Director of College Engagement ... Director of Music and Musical Theatre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "R2": {
       "url": "https://www.jc.wa.edu.au/programs/gifted-talented-programs/music/",
       "title": "Music leadership",
       "quote": "Director of Music and Music Theatre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "music": {
     "value": "2025: one AMEB Grade 8 Comprehensive result at A+; one ABRSM Level 4 Music Performance Diploma at Distinction; one successful audition for the sole bass-trombone place in a leading state youth orchestra for 2026.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.jc.wa.edu.au/music-students-raising-the-bar/",
       "title": "2025 music achievements",
       "quote": "Students are earning national qualifications ... and winning positions in leading State ensembles, all before graduation.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "18 December 2025"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 1,
   "blazerRequired": null,
   "separateFormalUniform": null,
   "groomingRules": "",
   "assemblyFrequency": "",
   "chapelOrService": 0,
   "houseSystem": 1,
   "prefectStructure": 1,
   "honourBoards": true,
   "boarding": true,
   "singleSex": false,
   "formalEvents": [
    "orientation assemblies",
    "student leadership ceremonies",
    "Year 12 graduation",
    "major performance seasons"
   ],
   "note": "The most visible published traditions are artistic performance, House identity, leadership and permanent music recognition rather than a documented blazer-and-tie presentation model."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 0,
     "status": "confirmed"
    },
    "construction": {
     "value": 0,
     "status": "confirmed"
    },
    "automotive": {
     "value": 0,
     "status": "confirmed"
    },
    "business": {
     "value": 0,
     "status": "confirmed"
    },
    "it": {
     "value": 0,
     "status": "confirmed"
    },
    "health": {
     "value": 0,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": 0,
     "status": "confirmed"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": 0,
     "status": "confirmed"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": 0,
     "status": "confirmed"
    },
    "maritime": {
     "value": 0,
     "status": "confirmed"
    }
   },
   "note": "Current list: CUA30120 Certificate III Dance — Ballet Focus; CUA30120 Certificate III Dance — Contemporary Focus; CUA20220 Certificate II Creative Industries — Production Focus; CUA20720 Certificate II Visual Arts — Design Focus; CUA30920 Certificate III Music; SIS20122 Certificate II Sport and Recreation.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "iVET Institute, COSAMP, TAFE and other Registered Training Organisations",
    "releaseDay": true,
    "facilities": [
     "Curtin Theatre",
     "Mia Moorna specialist music facility",
     "visual-art and design studios"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "iVET Institute",
     "COSAMP",
     "TAFE",
     "BAE Systems"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Corpus Christi College": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open Catholic independent-school application subject to vacancies and the College’s enrolment process."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Academic extension, music and other programs sit inside the normal enrolment pathway; program availability should not be mistaken for guaranteed entry."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "partial",
    "detail": "Academic Excellence and enrichment pathways are published within a non-selective Catholic school."
   },
   "setting_streaming": {
    "status": "not_publicly_verified",
    "detail": "Exact setting by subject and year was not publicly verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules were not found."
   },
   "ahead": {
    "status": "partial",
    "detail": "Academic extension and broad senior pathways are available; the process for newly identified high achievers was not verified."
   },
   "behind": {
    "status": "confirmed",
    "detail": "Pastoral and learning support structures include Heads of Year, wellbeing leadership, counsellors and psychology."
   },
   "framework": {
    "status": "partial",
    "detail": "Whole-person learning and pastoral care are explicit; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Public Year 11 pathway information with ATAR, General and vocational options.",
    "url": "https://www.corpus.wa.edu.au/year-11-pathways",
    "access": "Public pathway information"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "english": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "languages": {
     "status": "partial",
     "detail": "Language study exists; current senior language availability was not confirmed.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "music": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Available within the published senior pathways; exact named list should be checked in the current guide.",
     "source": "https://www.corpus.wa.edu.au/year-11-pathways"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad school sport and teams are published.",
    "source": "https://www.corpus.wa.edu.au/sport"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Drama, theatre productions, Visual Art, Music and performing-arts facilities are published.",
    "source": "https://www.corpus.wa.edu.au/the-arts"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Digital Technologies and strong ICT facilities are published.",
    "source": "https://www.corpus.wa.edu.au/year-11-pathways"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership and service are prominent; a dedicated entrepreneurship pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Orchestra and symphonic activity are published.",
    "source": "https://www.corpus.wa.edu.au/music"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert and swing bands are published.",
    "source": "https://www.corpus.wa.edu.au/music"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choirs and vocal ensembles are published.",
    "source": "https://www.corpus.wa.edu.au/music"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz and swing ensembles are published.",
    "source": "https://www.corpus.wa.edu.au/music"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary and rock-band activity is published.",
    "source": "https://www.corpus.wa.edu.au/music"
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "No dedicated DAW, recording or production pathway was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition across a range of instruments is published.",
    "source": "https://www.corpus.wa.edu.au/music"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "Daily Homeroom within one of eight Houses.",
    "source": "https://www.corpus.wa.edu.au/pastoral-care"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "confirmed",
    "detail": "Daily.",
    "source": "https://www.corpus.wa.edu.au/pastoral-care"
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "confirmed",
    "detail": "Homeroom teacher connects to Head of Year or Head of Wellbeing, then counsellor or psychologist as required.",
    "source": "https://www.corpus.wa.edu.au/pastoral-care"
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "2025–2026",
   "summary": "SEEK contains strongly contradictory recent evidence; these are anonymous anecdotes.",
   "positives": [
    "Aggregate and recent reviews describe collaborative colleagues, professional development, good resources and supportive leadership."
   ],
   "concerns": [
    "A July 2026 former-teacher review alleged poor leadership and conflict driven by parents and students; busy administration is another recurring concern."
   ],
   "sources": [
    "https://www.seek.com.au/companies/corpus-christi-college-bateman-814873/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Strong independent-school academic offering, but the reviewed public evidence did not provide a recent directly comparable whole-cohort result distribution.",
   "score": 80,
   "url": "https://www.corpus.wa.edu.au/school-profile",
   "label": "School profile and annual reports"
  },
  "entryReality": "Open Catholic independent-school application subject to vacancies and the College’s enrolment process.",
  "programAccess": "Academic extension, music and other programs sit inside the normal enrolment pathway; program availability should not be mistaken for guaranteed entry.",
  "seniorSubjects": {
   "summary": "Senior subject-selection information is publicly available, with ATAR, General and vocational pathways.",
   "url": "https://www.corpus.wa.edu.au/year-11-pathways",
   "access": "Public pathway information"
  },
  "musicReality": {
   "style": "Performance-led classroom and instrumental music with ATAR Music.",
   "production": "Production not verified",
   "note": "No dedicated production, recording or DAW pathway was verified."
  },
  "productionScore": 35,
  "computing": {
   "csSubject": {
    "status": "partial",
    "detail": "Official senior evidence confirms Applied Information Technology, but the most detailed public course evidence located is historical rather than a current complete handbook."
   },
   "robotics": {
    "status": "not_publicly_verified",
    "detail": "Historical coding and robotics projects were found, but no current subject, club or competition team was publicly verified."
   },
   "engineering": {
    "status": "partial",
    "detail": "Current Technology and Enterprise material describes technical and engineering pathways, while older senior evidence lists Materials Design and Technology. Current Year 12 continuity is not fully verified."
   },
   "digitalDesign": {
    "status": "partial",
    "detail": "Historical official senior evidence includes digital media and design pathways; the current complete subject list was not publicly exposed in the checked material."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current named makerspace, fab lab or design studio was found."
   },
   "note": "This record deliberately remains partial: the College publishes current broad pathways, but its detailed public technology evidence is uneven and some direct subject evidence is old."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts is offered at ATAR and General level."
   },
   "design": {
    "status": "confirmed",
    "detail": "Graphic Design is offered in senior school and specialist visual-arts spaces are published."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is offered at ATAR and General level, supported by regular productions."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis General is listed as a senior pathway."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance ATAR and Certificate III Dance are offered, with auditioned and non-auditioned groups also available."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Senior dance certification and performance groups include interview, recommendation or audition requirements."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names the Caroline Payne Theatre, Performing Arts Centre, dance studios and Visual Arts Studio."
   },
   "note": "All major arts fields have verified senior or substantial co-curricular pathways. Some dance opportunities are selective while others are open."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Southern Coastal Associated Schools",
   "division": "ACC Swimming A Division in 2026",
   "specialistProgram": "",
   "note": "Recent evidence was prioritised. Older official sport-list evidence remains partial rather than being promoted to current-confirmed.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "partial"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "partial"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "partial"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "partial"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "partial"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "partial"
    },
    "golf": {
     "status": "partial"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Foundation",
     "Mathematics Essential General",
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English Foundation",
     "English General",
     "English ATAR",
     "Literature ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General",
     "Science in Practice General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Modern History General",
     "Politics and Law ATAR",
     "Careers and Employability General",
     "Business Management and Enterprise General",
     "Humanities and Social Sciences in Action General"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "French Second Language ATAR",
     "Italian Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Dance ATAR",
     "Certificate III in Dance",
     "Drama ATAR",
     "Drama General",
     "Music ATAR",
     "Certificate III in Music",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Graphic Design General",
     "Media Production and Analysis General"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Children, Family and Community General",
     "Food Science and Technology General",
     "Materials Design and Technology (Metal) General",
     "Materials Design and Technology (Textiles) General",
     "Materials Design and Technology (Wood) General",
     "Engineering Studies General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Physical Education Studies ATAR",
     "Physical Education Studies General",
     "Outdoor Education General",
     "Certificate II Sports Coaching"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1116,
   "topQuarterPct": 46,
   "teachingStaffFTE": 121.4,
   "nonTeachingFTE": 59.8,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 14.7,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Homeroom within the House system",
   "unitSize": null,
   "contactFrequency": "",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Homeroom teacher and Head of Year → wider pastoral support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 0,
     "status": "confirmed"
    },
    "music": {
     "value": 1,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 1,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Full annual tuition for the First Nations bursary.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Support is offered for specific instruments; the public page does not publish the instrument list or whether hire is included.",
     "status": "partial"
    },
    "applicationBasis": {
     "value": "Expression of interest for music; application, proof of eligibility and possible interview for the First Nations bursary.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.corpus.wa.edu.au/bursaries",
       "title": "Bursary inventory",
       "quote": "Corpus Christi College currently offers two bursaries to assist College families and students with their studies ... First Nations Bursary ... Music Bursary.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.corpus.wa.edu.au/first-nations-bursary",
       "title": "First Nations bursary",
       "quote": "The Student Bursary covers the full cost of the annual tuition fees for the duration of a student’s schooling.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S3": {
       "url": "https://www.corpus.wa.edu.au/music-bursary",
       "title": "Instrumental-program bursary",
       "quote": "If your child is enrolling for Years 7 and above ... we encourage you to submit an expression of interest for the Bursary program.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page; underlying form remains linked"
      },
      "S4": {
       "url": "https://www.corpus.wa.edu.au/news-blog/2025/e-news-23-september",
       "title": "2026 music bursary",
       "quote": "These bursaries are offered for specific instruments, and successful applicants will receive support to further their musical journey.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "23 September 2025"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "pool": {
     "value": 2,
     "status": "confirmed"
    },
    "poolLength": {
     "value": "25m eight-lane indoor pool plus 12m learn-to-swim pool",
     "status": "confirmed"
    },
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": "400+",
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 1,
     "status": "partial"
    },
    "recentBuild": {
     "value": "2025–2026: Senior Atrium enclosure and broader Junior School capital-development works.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.corpus.wa.edu.au/aquatic-centre",
       "title": "Aquatic Centre",
       "quote": "features a covered and heated 25 metre, eight-lane indoor lap and water polo pool, a separate 12 metre learn-to-swim pool and terrace seating for 180 people.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.corpus.wa.edu.au/theatre",
       "title": "Theatre",
       "quote": "In addition to seating for 400+ guests, features include bespoke acoustic panelling, an enhanced sound system, a multi-function hydraulic orchestra pit, and digital LED screens and lighting.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F3": {
       "url": "https://www.corpus.wa.edu.au/news-blog/2025/e-news-3-june",
       "title": "Capital development",
       "quote": "Senior Atrium refurbishment and enclosure – Commencing December 2025, to be completed by end of 2026.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "3 June 2025"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Head of Music (K–12)",
      "Head of Visual Arts",
      "Head of Performing Arts",
      "Head of Sport (K–12)",
      "Head of Technology and Enterprise",
      "Head of Theatre Operations"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.corpus.wa.edu.au/collegecontacts",
       "title": "Specialist leadership contacts",
       "quote": "Head of Music (K-12) ... Head of Visual Arts ... Head of Performing Arts ... Head of Sport (K-12) ... Head of Technology and Enterprise.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "R2": {
       "url": "https://www.corpus.wa.edu.au/theatre",
       "title": "Theatre operations",
       "quote": "Head of Theatre Operations.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "music": {
     "value": "2025 Catholic Performing Arts Festival: 54 solo entries earned 28 certificates; 18 ensemble entries earned 10 Excellence or Outstanding certificates; an instrumental duet won a festival shield.",
     "status": "confirmed"
    },
    "arts": {
     "value": "2025 Catholic Performing Arts Festival: Full-Length Drama Production Shield. 2023: overall winner of the St George’s Art Awards.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.corpus.wa.edu.au/news-blog/2025/e-news-9-september",
       "title": "2025 Catholic Performing Arts Festival",
       "quote": "54 solo entries ... 28 certificates ... 18 ensemble entries ... 10 excellence or outstanding certificates ... Full-Length Drama Production Shield.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "9 September 2025"
      },
      "D2": {
       "url": "https://www.corpus.wa.edu.au/news-blog/2023/e-news-25-july",
       "title": "2023 visual-art award",
       "quote": "overall winner of the St George’s Art Awards.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "25 July 2023"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Hair must be neat; earrings are limited to small simple studs or sleepers; formal-photo presentation requires the complete tie-and-blazer uniform.",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Opening Mass",
    "Feast of the Assumption Mass",
    "Prefect Commissioning",
    "Corpus Christi Day",
    "Year 12 graduation"
   ],
   "note": "Published formality combines a blazer-and-tie presentation model with Catholic feast-day ceremonies, active Houses and commissioned Prefects."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current named school qualifications: Certificate III in Dance; Certificate III in Music; Certificate II Sports Coaching. The College also arranges external TAFE certificates, but the current public page does not name their fields, so the remaining categories stay null.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "TAFE and external Registered Training Organisations",
    "releaseDay": true,
    "facilities": [
     "College Theatre",
     "dance studios",
     "music facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFE and workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Aquinas College": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open boys’ independent-school application subject to vacancies and waiting lists, with Year 7 as the major intake."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Scholarships and extension opportunities are separate from securing an enrolment place."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "partial",
    "detail": "The school is non-selective but offers academic extension, scholarships and enrichment."
   },
   "setting_streaming": {
    "status": "not_publicly_verified",
    "detail": "Exact setting by subject and year was not verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement criteria were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Extension, competitions, scholarships and broad co-curricular pathways support high-potential boys.",
    "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support and pastoral structures are published; exact intervention model was not fully verified."
   },
   "framework": {
    "status": "partial",
    "detail": "Character education and boys’ education are explicit; a single detailed instructional framework was not verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Senior School offers more than 35 WACE courses across multiple pathway types.",
    "url": "https://www.aquinas.wa.edu.au/learning/senior-school",
    "access": "Public senior curriculum"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "english": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "languages": {
     "status": "partial",
     "detail": "Language study is available; current senior language list was not verified.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "music": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Available within the published broad senior curriculum.",
     "source": "https://www.aquinas.wa.edu.au/learning/senior-school"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "PSA sport, rowing and a major extended-day program are published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/extendedday"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Choirs, bands, drama, visual arts, podcasting and performance are published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "computing": {
    "status": "partial",
    "detail": "STEM, robotics and technology opportunities are published, but full access conditions were not verified.",
    "source": "https://www.aquinas.wa.edu.au/studentlife"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership, service and project opportunities are extensive; a dedicated entrepreneurship pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "partial",
    "detail": "Classical and instrumental ensembles are published; exact orchestra structure was not fully verified.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert band is published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Schola and other choirs are published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz combo and big-band activity are published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Rock bands and contemporary instruments are published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "production": {
    "status": "partial",
    "detail": "Studio-recording experiences have occurred, but no dedicated production curriculum was verified.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition and scholarship pathways are published.",
    "source": "https://www.aquinas.wa.edu.au/studentlife/arts"
   }
  },
  "pastoral": {
   "unit": {
    "status": "partial",
    "detail": "House and pastoral structures are published; exact tutor unit name and routine were not verified."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "partial",
    "detail": "Pastoral leaders, counsellors and student services are published; a formal chain was not located."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not sufficiently recent",
   "summary": "A SEEK profile and older reviews exist, but no clearly dated 2023-or-later teaching review was located in this pass.",
   "positives": [
    "Older reviews and public material describe strong resources, committed staff and a clear ethos."
   ],
   "concerns": [
    "Older review themes include work-life balance, career progression and management concerns."
   ],
   "sources": [
    "https://www.seek.com.au/companies/aquinas-college-perth-796748/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Strong academic and completion outcomes in a broad boys’ school; exact current comparable distribution should be checked in the latest performance report.",
   "score": 84,
   "url": "https://www.aquinas.wa.edu.au/learning/academic-performance",
   "label": "Academic performance"
  },
  "entryReality": "Open boys’ independent-school application subject to vacancies and waiting lists, with Year 7 as the major intake.",
  "programAccess": "Scholarships and extension opportunities are separate from securing an enrolment place.",
  "seniorSubjects": {
   "summary": "Senior curriculum offers more than 35 WACE courses across six pathway types; official curriculum and course information is available.",
   "url": "https://www.aquinas.wa.edu.au/learning/senior-school",
   "access": "Public senior curriculum"
  },
  "musicReality": {
   "style": "Broad performance culture including choirs, concert ensembles and rock bands.",
   "production": "Limited verified production",
   "note": "Contemporary instruments and bands are visible, but a dedicated production curriculum was not verified."
  },
  "productionScore": 45,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Current senior course progression includes Computer Science and Applied Information Technology through Years 11 and 12."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Robotics, LEGO and STEM are published among Middle School Extended Day clubs."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Senior Materials Design and Technology in wood and metal is published; engineering and technology placements also appear in myFUTURE."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Senior media and applied digital technology pathways are published."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "A primary-school Collaboratory exists, but no equivalent secondary makerspace was verified, so it is not transferred into this field."
   },
   "note": "Senior computing, materials technology and media are verified. Robotics is a current club-level offering; a secondary makerspace is not publicly verified."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Year 11 and Year 12 ATAR Visual Arts and recurring senior exhibitions are publicly documented."
   },
   "design": {
    "status": "partial",
    "detail": "Design and Technology and senior art-and-design exhibition work are documented, but the exact current senior course range is not fully public."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is part of the curriculum and the College presents a regular Senior School production."
   },
   "film": {
    "status": "partial",
    "detail": "Media and film-making activity is publicly evident, but a current standalone Year 12 media pathway was not verified."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is available through clubs and productions, but no current senior Dance course was verified."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual art, drama, dance or film admission pathway requiring audition or portfolio was verified."
   },
   "artFacility": {
    "status": "partial",
    "detail": "Arts, media and theatre activity is substantial, but the current pages checked did not name a completed specialist arts complex. The proposed BRAVO facility is not counted as current."
   },
   "note": "Visual Arts and Drama have strong verified senior evidence. Film, design and dance are present but their exact senior depth is less publicly clear."
  },
  "sport": {
   "body": "Public Schools Association of WA",
   "division": "PSA first-team fixtures plus PSA athletics, swimming and rowing carnivals",
   "specialistProgram": "",
   "note": "Netball and sailing are left null because they are not PSA competition sports and no separate current school offering was verified here.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [],
    "status": "portal_only"
   },
   "english": {
    "subjects": [],
    "status": "portal_only"
   },
   "sciences": {
    "subjects": [],
    "status": "portal_only"
   },
   "hass": {
    "subjects": [],
    "status": "portal_only"
   },
   "languages": {
    "subjects": [],
    "status": "portal_only"
   },
   "arts": {
    "subjects": [],
    "status": "portal_only"
   },
   "technologies": {
    "subjects": [],
    "status": "portal_only"
   },
   "pe": {
    "subjects": [],
    "status": "portal_only"
   },
   "atarVetBalance": "genuine mix"
  },
  "myschool": {
   "icsea": 1110,
   "topQuarterPct": 47,
   "teachingStaffFTE": 128.3,
   "nonTeachingFTE": 83.1,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 10.4,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Tutor time within the House structure in Senior School; Veritas pastoral curriculum in Middle School",
   "unitSize": null,
   "contactFrequency": "Middle School: two Veritas lessons per week; Senior School: weekly tutor time",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 1,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Up to 100% tuition and day-student additional costs through a needs-based bursary; academic and music scholarships up to 50% tuition.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Instrumental and pipe-organ awards can include full specialist tuition and full instrument hire; a choral pathway also carries tuition remission.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Academic testing; music examination and audition; reports and NAPLAN; written reflection; interview; financial evidence for bursaries.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.aquinas.wa.edu.au/apply/scholarships",
       "title": "Scholarships",
       "quote": "Music scholarships provide up to 50% tuition remission and full instrument tuition and hire.",
       "publishedOrCurrent": "current 2026"
      },
      "S2": {
       "url": "https://www.aquinas.wa.edu.au/apply/madalah-scholarships",
       "title": "Indigenous scholarship partnership",
       "quote": "The College is a partner school for secondary Indigenous scholarships supporting Years 7–12.",
       "publishedOrCurrent": "current 2026"
      },
      "S3": {
       "url": "https://www.aquinas.wa.edu.au/apply/bursaries",
       "title": "Bursaries",
       "quote": "Bursaries are needs-based and vary according to family circumstances.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "rowingShed": {
     "value": 2,
     "status": "confirmed"
    },
    "pool": {
     "value": 1,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 1,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 1,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "ovals": {
     "value": 1,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "boarding": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2026: fundraising and planning are public for a new purpose-built arts, performance and excellence centre.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.aquinas.wa.edu.au/news/over-25-years-in-the-making",
       "title": "River Centre",
       "quote": "The facility has four rowing bays, a dinghy bay, an outdoor-education bay and a weights room.",
       "publishedOrCurrent": "current 2026"
      },
      "F2": {
       "url": "https://portal.aquinas.wa.edu.au/wp-content/uploads/2025/03/Open-Day-Digital-Map-2025_lowres.pdf",
       "title": "2025 campus map",
       "quote": "The map labels a swimming pool, gym, oval, visual arts, music, design technology, rowing and boarding facilities.",
       "publishedOrCurrent": "2025"
      },
      "F3": {
       "url": "https://www.aquinas.wa.edu.au/studentlife/boarding",
       "title": "Boarding",
       "quote": "The boarding precinct contains four residential houses.",
       "publishedOrCurrent": "current 2026"
      },
      "F4": {
       "url": "https://www.aquinas.wa.edu.au/community/aquinas-college-foundation/",
       "title": "Foundation capital projects",
       "quote": "A purpose-built centre for arts, performance and excellence is being funded.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Head of Arts",
      "Head of Rowing",
      "Director of Schola Cantorum"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.aquinas.wa.edu.au/apply/scholarships",
       "title": "Scholarship selection roles",
       "quote": "Music selection involves the Head of Arts.",
       "publishedOrCurrent": "current 2026"
      },
      "R2": {
       "url": "https://www.aquinas.wa.edu.au/news/over-25-years-in-the-making",
       "title": "Rowing leadership",
       "quote": "The rowing-facility material identifies a Head of Rowing role.",
       "publishedOrCurrent": "current 2026"
      },
      "R3": {
       "url": "https://www.aquinas.wa.edu.au/news/an-evening-with-schola-and-australian-baroque",
       "title": "Choral leadership",
       "quote": "The performance article identifies the Director of Schola Cantorum role.",
       "publishedOrCurrent": "5 August 2025"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "sport": {
     "value": "2025 PSA Athletics: second overall; a Division 1 shot-put record of 16.40m. Junior carnival: fourth overall with two records.",
     "status": "confirmed"
    },
    "music": {
     "value": "2025: more than 60 students performed in a documented collaboration between the College choral program and a professional period-instrument ensemble.",
     "status": "partial"
    },
    "academic": {
     "value": "2025: Excellence Awardee in the Innovation category of a national education awards program.",
     "status": "partial"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.aquinas.wa.edu.au/news/record-breaking-success-at-psa-and-jpssa-athletics-carnivals",
       "title": "2025 athletics results",
       "quote": "The senior team placed second overall and set a Division 1 shot-put record of 16.40 metres.",
       "publishedOrCurrent": "16 September 2025"
      },
      "D2": {
       "url": "https://www.aquinas.wa.edu.au/news/an-evening-with-schola-and-australian-baroque",
       "title": "2025 choral performance",
       "quote": "More than 60 students participated in a major choral and period-instrument collaboration.",
       "publishedOrCurrent": "5 August 2025"
      },
      "D3": {
       "url": "https://www.aquinas.wa.edu.au/community/news/p2",
       "title": "2025 innovation recognition",
       "quote": "The College was named an Excellence Awardee in the Innovation category.",
       "publishedOrCurrent": "14 August 2025"
      }
     },
     "status": "partial"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Students must be clean-shaven and have an approved haircut; the formal shirt, tie, trousers, socks and black shoes are specified.",
   "assemblyFrequency": "",
   "chapelOrService": 2,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": true,
   "singleSex": true,
   "formalEvents": [
    "weekly Mass",
    "weekly Chapel",
    "Edmund Rice Day",
    "Presentation Night",
    "student leadership induction",
    "Head of the River"
   ],
   "note": "The published model combines daily formal presentation in winter with weekly worship, House traditions and residential-school ceremonies."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": 1,
     "status": "confirmed"
    },
    "automotive": {
     "value": 1,
     "status": "confirmed"
    },
    "business": {
     "value": 1,
     "status": "confirmed"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 1,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": 1,
     "status": "partial"
    }
   },
   "note": "Published named or field-specific pathways include Certificate II Automotive Vocational Preparation; Certificate III and IV Business; Certificate III and IV Fitness; and pre-apprenticeship/workplace pathways in electrical, plumbing, carpentry, cabinet making and marine mechanics. Most qualifications are undertaken through TAFE or external providers rather than being listed as school-delivered certificates.",
   "delivery": {
    "onCampus": false,
    "externalPartner": "TAFEWA, INSTEP West, private RTOs and industry employers",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": 2,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFEWA",
     "INSTEP West",
     "College of Electrical Training",
     "fitness-industry training provider",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Rossmoyne Senior High School": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Local-intake students are guaranteed the standard entry route. Out-of-area entry is restricted to approved specialist or Gifted and Talented pathways."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Specialist Classical Music has its own eligibility and audition process. Ordinary school music does not provide out-of-area entry."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Gifted and Talented Languages, Specialist Classical Music, Specialist Mathematics and other extension pathways operate inside a comprehensive school.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Extension and specialist cohorts are clear; complete subject-by-subject setting rules were not publicly verified.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Student pathways and targeted classes exist, but full movement criteria were not found.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Specialist and gifted pathways, competitions, university links and individual pathways provide formal extension.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   },
   "behind": {
    "status": "confirmed",
    "detail": "FOCUS, VETREDI, VET ACCESS, learning support and case management are published.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   },
   "framework": {
    "status": "confirmed",
    "detail": "Teaching for Impact, Quality Teaching Strategy and Capabilities for Learning and Life.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   }
  },
  "subjects": {
   "source": {
    "summary": "Official Year 11 and 12 pathway guides.",
    "url": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/",
    "access": "Public handbook"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Biology, Chemistry, Human Biology and Physics are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Economics, Modern History and Politics and Law are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Chinese, French, German and Japanese are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts is offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered, including the specialist classical pathway.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and Materials Design and Technology are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computer Science and Applied Information Technology are offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Specialist Volleyball and a large school-sport program are published.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/learning-areas/health-and-physical-education/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Visual Art, Drama and Music are available through senior school.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computer Science, Applied Information Technology, design and technology pathways are offered.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership, language, university and pathway partnerships are strong; a dedicated entrepreneurship program was not verified.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Four orchestras are published.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/learning-areas/music/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Four concert bands are published.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/learning-areas/music/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Several choirs are published.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/learning-areas/music/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Ensemble is published.",
    "source": "https://www.rossmoyne.wa.edu.au/learning/learning-areas/music/"
   },
   "contemporary": {
    "status": "partial",
    "detail": "Applicants may audition in a style of choice, but the defining specialist pathway is classical.",
    "source": "https://www.rossmoyne.wa.edu.au/enrolment/specialist-programs/specialist-classical-music-program/"
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "No dedicated DAW, recording or production pathway was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition and class music are integral to the specialist program.",
    "source": "https://www.rossmoyne.wa.edu.au/enrolment/specialist-programs/specialist-classical-music-program/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "House Home Room.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   },
   "group_size": {
    "status": "confirmed",
    "detail": "Published as approximately 21–25 students.",
    "source": "https://www.rossmoyne.wa.edu.au/student-services/pastoral-care/"
   },
   "frequency": {
    "status": "confirmed",
    "detail": "Twice weekly, Monday and Wednesday.",
    "source": "https://www.rossmoyne.wa.edu.au/student-services/pastoral-care/"
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Mixed-year groups are published, but same-adult continuity across multiple years was not explicitly stated."
   },
   "escalation": {
    "status": "confirmed",
    "detail": "Home Room and year leaders connect to pastoral care teams, learning support and Student Central, including psychologists, chaplain and nurse.",
    "source": "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2025,
   "summary": "The review found an inclusive, caring high-expectation culture with individualised pathways and strong case management.",
   "positives": [
    "Staff were described as attuned to student needs and committed to individualised success.",
    "Pastoral teams and Student Central use targeted case management."
   ],
   "concerns": [
    "Develop a Years 7–12 social and emotional learning program.",
    "Continue improving Aboriginal cultural responsiveness and targeted intervention."
   ],
   "sources": [
    "https://www.rossmoyne.wa.edu.au/wp-content/uploads/2025/12/Rossmoyne-Senior-High-School-Public-School-Review-report-November-2025.pdf"
   ]
  },
  "academicStanding": {
   "summary": "One of Perth’s strongest comprehensive public schools. The school reported 31 students with ATARs of 99 or above in 2025.",
   "score": 95,
   "url": "https://www.rossmoyne.wa.edu.au/news/2025-year-12-results/",
   "label": "2025 results"
  },
  "entryReality": "Local-intake students are guaranteed the standard entry route. Out-of-area entry is restricted to approved specialist or Gifted and Talented pathways.",
  "programAccess": "Specialist Classical Music has its own eligibility and audition process. Ordinary school music does not provide out-of-area entry.",
  "seniorSubjects": {
   "summary": "Official Years 11 and 12 curriculum handbooks are publicly available.",
   "url": "https://www.rossmoyne.wa.edu.au/learning/student-pathways/year-11-student-pathways/",
   "access": "Public handbook"
  },
  "musicReality": {
   "style": "Classical specialist and ensemble performance are the defining strengths.",
   "production": "Production not verified",
   "note": "This is a high-quality music pathway, but it is not a contemporary production pathway."
  },
  "productionScore": 25,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Computer Science ATAR and Applied Information Technology are listed for Years 11 and 12."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Robotics is offered from Year 8 through Year 10, and the school documents a Robotics Club competing nationally."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Practical Engineering and senior Materials Design and Technology pathways are published."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Digital Imaging and Animation and Multimedia Design and Development are named electives."
   },
   "makerspace": {
    "status": "partial",
    "detail": "Technology laboratories and wood/metal workshops are evident, but no facility is formally named a makerspace or fab lab."
   },
   "note": "The current Technologies page provides unusually clear year-by-year coverage. Competition robotics is separately documented."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts continues into senior school and is represented in published course material."
   },
   "design": {
    "status": "partial",
    "detail": "Photography and design-related electives are offered, but a current standalone Year 12 Design course was not clearly verified."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama ATAR and General pathways are listed in current senior materials."
   },
   "film": {
    "status": "confirmed",
    "detail": "Film and media production are offered in lower and middle years, but no current standalone Year 12 Media course was verified."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is offered and supported by a dance studio, but current senior Dance continuation was not verified."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "The current specialist-program list was checked and includes Classical Music, Volleyball and Mathematics, not visual or performing arts."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The school names a purpose-built Arts building and dance studio."
   },
   "note": "Drama and Visual Arts have senior evidence. Film and dance are real offerings but were not verified as Year 12 pathways."
  },
  "sport": {
   "body": "School Sport WA and school-managed specialist competition",
   "division": "Sport-specific SSWA divisions vary",
   "specialistProgram": "Specialist Volleyball Program — trials; local and out-of-area applicants; later entry requires relevant experience",
   "note": "The specialist volleyball evidence is strong. Other sport fields remain null rather than being inferred from a general HPE page.",
   "fields": {
    "afl": {
     "status": "not_publicly_verified"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "not_publicly_verified"
    },
    "soccer": {
     "status": "not_publicly_verified"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "partial"
    },
    "athletics": {
     "status": "partial"
    },
    "crosscountry": {
     "status": "not_publicly_verified"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR",
     "English as an Additional Language or Dialect General"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General",
     "Science in Practice General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Ancient History ATAR",
     "Business Management and Enterprise ATAR",
     "Career and Enterprise General",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese Background Language ATAR",
     "Chinese First Language ATAR",
     "Chinese Second Language ATAR",
     "French Second Language ATAR",
     "German Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Dance ATAR",
     "Dance General",
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Design ATAR"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology ATAR",
     "Applied Information Technology General",
     "Computer Science ATAR",
     "Design ATAR",
     "Food Science and Technology General",
     "Materials Design and Technology (Metal) General",
     "Materials Design and Technology (Textiles) General",
     "Materials Design and Technology (Wood) General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Physical Education Studies General"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1135,
   "topQuarterPct": 53,
   "teachingStaffFTE": 177.7,
   "nonTeachingFTE": 50.8,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 15.9,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Home Room within the House system",
   "unitSize": null,
   "contactFrequency": "Twice per week",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Social/emotional: Year Leader → specialist Student Central services if unresolved; academic/in-class: relevant teacher or learning-area lead → senior/program leadership if unresolved",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "facilities": {
    "pool": {
     "value": 1,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "ovals": {
     "value": 1,
     "status": "confirmed"
    },
    "tennisCourts": {
     "value": 1,
     "status": "partial"
    },
    "recentBuild": {
     "value": "2025: new 26-classroom teaching and library block, eight-laboratory science building, fitness centre, change rooms and large oval opened.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.rossmoyne.wa.edu.au/community/rossmoynerebuild/",
       "title": "Rebuild",
       "quote": "New buildings and facilities include ... a new Science Building including eight science laboratories ... new student change rooms, a fitness centre ... a large oval space.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "opened for 2025 school year; current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.rossmoyne.wa.edu.au/community/news/sports-without-an-oval/",
       "title": "Existing sport facilities",
       "quote": "Students and staff are now able to use the onsite pool all year long ... our large gymnasium, outdoor courts and indoor fitness centres.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "official rebuild-period update"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "sport": {
     "value": "2026 WA Schools Cup: Presidents Cup for the 33rd consecutive year, plus Female and Male Aggregate Cups; 31 teams and 267 students competed.",
     "status": "partial"
    },
    "academic": {
     "value": "2024: 408 students attained WACE; 238 achieved ATAR 80+; 36 achieved ATAR 99+.",
     "status": "confirmed"
    },
    "alumniDomains": {
     "value": [
      "Rhodes Scholarships — 3 alumni.",
      "Beazley Medal — 2 alumni.",
      "Olympic and Paralympic sport — 8 alumni."
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.rossmoyne.wa.edu.au/about/achievements/",
       "title": "Achievements",
       "quote": "The school has educated three Rhodes Scholars, two Beazley Medalists ... as well as eight Olympians and Paralympians.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "D2": {
       "url": "https://www.rossmoyne.wa.edu.au/community/news/weve-done-it-again/",
       "title": "WA Schools Cup",
       "quote": "Rossmoyne SHS taking home the Presidents Cup for the 33rd year in a row, as well as the Female and Male Aggregate Cups ... 31 teams ... 267 students.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current 2026 school news"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 1,
   "blazerRequired": false,
   "separateFormalUniform": false,
   "groomingRules": "For Valedictory, uniform is to be clean, neat and pressed, with black school shoes.",
   "assemblyFrequency": "",
   "chapelOrService": 0,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Year 12 Valedictory",
    "High Aspiration and Excellence Assemblies",
    "House Swimming Carnival",
    "House Athletics Carnival"
   ],
   "note": "Formality is expressed through a conventional uniform, formal Valedictory presentation and a recurring vertical House structure rather than a separate blazer uniform."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": 1,
     "status": "confirmed"
    },
    "automotive": {
     "value": 1,
     "status": "partial"
    },
    "business": {
     "value": 1,
     "status": "confirmed"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": 2,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "On-campus: Certificate II Community Services. Published external examples: Certificate II Civil Construction; Certificate II Engineering — Trade; Certificate II Autonomous Workplace Operations; Certificate II–IV Community Services; Certificate III Events; and other Certificate II-to-Diploma options notified through tertiary campuses.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "TAFE, tertiary training campuses and other external providers",
    "releaseDay": true,
    "facilities": [
     "school Community Services classroom program"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFE",
     "tertiary campuses",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Willetton Senior High School": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Local-intake entry is constrained by very high demand. Out-of-area entry is primarily through Gifted and Talented or approved specialist selection."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Gifted and Talented admission is a separate statewide competitive process."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Gifted and Talented academic entry operates alongside local-intake mainstream schooling.",
    "source": "https://www.willettonshs.wa.edu.au/gifted-and-talented/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "GAT students form a selective cohort; full mainstream setting rules were not verified.",
    "source": "https://www.willettonshs.wa.edu.au/gifted-and-talented/"
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement criteria were not located."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "GAT, university extension, competitions and selective programs provide formal stretch.",
    "source": "https://www.willettonshs.wa.edu.au/gifted-and-talented/"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support exists, but the exact intervention architecture was not verified in a current public source."
   },
   "framework": {
    "status": "partial",
    "detail": "The school values positivity, respect, inclusion and excellence; a single current instructional framework was not confirmed."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current senior curriculum and subject-selection resources.",
    "url": "https://www.willettonshs.wa.edu.au/senior-school/",
    "access": "Public senior curriculum"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Biology, Chemistry, Human Biology, Physics and Psychology are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Geography, Economics, Modern History and Politics and Law are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "languages": {
     "status": "confirmed",
     "detail": "French, Italian and Japanese are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Art, Media and related arts courses are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Western Art Music and broader Music pathways are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Engineering, Design and Materials Design and Technology are offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computer Science is offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.willettonshs.wa.edu.au/senior-school/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Specialist Basketball and broad school sport are published.",
    "source": "https://www.willettonshs.wa.edu.au/selective-programs/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Dance, Drama, Media, Music and Visual Art are available.",
    "source": "https://www.willettonshs.wa.edu.au/senior-school/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computer Science, Engineering, digital technologies and robotics opportunities are published.",
    "source": "https://www.willettonshs.wa.edu.au/senior-school/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Academic competitions and leadership opportunities are visible; a dedicated entrepreneurship pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "String Orchestra is published.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Junior and Senior Bands are published.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choir is published.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Band is published and may be invitation-based.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   },
   "contemporary": {
    "status": "partial",
    "detail": "Contemporary instruments and performance are visible, but not established as the dominant pathway.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   },
   "production": {
    "status": "partial",
    "detail": "A recording and production suite is published; curriculum depth and student access were not fully verified.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition is published.",
    "source": "https://www.willettonshs.wa.edu.au/music/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2021,
   "summary": "The latest located full review is from 2021; a newer review cycle was pending or underway in 2026.",
   "positives": [
    "The school has sustained high academic standing and a large selective program."
   ],
   "concerns": [
    "The external-review evidence is older than for Rossmoyne, Shenton and Fremantle."
   ],
   "sources": [
    "https://www.willettonshs.wa.edu.au/wp-content/uploads/2021/03/Willetton-Senior-High-School-Public-School-Review-report-March-2021.pdf"
   ]
  },
  "academicStanding": {
   "summary": "One of WA’s leading public academic schools. The 2025 cohort included statewide award and Beazley Medal recognition.",
   "score": 96,
   "url": "https://www.willettonshs.wa.edu.au/year-12-results/",
   "label": "Year 12 results"
  },
  "entryReality": "Local-intake entry is constrained by very high demand. Out-of-area entry is primarily through Gifted and Talented or approved specialist selection.",
  "programAccess": "Gifted and Talented admission is a separate statewide competitive process.",
  "seniorSubjects": {
   "summary": "Current senior-school handbook and subject-selection resources are publicly available.",
   "url": "https://www.willettonshs.wa.edu.au/senior-school/",
   "access": "Public senior curriculum"
  },
  "musicReality": {
   "style": "Broad classroom, ensemble and instrumental music.",
   "production": "Production not verified",
   "note": "A dedicated contemporary production or recording pathway was not verified."
  },
  "productionScore": 35,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Computer Science ATAR is listed in the current senior handbook and Technologies overview."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Robotics is a named Technologies subject; a current named external competition team was not verified."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering Studies is offered in senior school, with mechatronics and engineering preparation in lower years."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Graphic Design, Computer Game Making and software-engineering contexts are published."
   },
   "makerspace": {
    "status": "partial",
    "detail": "Current lower-school evidence includes CNC and laser-cutting use, but no facility is formally named a makerspace or fab lab."
   },
   "note": "Senior Computer Science and Engineering Studies are verified. Robotics is curriculum-based rather than a verified competition pathway."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Art ATAR is offered and an invitation-based Art Extension pathway is published."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design Graphics and other visual-design pathways are listed in current curriculum material."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama ATAR and regular performances are documented."
   },
   "film": {
    "status": "partial",
    "detail": "Media-production study is available, but the exact current Year 12 course sequence was not fully visible in the checked page."
   },
   "dance": {
    "status": "partial",
    "detail": "Dance is a current Arts offering and has a dedicated studio, but senior Year 12 continuity was not clearly established."
   },
   "artSelective": {
    "status": "partial",
    "detail": "Art Extension is by invitation. This is an internal selective pathway, not a separate school-enrolment route."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The school map names a Performing Arts Theatre, Dance Studio and Visual Art facilities."
   },
   "note": "Visual Art and Drama have verified senior depth. The selective Art Extension pathway is internal and should not be confused with out-of-area admission."
  },
  "sport": {
   "body": "School Sport WA",
   "division": "SSWA McMahon Shield Tier 1 runner-up in 2024",
   "specialistProgram": "Specialist Basketball Program — competitive entry",
   "note": "The four zeroes are based on the current named sporting-teams list, not on a failure to find a general webpage.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "confirmed"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Essential General",
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English Foundation",
     "English General",
     "English ATAR",
     "Literature ATAR",
     "English as an Additional Language or Dialect General",
     "English as an Additional Language or Dialect ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Earth and Environmental Science ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General",
     "Science in Practice General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Business Management and Enterprise ATAR",
     "Business Management and Enterprise General",
     "Career and Employability General",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Modern History General",
     "Philosophy and Ethics ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "French Second Language ATAR",
     "Italian Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Dance ATAR",
     "Dance General",
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Design ATAR",
     "Design (Photography) General",
     "Creation Lab"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Building and Construction General",
     "Computer Science ATAR",
     "Creation Lab",
     "Design ATAR",
     "Design (Photography) General",
     "Engineering Studies ATAR",
     "Food Science and Technology ATAR",
     "Food Science and Technology General",
     "Materials Design and Technology (Wood) General",
     "Certificate III Information Technology",
     "Certificate II Hospitality",
     "Certificate IV Business",
     "Certificate II Community Services",
     "Certificate III Community Services"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Physical Education Studies ATAR (Basketball Specialist)",
     "Physical Education Studies General",
     "Certificate III Fitness",
     "Certificate II Sport and Recreation",
     "Certificate II Sport Coaching"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1131,
   "topQuarterPct": 50,
   "teachingStaffFTE": 168.5,
   "nonTeachingFTE": 67.8,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 16.4,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Year Coordinator cohort within Student Services",
   "unitSize": null,
   "contactFrequency": "Weekly year-level assemblies; individual pastoral-contact cadence not stated",
   "sameAdultAcrossYears": "yes",
   "handoverPoint": "No handover where continuity is possible; replacement point not stated when it is not",
   "escalationChain": "Year Coordinator → Student Services and additional specialist support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "partial"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 1,
     "status": "partial"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.willettonshs.wa.edu.au/school-board/",
       "title": "School Board support",
       "quote": "WA Secondary School of the Year Scholarship – for Year 8.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "partial"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.willettonshs.wa.edu.au/finance-for-parents/",
       "title": "Performing Arts Centre",
       "quote": "It is located at the front of the Performing Arts Centre Theatre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "sport": {
     "value": "2026 SSWA B Division Interschool Swimming Carnival result; 2025 runner-up at the Foot Locker Australian School Championships.",
     "status": "confirmed"
    },
    "music": {
     "value": "2025: Outstanding Award in the WA Classical Guitar Ensemble category.",
     "status": "confirmed"
    },
    "academic": {
     "value": "2025: Beazley Medal (WACE); 141 WACE awards reported in the Annual Report.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.willettonshs.wa.edu.au/health-and-physical-education/",
       "title": "Sporting awards",
       "quote": "2026 School Sport Western Australia (SSWA) B Division Interschool Swimming Carnival ... 2025 Runner-Up Foot Locker Australian School Championships.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "D2": {
       "url": "https://www.willettonshs.wa.edu.au/gifted-talented-buzz/",
       "title": "Academic result",
       "quote": "the 2025 Beazley Medal (WACE).",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2026 article reporting 2025 result"
      },
      "D3": {
       "url": "https://www.willettonshs.wa.edu.au/wp-content/uploads/2026/04/2025-Annual-Report.pdf",
       "title": "2025 Annual Report",
       "quote": "Outstanding Award – WA Classical Guitar Ensemble ... 141 WACE awards.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 1,
   "blazerRequired": null,
   "separateFormalUniform": null,
   "groomingRules": "",
   "assemblyFrequency": "Weekly year-level assemblies",
   "chapelOrService": 0,
   "houseSystem": 0,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Anzac Day Assembly",
    "student leadership recognition",
    "Year 12 graduation"
   ],
   "note": "The clearest recurring formality signal is the weekly year-level assembly cycle rather than a verified House or blazer tradition."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 2,
     "status": "confirmed"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": 1,
     "status": "confirmed"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": 2,
     "status": "confirmed"
    },
    "health": {
     "value": 2,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current school-based qualifications include Certificate II Hospitality; Certificate III Information Technology; Certificate IV Business; Certificates II and III Community Services; Certificate III Fitness; Certificate II Sport and Recreation; Certificate II Sport Coaching; and creative certificates in Music and Visual Arts/Design. External FLiS access also includes Automotive, Engineering and Logistics.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "TAFE and external Registered Training Organisations through Flexible Learning in School",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": null,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFE",
     "external Registered Training Organisations",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Applecross Senior High School — Academic Extension": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Local-intake entry is standard. Out-of-area applications depend on capacity or successful entry to an approved specialist program."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Academic Extension is an internal pathway and does not itself provide an out-of-area enrolment route. Gifted and Talented Visual Arts does."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Academic Extension, Gifted and Talented Visual Arts and specialist Tennis operate inside a local-intake school.",
    "source": "https://applecross.wa.edu.au/specialist-programs/academic-extension-and-enrichment-programs/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Academic Extension covers the core areas; full mainstream setting rules were not verified.",
    "source": "https://applecross.wa.edu.au/specialist-programs/academic-extension-and-enrichment-programs/"
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Extension placement is reviewed, but the complete published criteria were not captured.",
    "source": "https://applecross.wa.edu.au/specialist-programs/academic-extension-and-enrichment-programs/"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Academic Extension and selective arts pathways provide formal stretch.",
    "source": "https://applecross.wa.edu.au/specialist-programs/academic-extension-and-enrichment-programs/"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support is available, but the precise model was not verified."
   },
   "framework": {
    "status": "not_publicly_verified",
    "detail": "No single current whole-school instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current Year 11 and 12 subject-selection handbooks.",
    "url": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/",
    "access": "Public handbooks"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Methods and Specialist are included in the senior handbooks.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature pathways are included.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Senior science pathways are included; consult current handbook for named courses.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Senior HASS pathways are included.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "languages": {
     "status": "partial",
     "detail": "Languages are available; the current senior language list was not extracted in this pass.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts is a major pathway, including Gifted and Talented Visual Arts.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and technology pathways are offered.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computing and digital technologies are offered.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Specialist Tennis and broad school sport are published.",
    "source": "https://applecross.wa.edu.au/specialist-programs/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Gifted and Talented Visual Arts, Drama, Music and broader arts are published.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   },
   "computing": {
    "status": "partial",
    "detail": "Digital technologies and STEM are available; the full robotics and competition list was not verified.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Academic extension, debating/chess and leadership exist; a dedicated enterprise program was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Two string orchestras are published.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Junior, Intermediate and Senior Concert Bands are published.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choir is published and described as open to keen singers.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Band is published.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "A Contemporary Music Ensemble is included in festival participation.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "No dedicated DAW, recording or production pathway was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "IMSS and private tuition support the program.",
    "source": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2023,
   "summary": "A current review exists through the school reports archive; detailed external findings should be read from the linked report.",
   "positives": [
    "The school has sustained strong extension, arts and community pathways."
   ],
   "concerns": [
    "The app has not yet extracted sentence-level findings from the 2023 review."
   ],
   "sources": [
    "https://applecross.wa.edu.au/explore/school-plans-reports/"
   ]
  },
  "academicStanding": {
   "summary": "Strong high-performing public-school context; current exact whole-cohort metrics were not extracted from the latest annual report.",
   "score": 85,
   "url": "https://applecross.wa.edu.au/about-us/annual-reports/",
   "label": "Annual reports"
  },
  "entryReality": "Local-intake entry is standard. Out-of-area applications depend on capacity or successful entry to an approved specialist program.",
  "programAccess": "Academic Extension is an internal pathway and does not itself provide an out-of-area enrolment route. Gifted and Talented Visual Arts does.",
  "seniorSubjects": {
   "summary": "Official Year 11 and 12 subject-selection handbooks are published.",
   "url": "https://applecross.wa.edu.au/teaching-and-learning/year-11-and-12-subject-selection-handbooks/",
   "access": "Public handbooks"
  },
  "musicReality": {
   "style": "Classical, jazz and contemporary ensemble activity.",
   "production": "Limited verified production",
   "note": "Contemporary performance exists, but a dedicated production pathway was not verified."
  },
  "productionScore": 40,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Applied Information Technology General is listed in the current senior handbook."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Robotics is embedded in lower-school digital technologies and the STEM laboratory; no named current competition team was verified."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Current senior options include Engineering Studies Mechanical General, Materials Design and Technology Wood and Certificate III Engineering Technical."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Current pathways include media, Design and lower-school web, games and programming contexts."
   },
   "makerspace": {
    "status": "confirmed",
    "detail": "A purpose-built STEM laboratory is named and equipped with 3D printers, laser cutters, drones, CAD and robotics."
   },
   "note": "This is one of the clearest verified school facilities records: senior engineering and digital pathways connect to a named fabrication-rich STEM lab."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts is offered at ATAR and General level, with a separate Gifted and Talented Visual Arts pathway."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design is offered at ATAR and General level, supported by dedicated Design Studios."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is offered through senior school and supported by regular performance work."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis is listed in the current senior handbook, with photography and media pathways in earlier years."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is available in Years 9–10, but no current senior Dance course is listed on the Arts page or handbook."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Gifted and Talented Visual Arts requires selection using portfolio and practical assessment processes."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The school names four Visual Arts studios, Design Studios, a Drama Studio, Performing Arts Centre and Art Gallery."
   },
   "note": "Visual Arts has a genuine selective entry pathway and extensive facilities. Dance is present but does not appear as a senior course."
  },
  "sport": {
   "body": "School Sport WA and school-managed competition",
   "division": "Sport-specific SSWA divisions vary",
   "specialistProgram": "Specialist Tennis Program — skills appraisal, school-report review and competitive selection",
   "note": "Touch Football and futsal are also scheduled. The 2026 schedule is labelled selected sports, so unlisted sports remain null rather than zero.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "confirmed"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Essential General",
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR",
     "English as an Additional Language or Dialect General"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Earth and Environmental Science ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Ancient History ATAR",
     "Ancient History General",
     "Business Management and Enterprise ATAR",
     "Business Management and Employability General",
     "Career and Employability General",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "French Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Design ATAR",
     "Design General",
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Music General",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Certificate III Visual Arts"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology General",
     "Certificate II Workplace Skills",
     "Certificate II Construction Pathways",
     "Certificate III Engineering — Technical",
     "Children, Family and Community General",
     "Design ATAR",
     "Design General",
     "Engineering Studies General",
     "Food Science and Technology General",
     "Materials Design and Technology (Wood) General",
     "Certificate II Hospitality"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Physical Education Studies ATAR (Tennis)",
     "Physical Education Studies General",
     "Certificate III Fitness",
     "Certificate II Sport and Recreation",
     "Certificate II Sports Coaching"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1120,
   "topQuarterPct": 46,
   "teachingStaffFTE": 124.5,
   "nonTeachingFTE": 56.1,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 15.8,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Daily Core lesson, overseen through the year-cohort and Head of Year structure",
   "unitSize": null,
   "contactFrequency": "Daily Core lesson",
   "sameAdultAcrossYears": "yes",
   "handoverPoint": "No planned handover through Year 12; exceptions are not stated",
   "escalationChain": "Head of Year Coordinator → Student Services specialists and, where needed, external support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "partial"
   }
  },
  "backs": {
   "scholarships": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": "over 100",
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "gallery": {
     "value": 2,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "ovals": {
     "value": 1,
     "status": "confirmed"
    },
    "tennisCourts": {
     "value": 2,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "makerspace": {
     "value": 1,
     "status": "partial"
    },
    "recentBuild": {
     "value": "2023: state-of-the-art STEM lab commissioned.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/",
       "title": "Arts facilities",
       "quote": "Four Visual Arts Studios ... Design Studios ... Drama Studio ... Music Studio ... Individual Music Practice Rooms ... Performing Arts Centre ... Art Gallery.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://applecross.wa.edu.au/explore/principals-message/",
       "title": "Campus facilities",
       "quote": "a purpose-built Art block ... a Performing Arts Centre, a university-style auditorium, a gymnasium and fitness centre, and tournament-standard tennis courts.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F3": {
       "url": "https://applecross.wa.edu.au/teaching-and-learning/stem-applecross/",
       "title": "STEM facility",
       "quote": "The commissioning of our new state-of-the-art STEM lab in mid-2023 provides students with a tailor-made space.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2023"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Gifted and Talented Education Co-ordinator — Visual Art",
      "Intermediate Concert Band Conductor",
      "Senior Concert Band Conductor"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://applecross.wa.edu.au/explore/staff/",
       "title": "Specialist staff titles",
       "quote": "Intermediate Concert Band Conductor ... Senior Concert Band Conductor ... Gifted and Talented Education Co-ordinator: Visual Art.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "arts": {
     "value": "2020: Design Subject Exhibition Award, first in the state; winner of the Lester Prize; winner of the St George’s Art Prize.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://applecross.wa.edu.au/teaching-and-learning/the-arts/",
       "title": "Arts achievements",
       "quote": "2020 Subject Exhibition Award Design (1st in State) ... Winner Lester Prize 2020 ... Winner St Georges Art Prize 2020.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2020"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 0,
   "blazerRequired": false,
   "separateFormalUniform": false,
   "groomingRules": "",
   "assemblyFrequency": "Daily Core period can include year assemblies; the assembly component is not daily or separately scheduled in the public description.",
   "chapelOrService": 0,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Student Council induction",
    "Anzac commemoration",
    "Year 12 Valedictory",
    "House carnivals"
   ],
   "note": "The published model uses relaxed everyday uniform, daily pastoral Core and elected student representation rather than a formal blazer or prefect system."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 2,
     "status": "confirmed"
    },
    "construction": {
     "value": 2,
     "status": "confirmed"
    },
    "automotive": {
     "value": 2,
     "status": "confirmed"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current named school-delivered qualifications: Certificate II Hospitality; Certificate II Construction Pathways; Certificate II Sport and Recreation; Certificate II Sport Coaching; Certificate II Workplace Skills; Certificate III Engineering — Technical; Certificate III Fitness; Certificate III Visual Arts. More than 50 external TAFE/private-RTO options may be available, but their annual field list is not copied into the public page.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "TAFE and private Registered Training Organisations",
    "releaseDay": true,
    "facilities": [
     "hospitality training facilities",
     "construction and engineering workshops",
     "visual-arts studios"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 2,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFE",
     "private RTOs",
     "Apprenticeship Support Australia",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Shenton College — HPL / GATE": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Local-intake students have normal entry. Gifted and Talented is the principal guaranteed out-of-area route."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "High Performance Learning is primarily a local-intake pathway and should not be treated as an external admission route."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Gifted and Talented Education and High Performance Learning operate alongside local-intake schooling.",
    "source": "https://www.shenton.wa.edu.au/join-us/academic-programs/"
   },
   "setting_streaming": {
    "status": "confirmed",
    "detail": "GATE and HPL provide differentiated core-subject pathways.",
    "source": "https://www.shenton.wa.edu.au/join-us/academic-programs/"
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Pathways can differ by program; complete movement rules were not captured.",
    "source": "https://www.shenton.wa.edu.au/join-us/academic-programs/"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "GATE, HPL and extensive co-curricular extension provide formal stretch.",
    "source": "https://www.shenton.wa.edu.au/join-us/academic-programs/"
   },
   "behind": {
    "status": "confirmed",
    "detail": "The review describes comprehensive structures supporting academic, social and emotional thriving.",
    "source": "https://www.shenton.wa.edu.au/wp-content/uploads/2026/02/Shenton-College-Public-School-Review-report-November-2025.pdf"
   },
   "framework": {
    "status": "confirmed",
    "detail": "High Performance Learning, internal instructional tools and a strong quality-teaching culture are published.",
    "source": "https://www.shenton.wa.edu.au/wp-content/uploads/2026/02/Shenton-College-Public-School-Review-report-November-2025.pdf"
   }
  },
  "subjects": {
   "source": {
    "summary": "Public senior-school course and pathway resources.",
    "url": "https://www.shenton.wa.edu.au/learning/senior-school/",
    "access": "Public senior curriculum"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "A broad set of ATAR sciences is offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "A broad set of HASS courses is offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Multiple languages are offered; consult the current guide for exact availability.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts and Photography are offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama and Dance are offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and technology pathways are offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computing and digital technologies are offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "A broad sport and co-curricular program is published.",
    "source": "https://www.shenton.wa.edu.au/learning/co-curricular/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Dance, Drama, Media, Music, Photography and Visual Arts are published.",
    "source": "https://www.shenton.wa.edu.au/learning/co-curricular/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computing, technology and academic challenge opportunities are part of the curriculum and co-curricular offering.",
    "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership and broad co-curricular programs are strong; a dedicated startup pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Orchestral activity is published.",
    "source": "https://www.shenton.wa.edu.au/learning/co-curricular/"
   },
   "wind_band": {
    "status": "partial",
    "detail": "Instrumental ensemble opportunities are published; exact current wind-band structure was not fully verified."
   },
   "choral": {
    "status": "partial",
    "detail": "Vocal opportunities exist; exact current choir structure was not fully verified."
   },
   "jazz": {
    "status": "partial",
    "detail": "Jazz opportunities were not fully verified in a current public ensemble list."
   },
   "contemporary": {
    "status": "partial",
    "detail": "Contemporary and music-industry pathways may be available, including consortium options; exact in-school depth was not verified."
   },
   "production": {
    "status": "partial",
    "detail": "Music-industry and composition opportunities exist, but dedicated DAW/recording depth depends on current course availability.",
    "source": "https://www.shenton.wa.edu.au/learning/senior-school/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "IMSS and private instrumental students are supported through Music and ensembles.",
    "source": "https://www.shenton.wa.edu.au/learning/co-curricular/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2025,
   "summary": "The review found caring, compassionate and supportive structures, high expectations and strong monitoring.",
   "positives": [
    "Comprehensive structures support academic, social and emotional thriving.",
    "High expectations and student progress are monitored."
   ],
   "concerns": [
    "Strengthen middle leadership and career education.",
    "Continue developing internal instructional tools."
   ],
   "sources": [
    "https://www.shenton.wa.edu.au/wp-content/uploads/2026/02/Shenton-College-Public-School-Review-report-November-2025.pdf"
   ]
  },
  "academicStanding": {
   "summary": "Exceptionally strong public-school academic standing. The 2025 Public School Review reported that Shenton ranked first in WA for ATAR6 performance in 2024.",
   "score": 98,
   "url": "https://www.shenton.wa.edu.au/wp-content/uploads/2025/08/Shenton-College-Public-School-Review-report-May-2025.pdf",
   "label": "2025 Public School Review"
  },
  "entryReality": "Local-intake students have normal entry. Gifted and Talented is the principal guaranteed out-of-area route.",
  "programAccess": "High Performance Learning is primarily a local-intake pathway and should not be treated as an external admission route.",
  "seniorSubjects": {
   "summary": "Senior curriculum information is published across upper-school and vocational course resources.",
   "url": "https://www.shenton.wa.edu.au/learning/senior-school/",
   "access": "Public senior curriculum"
  },
  "musicReality": {
   "style": "Performance and classroom music, with a music-industry vocational route available through consortium study.",
   "production": "Some verified production",
   "note": "Music-industry and composition opportunities exist, but production depth may depend on consortium and subject availability."
  },
  "productionScore": 65,
  "computing": {
   "csSubject": {
    "status": "partial",
    "detail": "Current Technologies material establishes digital-technology preparation, and older official reporting lists senior Computer Science. A current complete senior list was not located."
   },
   "robotics": {
    "status": "partial",
    "detail": "Official school reporting documents Robotics Club participation in RoboCup and FIRST Lego League, but the last substantive public evidence located is not current."
   },
   "engineering": {
    "status": "partial",
    "detail": "Current Technologies includes engineering and mechatronics preparation; older official reporting lists senior Engineering Studies."
   },
   "digitalDesign": {
    "status": "partial",
    "detail": "Digital Imaging and Animation are current lower-school options, with older official evidence of senior Design, AIT and Media."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current named makerspace, fab lab or equivalent dedicated facility was found."
   },
   "note": "The pathway looks substantial, but current public senior-course evidence is incomplete. Old official annual reports are therefore retained as partial, not confirmed-current evidence."
  },
  "arts": {
   "visualArt": {
    "status": "partial",
    "detail": "Visual Arts is a current Arts pathway, but the complete current senior subject sequence was not publicly exposed."
   },
   "design": {
    "status": "partial",
    "detail": "Photography, Media and visual-design activity are current; exact Year 12 Design-course continuity remains only partly verified."
   },
   "drama": {
    "status": "partial",
    "detail": "Drama and recurring school productions are documented, but a complete current senior handbook was not located."
   },
   "film": {
    "status": "partial",
    "detail": "Media and Photography are current Arts programs; exact senior course titles remain only partly verified publicly."
   },
   "dance": {
    "status": "partial",
    "detail": "Dance is a current program with performance opportunities and an extension club, but detailed Year 12 course status was not fully verified."
   },
   "artSelective": {
    "status": "partial",
    "detail": "Selected students access Magnify dance extension. This is internal selection, not a separate school-admission pathway."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names the Arts Arena as a venue for productions and performances."
   },
   "note": "The arts program is broad and active, but several senior-course judgements remain partial because a complete current public handbook was not located."
  },
  "sport": {
   "body": "School Sport WA",
   "division": "SSWA McMahon Shield Tier 1 champion in 2024",
   "specialistProgram": "",
   "note": "Some sports are offered annually; others depend on student interest and staff availability. Those access differences are preserved in the detail.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "partial"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "confirmed"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "partial"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR"
    ],
    "status": "partial"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Physics ATAR",
     "Psychology ATAR"
    ],
    "status": "partial"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Economics ATAR",
     "Geography ATAR",
     "Ancient History ATAR",
     "Modern History ATAR",
     "Politics and Law ATAR",
     "Career and Enterprise General"
    ],
    "status": "partial"
   },
   "languages": {
    "subjects": [
     "Auslan",
     "Chinese Second Language ATAR",
     "French Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "partial"
   },
   "arts": {
    "subjects": [
     "Drama ATAR",
     "Design (Photography) ATAR",
     "Media Production and Analysis ATAR",
     "Music ATAR",
     "Visual Arts ATAR"
    ],
    "status": "partial"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology ATAR",
     "Computer Science ATAR",
     "Engineering Studies ATAR",
     "Food Science and Technology General"
    ],
    "status": "partial"
   },
   "pe": {
    "subjects": [
     "Physical Education Studies ATAR"
    ],
    "status": "partial"
   },
   "atarVetBalance": "genuine mix"
  },
  "myschool": {
   "icsea": 1160,
   "topQuarterPct": 64,
   "teachingStaffFTE": 173.6,
   "nonTeachingFTE": 78.8,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 15.9,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Mentor, supported by year leaders and Student Support",
   "unitSize": null,
   "contactFrequency": "",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Mentor or year leader → Student Support network and specialist services",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "source": {
     "value": {
      "S1": {
       "url": "https://www.shenton.wa.edu.au/give/",
       "title": "Prospective scholarship",
       "quote": "The College has taken steps to create a scholarship.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "partial"
    }
   },
   "facilities": {
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "roboticsLab": {
     "value": 1,
     "status": "partial"
    },
    "makerspace": {
     "value": 2,
     "status": "partial"
    },
    "recentBuild": {
     "value": "By the 2025 business-plan cycle: new Senior School Learning Hub, gymnasium extension and new TechSpace facility.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://shenton.wa.edu.au/2025/self-assessment-overview/",
       "title": "Campus additions",
       "quote": "we have welcomed ... our new Learning Hub in the Senior School, an extension to our gymnasium and a new TechSpace facility.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current business-plan page"
      },
      "F2": {
       "url": "https://www.shenton.wa.edu.au/information/structure/library/",
       "title": "iCentre technology",
       "quote": "3D printers ... Sphero droids ... MaKey MaKey.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "sport": {
     "value": "2020: A Division Interschool Swimming and School Sport WA State School Diving championship results; 2024: school reports a ninth swimming championship.",
     "status": "partial"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.shenton.wa.edu.au/wp-content/uploads/2021/05/Shenton-College-Annual-Report-2020.pdf",
       "title": "2020 Annual Report",
       "quote": "RoboCup Junior Competition ... A Division Interschool Swimming ... School Sport WA State School Diving.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2020"
      },
      "D2": {
       "url": "https://www.shenton.wa.edu.au/feeling-fine-and-making-it-nine/",
       "title": "Swimming championship",
       "quote": "Shenton College Swim Team Champions!",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2024"
      }
     },
     "status": "partial"
    }
   }
  },
  "formality": {
   "uniformFormal": 0,
   "blazerRequired": false,
   "separateFormalUniform": false,
   "groomingRules": "The dress code requires approved uniform garments and excludes jeans, hoodies, leggings and other non-uniform items; detailed hair and jewellery rules are not stated.",
   "assemblyFrequency": "",
   "chapelOrService": 0,
   "houseSystem": 0,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Anzac commemoration",
    "College Captain induction",
    "Year 12 graduation"
   ],
   "note": "The public evidence shows a relaxed uniform and representative student-leadership model, with formality concentrated in specific ceremonies."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 1,
     "status": "partial"
    },
    "construction": {
     "value": 1,
     "status": "confirmed"
    },
    "automotive": {
     "value": 1,
     "status": "partial"
    },
    "business": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "it": {
     "value": 1,
     "status": "confirmed"
    },
    "health": {
     "value": 1,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 1,
     "status": "partial"
    },
    "hairBeauty": {
     "value": 1,
     "status": "confirmed"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current external fields commonly offered: Information Technology, Community Services, Health, Fashion, Beauty, Engineering, Events, Tourism and Education, plus Building and Construction trade qualifications and pre-apprenticeships. The exact annual qualification list changes after RTO and student-selection confirmation. The school also delivers an annually changing set of qualifications on campus under third-party RTO agreements.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "Department-panel public and private Registered Training Organisations",
    "releaseDay": true,
    "facilities": [
     "on-campus RTO training classrooms",
     "Upper Senior School Administration HUB"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 2,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "Construction Training Fund",
     "public and private RTOs",
     "employer partners"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Fremantle College": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Entry is through the local intake, Gifted and Talented selection, or approved specialist programs such as Contemporary Music, ICT and Marine Studies."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Contemporary Music and ICT require their own specialist application process. Academic Excellence Academy access should be checked separately from school admission."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Gifted and Talented, Academic Excellence and approved specialist programs operate inside a comprehensive school.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Specialist and academic cohorts are clear; complete mainstream setting rules were not verified.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Pathway movement exists, but complete published criteria were not captured."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Gifted and Talented, Academic Excellence and specialist programs provide formal stretch.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   },
   "behind": {
    "status": "confirmed",
    "detail": "The review validates rigorous data identification, Student Services and targeted case management.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   },
   "framework": {
    "status": "confirmed",
    "detail": "A whole-school teaching framework supported by AVID coaching and high expectations.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   }
  },
  "subjects": {
   "source": {
    "summary": "Current Year 11 course handbook.",
    "url": "https://fremantlecollege.wa.edu.au/student-information/handbooks/",
    "access": "Public handbook"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Senior mathematics pathways are offered, including university-entry mathematics.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature pathways are offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Senior sciences are offered; consult the current guide for the complete named list.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Senior HASS courses are offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "languages": {
     "status": "partial",
     "detail": "The current senior language offering was not verified in this pass.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts and Media Arts pathways are offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music, including the specialist contemporary pathway, is offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and technology pathways are offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "ICT and computing pathways are offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://fremantlecollege.wa.edu.au/student-information/handbooks/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "AFL Academy for girls and boys, Marine Studies and broad sport are published.",
    "source": "https://fremantlecollege.wa.edu.au/programs/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Contemporary Music, Media, Visual Art and Drama are available.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-contemporary-music/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Specialist ICT is an approved pathway with its own application.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-ict/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Project, production and specialist-program responsibilities are authentic; a separate entrepreneurship program was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "not_publicly_verified",
    "detail": "A full orchestra was not verified as a defining part of the specialist contemporary program."
   },
   "wind_band": {
    "status": "partial",
    "detail": "Bands and ensembles are integral, but exact concert-band structure was not fully verified.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-contemporary-music/"
   },
   "choral": {
    "status": "partial",
    "detail": "Vocal participation is supported; exact choir structure was not fully verified.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-contemporary-music/"
   },
   "jazz": {
    "status": "partial",
    "detail": "Jazz may occur within the broad contemporary program; exact ensembles were not verified."
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Writing, arranging and performing original contemporary music are central.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-contemporary-music/"
   },
   "production": {
    "status": "confirmed",
    "detail": "Digital recording facilities, audio-production software, MIDI keyboard laboratory and a recording control room are published.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-contemporary-music/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Weekly instrumental or vocal lessons and ensembles are published.",
    "source": "https://fremantlecollege.wa.edu.au/programs/specialist-contemporary-music/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "partial",
    "detail": "Student Services is organised into separate lower-school and upper-school teams.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "partial",
    "detail": "Upper School Pathways mentoring has been published as a weekly period; lower-school pastoral frequency was not fully verified."
   },
   "continuity": {
    "status": "confirmed",
    "detail": "No: published support hands over between Years 7–9 and Years 10–12 teams."
   },
   "escalation": {
    "status": "partial",
    "detail": "Mentor or classroom teacher connects to the relevant Student Services team and specialist support; a formal arrow-chain was not located.",
    "source": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   }
  },
  "external": {
   "type": "Public School Review",
   "year": 2025,
   "summary": "The review validated strong relationships, comprehensive student support, rigorous identification and a clear teaching framework.",
   "positives": [
    "Student support uses data and case management.",
    "Specialist programs are embedded in a whole-school improvement model."
   ],
   "concerns": [
    "Continue strengthening belonging and the house system.",
    "Address staff wellbeing and workload, and improve transition structures."
   ],
   "sources": [
    "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf"
   ]
  },
  "academicStanding": {
   "summary": "Improving and credible academic outcomes. The 2025 annual reporting showed 96% WACE achievement, with a substantial group of ATAR students in the 90–98.95 range.",
   "score": 80,
   "url": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2026/04/Fremantle-College-Public-School-Review-report-June-2025.pdf",
   "label": "2025 Public School Review"
  },
  "entryReality": "Entry is through the local intake, Gifted and Talented selection, or approved specialist programs such as Contemporary Music, ICT and Marine Studies.",
  "programAccess": "Contemporary Music and ICT require their own specialist application process. Academic Excellence Academy access should be checked separately from school admission.",
  "seniorSubjects": {
   "summary": "Official Year 11 course handbook is publicly available.",
   "url": "https://fremantlecollege.wa.edu.au/wp-content/uploads/2025/08/2026-Year-11-Course-Handbook.pdf",
   "access": "Public handbook"
  },
  "musicReality": {
   "style": "Explicitly contemporary: writing, arranging, recording and performing.",
   "production": "Strong verified production",
   "note": "This is the clearest verified school-level contemporary recording and production pathway in the current dataset."
  },
  "productionScore": 98,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "The Approved Specialist ICT pathway continues into ATAR and General senior study."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Programmable robotics and mechatronics are core program areas, with FIRST Robotics and other competition participation documented."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering, mechatronics, materials technology and Certificate II Engineering Pathways are offered through a specialist trade centre."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Specialist ICT includes web and app development, animation, video editing, CAD, graphic design and AR/VR."
   },
   "makerspace": {
    "status": "confirmed",
    "detail": "The College has a named mechatronics laboratory and Maritime Trade Training Centre with fabrication, CNC, automation and engineering workspaces."
   },
   "note": "This is the most fully verified integrated ICT, robotics, digital design and fabrication pathway in Task 1."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts General is listed in the current senior charges and course material; ATAR Visual Arts was not found."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design Photography General is listed and specialist ICT also supports graphic and digital design."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama General is offered in senior school and the College has a dedicated Performing Arts Centre with productions."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis General is listed and purpose-built media facilities are published."
   },
   "dance": {
    "status": "confirmed",
    "detail": "The current Arts page and current senior course/charge list were checked; Dance is not listed."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Current Approved Specialist Programs were checked; visual art, drama, dance and media are not specialist-entry programs."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names a Performing Arts Centre and purpose-built visual arts and media facilities."
   },
   "note": "Drama, media and design are substantial, but the checked senior offer is General rather than ATAR. Dance is a checked-and-absent finding."
  },
  "sport": {
   "body": "School Sport WA and school-managed academy competition",
   "division": "Sport-specific SSWA divisions vary",
   "specialistProgram": "AFL Academy — application; Years 7–10",
   "note": "Touch Rugby is listed by the school but is not coded as rugby union. Beach Volleyball is coded as volleyball.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "partial"
    },
    "basketball": {
     "status": "partial"
    },
    "soccer": {
     "status": "partial"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Essential General",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "English as an Additional Language or Dialect General"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biological Science ATAR",
     "Physics ATAR",
     "Psychology General",
     "Science in Practice General",
     "Marine and Maritime Studies General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Aboriginal and Intercultural Studies General",
     "Ancient History General",
     "Economics ATAR",
     "Geography ATAR",
     "Humanities and Social Sciences in Action General",
     "Modern History ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Design (Photography) General",
     "Drama General",
     "Visual Arts General",
     "Certificate III Music",
     "Certificate III Screen and Media — Film and Design"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Engineering Studies General",
     "Food Science and Technology General",
     "Materials Design and Technology (Metals) General",
     "Materials Design and Technology (Wood) General",
     "Certificate III Information Technology",
     "Certificate II Workplace Skills (Business)",
     "Certificate II Hospitality"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Health Studies General",
     "Outdoor Education General",
     "Physical Education Studies General",
     "Certificate II Outdoor Recreation",
     "Certificate II Sport and Recreation"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1004,
   "topQuarterPct": 18,
   "teachingStaffFTE": 95.5,
   "nonTeachingFTE": 42.8,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 13.7,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Separate Lower School Student Services (Years 7–9) and Upper School Student Services (Years 10–12); Pathways mentors in Years 11–12",
   "unitSize": null,
   "contactFrequency": "Years 11–12 Pathways: every Wednesday, Period 2; Years 7–10 recurring cadence not stated",
   "sameAdultAcrossYears": "no",
   "handoverPoint": "On entry to Year 10",
   "escalationChain": "Class teacher or relevant Student Services team → Year Coordinator or Student Support Officer → specialist/outside support as required",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "confirmed"
   }
  },
  "backs": {
   "scholarships": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "facilities": {
    "pool": {
     "value": 1,
     "status": "confirmed"
    },
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "roboticsLab": {
     "value": 2,
     "status": "confirmed"
    },
    "makerspace": {
     "value": 1,
     "status": "partial"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://fremantlecollege.wa.edu.au/about-us/facilities/",
       "title": "Facilities",
       "quote": "Recent additions ... a performing arts centre ... state-of-the-art science rooms, visual arts and media facilities and a mechatronics lab dedicated to robotics and technologies.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://fremantlecollege.wa.edu.au/about-us/facilities/maritime-trade-training-centre/",
       "title": "Trade Training Centre",
       "quote": "an advanced industrial automation laboratory and the college’s computer-numeric control equipment.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F3": {
       "url": "https://fremantlecollege.wa.edu.au/college-newsletter-term-1-week-5/",
       "title": "Arts facilities opening",
       "quote": "the new Fremantle College Performing Arts Theatre and the renowned Calvert Music Centre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2018 opening-period report"
      },
      "F4": {
       "url": "https://fremantlecollege.wa.edu.au/about-us/facilities/swimming-pool/",
       "title": "Swimming pool",
       "quote": "The College swimming pool is used year-round.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 1,
   "blazerRequired": false,
   "separateFormalUniform": false,
   "groomingRules": "",
   "assemblyFrequency": "Years 11–12 Pathways meets weekly; general assembly frequency is not stated.",
   "chapelOrService": 0,
   "houseSystem": 0,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Anzac commemoration",
    "College Captain induction",
    "Year 12 Valedictory"
   ],
   "note": "Published formality comes mainly from separate lower- and upper-school uniform identity and senior ceremonial events rather than Houses or blazer wear."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 2,
     "status": "confirmed"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": 2,
     "status": "confirmed"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": 2,
     "status": "confirmed"
    },
    "health": {
     "value": 2,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current named school qualifications include Certificate II Hospitality; Certificate II Workplace Skills; Certificate III Information Technology; Certificate II Community Services; Certificate II Engineering Pathways; Certificate III Music; Certificate III Screen and Media; Certificate II Outdoor Recreation; Certificate II Sport and Recreation. Further qualifications are arranged through TAFE and private RTOs.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "TAFE, fee-for-service providers and private Registered Training Organisations",
    "releaseDay": true,
    "facilities": [
     "Maritime Trade Training Centre",
     "industrial automation laboratory",
     "CNC equipment",
     "mechatronics laboratory"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 2,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "TAFE",
     "private RTOs",
     "fee-for-service training providers",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Kennedy Baptist College": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open independent-school application subject to vacancies. Families seeking entry in Year 6 or above are advised to contact the registrar about availability."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "KEEP and other extension pathways are internal academic programs, not automatic external entry routes."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "KEEP and other extension pathways operate within a non-selective independent school.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Extension grouping is published; complete setting rules were not verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Extension, academic competitions and broad co-curricular pathways provide stretch.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "behind": {
    "status": "confirmed",
    "detail": "Heads of Year, Homeroom teachers, psychologist, counsellors and chaplains are published."
   },
   "framework": {
    "status": "partial",
    "detail": "A structured Christian learning model is explicit; no single instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current Year 11 Information Booklet.",
    "url": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf",
    "access": "Public booklet"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Senior mathematics includes university-entry pathways; consult current booklet for the named course set.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "english": {
     "status": "confirmed",
     "detail": "Senior English pathways are offered.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Biology, Human Biology, Physics and Chemistry are offered.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Geography, Economics, Modern History, Politics and Law and Psychology are published.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "languages": {
     "status": "confirmed",
     "detail": "French and Chinese are supported.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Art and related arts are offered.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "music": {
     "status": "confirmed",
     "detail": "ATAR Music and a General contemporary music pathway are published.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Engineering and design pathways are published.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computing and digital technologies are offered.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad interschool sport and extracurricular activity are published.",
    "source": "https://kennedy.wa.edu.au/discover/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama and Visual Arts are available.",
    "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Engineering, computing and technology pathways are published.",
    "source": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership and broad extracurricular opportunities exist; a dedicated entrepreneurship pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Kennedy Orchestra and Production Orchestra are published.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "wind_band": {
    "status": "partial",
    "detail": "Woodwind and band ensembles are published; exact concert-band hierarchy was not verified.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Vocal ensembles are published and at least one is open.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Stage Band and Fusion Band are published.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary Band, guitar and senior bands are published.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   },
   "production": {
    "status": "partial",
    "detail": "A Production Orchestra is named, but this does not by itself verify DAW, recording or audio-engineering curriculum."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition is available across a broad instrument list; ensembles have been published as fee-free.",
    "source": "https://kennedy.wa.edu.au/discover/specialist-programs/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "Homeroom with Heads of Year oversight.",
    "source": "https://kennedy.wa.edu.au/discover/pastoral-care/"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "confirmed",
    "detail": "Weekly pastoral periods are published.",
    "source": "https://kennedy.wa.edu.au/discover/pastoral-care/"
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "confirmed",
    "detail": "Homeroom teacher or Head of Year connects to Director of Students, psychologist, counsellors and chaplains.",
    "source": "https://kennedy.wa.edu.au/discover/pastoral-care/"
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not found",
   "summary": "No dependable recent SEEK, Glassdoor or Indeed teaching review was located for Kennedy in this pass.",
   "concerns": [
    "Independent staff evidence is currently absent; culture claims remain school-controlled or anecdotal."
   ]
  },
  "academicStanding": {
   "summary": "Solid university-oriented academic provision; directly comparable current whole-cohort metrics were not located in the reviewed sources.",
   "score": 81,
   "url": "https://kennedy.wa.edu.au/discover/academic/",
   "label": "Academic program"
  },
  "entryReality": "Open independent-school application subject to vacancies. Families seeking entry in Year 6 or above are advised to contact the registrar about availability.",
  "programAccess": "KEEP and other extension pathways are internal academic programs, not automatic external entry routes.",
  "seniorSubjects": {
   "summary": "Official Year 11 information booklet and senior course material are publicly available.",
   "url": "https://kennedy.wa.edu.au/wp-content/uploads/2025/06/Year-11-Information-Booklet.pdf",
   "access": "Public booklet"
  },
  "musicReality": {
   "style": "ATAR Music plus contemporary instruments and a General contemporary-music pathway.",
   "production": "Limited verified production",
   "note": "Contemporary music is supported, but dedicated DAW or recording depth was not verified."
  },
  "productionScore": 50,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Applied Information Technology is listed in current Year 11 and Year 12 senior-course material."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Current middle-school Engineering electives use robots, Arduino and LEGO systems; current competition-team evidence was not found."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering Studies ATAR is listed in the current Year 11 handbook, supported by a dedicated Technologies Centre."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Computer Graphics and Design, media production and Applied Information Technology are published."
   },
   "makerspace": {
    "status": "partial",
    "detail": "A Maker Space and Robotics Club were publicly documented, and the current Technologies Centre remains verified; current use of the named Maker Space was not re-confirmed."
   },
   "note": "Current senior engineering and AIT are confirmed. The named Maker Space is retained as partial because its direct evidence is older."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Senior Visual Arts pathways and middle-school graphic-art electives are published."
   },
   "design": {
    "status": "confirmed",
    "detail": "Graphic Art, media production and specialist arts facilities support visual and digital design."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is offered in senior school and supported by productions and a Drama Club."
   },
   "film": {
    "status": "confirmed",
    "detail": "Film-making and media-production electives are current, but a standalone Year 12 film or media course was not fully verified."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Year 11 ATAR Dance and dedicated dance studios are publicly documented."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual-art, drama, film or dance admission route requiring audition or portfolio was verified."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The Kennedy Arts Centre includes visual-art rooms, ceramics, fashion, media rooms, green room, recording spaces, dance/drama studios and a 1,200-seat auditorium."
   },
   "note": "Dance, visual art and drama have verified substantial pathways. Film-making is current but its Year 12 continuation remains less clear."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Southern Associated Schools and Southern Coastal Associated Schools",
   "division": "ACC Swimming B Division in 2026",
   "specialistProgram": "Specialist Basketball and Specialist Cricket",
   "note": "Rugby is explicitly listed separately from Touch Rugby, so it is coded as rugby. No unlisted rare sport was converted to zero.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR",
     "Science in Practice General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Business Management and Enterprise ATAR",
     "Economics ATAR",
     "Geography ATAR",
     "Geography General",
     "Humanities and Social Sciences in Action General",
     "Modern History ATAR",
     "Modern History General",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese Second Language ATAR",
     "French Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Dance ATAR",
     "Dance General",
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis General",
     "Music ATAR",
     "Music Contemporary General",
     "Visual Arts ATAR",
     "Visual Arts General"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology",
     "Engineering Studies ATAR",
     "Engineering Studies General",
     "Food Science and Technology General",
     "Materials Design and Technology",
     "Children, Family and Community General"
    ],
    "status": "partial"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Outdoor Education General",
     "Physical Education Studies ATAR"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with VET presence"
  },
  "myschool": {
   "icsea": 1113,
   "topQuarterPct": 43,
   "teachingStaffFTE": 88.6,
   "nonTeachingFTE": 61.4,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 14.0,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Form group within a Pastoral Care and House/Year structure",
   "unitSize": null,
   "contactFrequency": "Weekly Pastoral Care period",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Form Teacher → Head of Year or senior pastoral leader → psychologist, counsellor or chaplain",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 0,
     "status": "confirmed"
    },
    "music": {
     "value": 0,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 0,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Up to full tuition; all other expenses remain the family's responsibility.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Financial hardship evidence; cover letter; curriculum vitae covering achievement, service and leadership; application form; possible interview; annual review.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://kennedy.wa.edu.au/enrol/scholarships/",
       "title": "Scholarships",
       "quote": "Scholarships cover either partial or full amount of a student’s tuition fees and are only available to families ... due to financial hardship.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": 1200,
     "status": "confirmed"
    },
    "recordingStudio": {
     "value": 2,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "makerspace": {
     "value": 1,
     "status": "partial"
    },
    "recentBuild": {
     "value": "2020 Technologies Centre; 2023 auditorium redevelopment; new flexible classrooms ready for 2026; a 250-seat lecture theatre is planned.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://kennedy.wa.edu.au/visit/facilities-and-map/",
       "title": "Facilities",
       "quote": "Media rooms ... a green room and a sound recording room ... Kennedy’s spectacular 1,200-seat auditorium ... two basketball courts ... a gymnasium ... Kennedy Technologies Centre is a dedicated STEM facility.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://kennedy.wa.edu.au/kennedy/master-plan/",
       "title": "Master plan",
       "quote": "Our Auditorium and Lower Foyer ... were redeveloped in 2023.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Auditorium Manager"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://kennedy.wa.edu.au/auditorium-hire/",
       "title": "Theatre operations",
       "quote": "Auditorium Manager.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 1,
   "blazerRequired": false,
   "separateFormalUniform": false,
   "groomingRules": "",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Leadership Blazer Presentation",
    "Kennedy Day",
    "whole-school Awards Assembly",
    "Year 12 graduation"
   ],
   "note": "The strongest formality signals are active House competition, formal student executive roles and worship elements within major assemblies."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": 1,
     "status": "partial"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current on-site qualifications: FNS20120 Certificate II Financial Services; BSB20120 Certificate II Workplace Skills; SIS20419 Certificate II Outdoor Recreation. North and South Metropolitan TAFE provide a wider annual VETDSS menu; an official College example includes Certificate IV Allied Health.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "Skills Strategies International, iVET Institute, North Metropolitan TAFE and South Metropolitan TAFE",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": null,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "Skills Strategies International",
     "iVET Institute",
     "North Metropolitan TAFE",
     "South Metropolitan TAFE",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Carey Baptist College — Harrisdale": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open independent-school application with no residential boundary, subject to capacity, date of application and published priorities."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "GATE Music and STEM require separate testing, audition or portfolio processes and may include scholarships."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "GATE Music, STEM and academic enrichment create selected high-ability pathways.",
    "source": "https://carey.wa.edu.au/harrisdale/secondary/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "GATE cohorts are selected; complete mainstream setting rules were not verified."
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Program continuation and scholarship conditions apply; full movement rules were not captured."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "GATE pathways and scholarships provide formal stretch.",
    "source": "https://carey.wa.edu.au/harrisdale/secondary/"
   },
   "behind": {
    "status": "partial",
    "detail": "Student support is published, but exact intervention thresholds were not fully verified."
   },
   "framework": {
    "status": "partial",
    "detail": "Christian whole-person education and GATE-specific pedagogy are published; no single detailed whole-school instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current secondary course handbooks are linked from the public secondary page.",
    "url": "https://carey.wa.edu.au/harrisdale/secondary/",
    "access": "Public handbook page"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "english": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "languages": {
     "status": "partial",
     "detail": "Language options exist; current senior availability was not verified.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Available within the broad senior curriculum.",
     "source": "https://carey.wa.edu.au/harrisdale/secondary/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad school sport is published.",
    "source": "https://carey.wa.edu.au/harrisdale/secondary/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "GATE Music, drama, music theatre and visual/performing arts are published.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "GATE STEM and broader digital/technology pathways are published.",
    "source": "https://carey.wa.edu.au/harrisdale/gatestem/"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership and project-based opportunities are visible; a dedicated startup program was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "partial",
    "detail": "Classical music is part of GATE Music; exact current orchestra structure was not fully verified.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "wind_band": {
    "status": "partial",
    "detail": "Band opportunities exist; exact current concert-band structure was not fully verified.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "choral": {
    "status": "partial",
    "detail": "Vocal and music-theatre opportunities exist; exact choir structure was not fully verified.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz is explicitly included in the specialist music styles.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary popular music and musical theatre are explicit program strands.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "production": {
    "status": "partial",
    "detail": "The style range is strong, but a dedicated DAW/recording production curriculum was not confirmed.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Specialist Music includes instrumental development and uses audition/portfolio selection.",
    "source": "https://carey.wa.edu.au/harrisdale/gatemusic/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "2025",
   "summary": "SEEK contains recent mixed evidence, including a July 2025 secondary-teacher review.",
   "positives": [
    "Recent reviewers describe emotionally intelligent leadership, welcoming colleagues and a strong collaborative culture."
   ],
   "concerns": [
    "Rapid growth can stretch facilities and resources, slow communication and increase workload pressure."
   ],
   "sources": [
    "https://www.seek.com.au/companies/carey-baptist-college-803202/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Very strong recent results: the 2025 median ATAR was reported as 86.6, with 41.6% of ATAR students achieving 90 or above.",
   "score": 89,
   "url": "https://carey.wa.edu.au/harrisdale/secondary/",
   "label": "2025 academic outcomes"
  },
  "entryReality": "Open independent-school application with no residential boundary, subject to capacity, date of application and published priorities.",
  "programAccess": "GATE Music and STEM require separate testing, audition or portfolio processes and may include scholarships.",
  "seniorSubjects": {
   "summary": "Current secondary course handbooks are linked from the College’s secondary-school page.",
   "url": "https://carey.wa.edu.au/harrisdale/secondary/",
   "access": "Public course-handbook page"
  },
  "musicReality": {
   "style": "Contemporary popular music, Western Art Music, jazz and musical theatre.",
   "production": "Production not clearly verified",
   "note": "The style range is excellent, but a dedicated DAW or recording-production pathway was not confirmed."
  },
  "productionScore": 62,
  "computing": {
   "csSubject": {
    "status": "partial",
    "detail": "The current public handbook lists Computing in Years 9–10 and senior Computer Science in the pathway table, but a complete current Year 12 course description was not exposed."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "GATE STEM explicitly includes the VEX V5 Robotics Competition and other named STEM competitions."
   },
   "engineering": {
    "status": "partial",
    "detail": "Engineering is a Years 9–10 elective and Certificate II Engineering Pathways appears in senior planning; a Year 12 Engineering Studies course was not verified."
   },
   "digitalDesign": {
    "status": "partial",
    "detail": "Computing, Product Design, Media Arts and game-design work are published, but exact Year 12 continuity is incomplete publicly."
   },
   "makerspace": {
    "status": "partial",
    "detail": "The handbook demonstrates project construction and manufacturing activity, but no dedicated facility is formally named makerspace or fab lab."
   },
   "note": "Competition robotics is clear and current. Senior computing, engineering and digital-design continuity remains only partly public."
  },
  "arts": {
   "visualArt": {
    "status": "partial",
    "detail": "Visual Arts is current through middle and senior planning, but the full current Year 12 subject sequence is not publicly exposed."
   },
   "design": {
    "status": "partial",
    "detail": "Product Design, graphic and visual design are published, with some senior evidence, but full Year 12 continuity is not fully public."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is current in Years 7–10 with productions, but a Year 12 Drama pathway was not publicly verified."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Arts includes film and animation in Years 9–10; senior continuation was not publicly verified."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is offered through Years 7–10 with performance work; senior Dance was not publicly verified."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual art, drama, dance or film selective-entry route was verified for the Harrisdale campus."
   },
   "artFacility": {
    "status": "partial",
    "detail": "A two-storey Arts Centre and Dance and Visual Arts Hub are named in official material, but the clearest detailed source is older."
   },
   "note": "The middle-years arts offer is clear. Several senior judgements remain partial because the current detailed Years 11–12 handbook was not fully public."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Southern Associated Schools",
   "division": "ACC Swimming E Division in 2026",
   "specialistProgram": "Specialist Basketball and Specialist Soccer — historical official Harrisdale prospectus evidence",
   "note": "Touch Rugby appeared in the prospectus but was not coded as rugby union. Most fields remain partial because the detailed evidence is old.",
   "fields": {
    "afl": {
     "status": "partial"
    },
    "cricket": {
     "status": "partial"
    },
    "netball": {
     "status": "partial"
    },
    "basketball": {
     "status": "partial"
    },
    "soccer": {
     "status": "partial"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "partial"
    },
    "swimming": {
     "status": "partial"
    },
    "athletics": {
     "status": "partial"
    },
    "crosscountry": {
     "status": "partial"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "partial"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "Literature ATAR"
    ],
    "status": "partial"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Physics ATAR",
     "Science in Practice"
    ],
    "status": "partial"
   },
   "hass": {
    "subjects": [
     "Business Management and Enterprise General",
     "Economics ATAR",
     "Modern History ATAR"
    ],
    "status": "partial"
   },
   "languages": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "arts": {
    "subjects": [
     "Design General"
    ],
    "status": "partial"
   },
   "technologies": {
    "subjects": [
     "Computer Science ATAR",
     "Design General",
     "Certificate III Aviation Remote Pilot"
    ],
    "status": "partial"
   },
   "pe": {
    "subjects": [
     "Health Studies ATAR",
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Physical Education Studies General"
    ],
    "status": "partial"
   },
   "atarVetBalance": "genuine mix with VET presence"
  },
  "myschool": {
   "icsea": 1114,
   "topQuarterPct": 45,
   "teachingStaffFTE": 121.3,
   "nonTeachingFTE": 75.6,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 12.2,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Home Group / Homeroom aligned to the House system, with a Year Manager",
   "unitSize": null,
   "contactFrequency": "Daily Homeroom; extended Thursday session; House activities Wednesday",
   "sameAdultAcrossYears": "yes",
   "handoverPoint": "No fixed handover published; Year Manager may continue for multiple years",
   "escalationChain": "Homeroom teacher → Year Manager as first point for wellbeing concerns → coordinated tailored or specialist support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "partial"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "partial"
    },
    "music": {
     "value": 2,
     "status": "partial"
    },
    "sport": {
     "value": 0,
     "status": "partial"
    },
    "art": {
     "value": 0,
     "status": "partial"
    },
    "drama": {
     "value": 0,
     "status": "partial"
    },
    "allRounder": {
     "value": 0,
     "status": "partial"
    },
    "maxRemission": {
     "value": "75% of academic tuition for the remainder of schooling; second-round offers 50%.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Music Specialist applicants required at least AMEB Grade 2 or similar; audition formed part of selection. Tuition or instrument-hire coverage was not separately stated.",
     "status": "partial"
    },
    "applicationBasis": {
     "value": "Application, Year 5 final report, NAPLAN, HAST aptitude test; music audition for Music Specialist; ongoing conduct and academic progress.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://carey.wa.edu.au/wp-content/uploads/2024/02/GATE-2025-Brochure_Web.pdf",
       "title": "GATE Programs and Scholarships 2025",
       "quote": "Our Gifted and Talented Program offers three programs – Academic Excellence, Music Specialist and Science, Technology, Engineering and Mathematics (STEM).",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025 entry"
      },
      "S2": {
       "url": "https://carey.wa.edu.au/wp-content/uploads/2024/02/GATE-2025-Brochure_Web.pdf",
       "title": "GATE remission and selection",
       "quote": "First Round Offers 75% deduction of academic tuition fees for the remainder of their schooling ... Second Round Offers 50% deduction.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025 entry"
      }
     },
     "status": "partial"
    }
   },
   "facilities": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 1,
   "blazerRequired": false,
   "separateFormalUniform": true,
   "groomingRules": "Hair at collar length or longer must be tied back; jewellery is limited to one plain pair of studs or sleepers and a watch; skirts and dresses must reach the top of the knee; shirts are tucked in.",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "formal assemblies",
    "College worship services",
    "House carnivals",
    "Year 12 graduation"
   ],
   "note": "The College uses a distinct formal set for assemblies and functions, daily Homeroom and active House identity without a verified blazer tradition."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": 2,
     "status": "partial"
    },
    "business": {
     "value": 2,
     "status": "partial"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": 2,
     "status": "partial"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "partial"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Partially public 2026 pathway evidence identifies Certificate III Aviation Remote Pilot, Certificate II Community Services, Certificate III Dance, Certificate II Engineering Pathways, Certificate III Music, Certificate II Workplace Skills, Certificate III Business and Certificate II Tourism. The complete current VET handbook and detailed auspicing arrangements were not publicly accessible.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "External Registered Training Organisations; aviation-industry partners",
    "releaseDay": null,
    "facilities": [
     "aviation and drone-training equipment",
     "engineering workshop",
     "dance and music facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": null,
    "workplaceLearning": null,
    "careersStaffNamed": null,
    "industryLinks": [
     "aviation-industry training partners"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Scotch College": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open boys’ independent-school application with waiting lists; Years 7 and 11 are significant entry points."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Scholarship or specialist success does not remove the need for an enrolment place."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "partial",
    "detail": "The school is non-selective but offers scholarships, IB, WACE and extensive enrichment."
   },
   "setting_streaming": {
    "status": "not_publicly_verified",
    "detail": "Exact setting by subject and year was not verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "IB, academic enrichment, scholarships and more than 100 co-curricular activities support high-potential students.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning and pastoral support are published; exact intervention thresholds were not verified."
   },
   "framework": {
    "status": "partial",
    "detail": "IB learner attributes and broad whole-person education shape the model; no single school-wide instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Senior pathways include WACE, IB Diploma and vocational options.",
    "url": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/",
    "access": "Public senior pathways"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "english": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Available through WACE, IB or the published senior pathway structure.",
     "source": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Compulsory PSA sport and a very large sport program are published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama, Visual Arts and extensive performance opportunities are published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Design, computing, STEM and technology activities are included in the broad curriculum and co-curricular program.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Leadership, service, enterprise-style activities and over 100 enrichment options are published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Orchestras and chamber ensembles are published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert band is published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choirs are published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Orchestra, Fusion and combo groups are published.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary music is included in the program.",
    "source": "https://www.scotch.wa.edu.au/a-broad-education/co-curricular/"
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "Recording-capable venues do not establish a dedicated student production curriculum; none was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition and music scholarships are published.",
    "source": "https://www.scotch.wa.edu.au/admissions/scholarships/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "2024–2026 aggregate",
   "summary": "SEEK contains positive aggregate evidence and a specific recent concern about music-department management.",
   "positives": [
    "Reviewers commonly describe supportive colleagues, strong resources, polite students and professional-development opportunities."
   ],
   "concerns": [
    "Work-life balance and extra commitments recur; a 2024 music-tutor review raised management and communication concerns in Music."
   ],
   "sources": [
    "https://www.seek.com.au/companies/scotch-college-perth-831083/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Extremely strong academic standing across WACE and IB pathways; school reporting indicates more than 90% of graduates qualify for university entry.",
   "score": 93,
   "url": "https://www.scotch.wa.edu.au/about-us/annual-reports/",
   "label": "Annual and academic reporting"
  },
  "entryReality": "Open boys’ independent-school application with waiting lists; Years 7 and 11 are significant entry points.",
  "programAccess": "Scholarship or specialist success does not remove the need for an enrolment place.",
  "seniorSubjects": {
   "summary": "Senior pathways include WACE, IB Diploma and vocational options; official senior-course information is public.",
   "url": "https://www.scotch.wa.edu.au/a-broad-education/secondary-school/",
   "access": "Public senior pathways"
  },
  "musicReality": {
   "style": "Very broad performance and ensemble culture.",
   "production": "Production not verified",
   "note": "No dedicated contemporary audio-production pathway was verified."
  },
  "productionScore": 48,
  "computing": {
   "csSubject": {
    "status": "not_publicly_verified",
    "detail": "The checked public Scotch College pages did not expose a current on-campus Year 11–12 Computer Science or Applied IT subject list."
   },
   "robotics": {
    "status": "partial",
    "detail": "Mechatronics is a named Scotch Global Thrive course, but this was not verified as a standard on-campus Scotch College competition pathway."
   },
   "engineering": {
    "status": "partial",
    "detail": "Design and Technology and STEM are published to sophisticated levels, while Mechatronics is available through Scotch Global; current on-campus Year 12 Engineering Studies was not verified."
   },
   "digitalDesign": {
    "status": "partial",
    "detail": "Graphic and creative design opportunities are visible, but a current detailed senior digital-design subject list was not publicly verified."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current public Scotch College source checked named a makerspace, fab lab or equivalent secondary facility."
   },
   "note": "Scotch Global evidence is kept separate from ordinary on-campus provision. It is not silently treated as a standard Scotch College subject pathway."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts and Art and Design are offered through senior school, including IB Visual Arts."
   },
   "design": {
    "status": "confirmed",
    "detail": "Art and Design and related digital and production work are included in senior pathways."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is offered in senior school and the College alternates major annual plays and musicals."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis is included in the senior handbook."
   },
   "dance": {
    "status": "confirmed",
    "detail": "The current senior handbook and performing-arts pages were checked; Dance is not listed as a subject or ongoing program."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Current admissions and scholarship information was checked; no visual art, drama, dance or film selective-entry pathway was listed."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The Dickinson Centre includes theatre, audiovisual and recording facilities."
   },
   "note": "Visual arts, design, drama and media have verified senior depth. Dance is a checked-and-absent finding."
  },
  "sport": {
   "body": "Public Schools Association of WA",
   "division": "PSA first-team fixtures plus PSA athletics, swimming and rowing carnivals",
   "specialistProgram": "",
   "note": "Netball and sailing are left null because they are not PSA competition sports and no separate current school offering was verified here.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General",
     "IB Mathematics: Analysis and Approaches SL",
     "IB Mathematics: Analysis and Approaches HL",
     "IB Mathematics: Applications and Interpretation SL"
    ],
    "status": "partial"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR",
     "IB Language and Literature SL",
     "IB Literature SL"
    ],
    "status": "partial"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Marine and Maritime Studies ATAR",
     "Marine and Maritime Studies General",
     "Physics ATAR",
     "IB Biology SL",
     "IB Chemistry SL",
     "IB Physics"
    ],
    "status": "partial"
   },
   "hass": {
    "subjects": [
     "Aboriginal and Intercultural Studies General",
     "Accounting and Finance ATAR",
     "Agribusiness ATAR",
     "Business Management and Enterprise ATAR",
     "Business Management and Enterprise General",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "IB Business Management SL",
     "IB Economics SL",
     "IB Global Politics SL",
     "IB History"
    ],
    "status": "partial"
   },
   "languages": {
    "subjects": [
     "Chinese First Language ATAR",
     "French ATAR",
     "Indonesian ATAR",
     "IB French SL/HL",
     "IB French Language and Literature SL",
     "IB German HL",
     "IB Indonesian SL/HL"
    ],
    "status": "partial"
   },
   "arts": {
    "subjects": [
     "Design ATAR",
     "Design General",
     "Drama ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Certificate II Creative Industries",
     "Certificate II Music",
     "IB Film SL"
    ],
    "status": "partial"
   },
   "technologies": {
    "subjects": [
     "Engineering Studies (Mechatronics) ATAR",
     "Materials Design and Technology (Metal) General",
     "Certificate II Furniture Making",
     "Certificate II Hospitality",
     "Certificate II Workplace Skills",
     "Design ATAR",
     "Design General"
    ],
    "status": "partial"
   },
   "pe": {
    "subjects": [
     "Outdoor Education General",
     "Physical Education Studies ATAR",
     "Physical Education Studies General"
    ],
    "status": "partial"
   },
   "atarVetBalance": "genuine mix across WACE, VET and IB"
  },
  "myschool": {
   "icsea": 1129,
   "topQuarterPct": 49,
   "teachingStaffFTE": 154.7,
   "nonTeachingFTE": 103.1,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 10.0,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Middle School Homeroom; Senior School Mentor Group within a vertical House",
   "unitSize": null,
   "contactFrequency": "Daily at the start of the day",
   "sameAdultAcrossYears": "no",
   "handoverPoint": "On entry to Year 9 Senior School",
   "escalationChain": "Middle School: Homeroom teacher → Middle School pastoral leadership and psychologist/chaplain; Senior School: Mentor → House Head → support teams/psychologist/chaplain",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "confirmed"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 2,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Means-tested academic support: 5%–95% tuition. Music fellowship: 100% annual music tuition to Year 12 and 100% first-year instrument hire.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Auditioned music awards can cover annual specialist tuition through Year 12 and first-year instrument hire.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Academic examination; music audition; reports, NAPLAN, written material and references; interview; financial assessment for means-tested support.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.scotch.wa.edu.au/admissions/scholarships/",
       "title": "Scholarships",
       "quote": "The current inventory publishes academic, music, boarding and Indigenous awards and needs-based support.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "rowingShed": {
     "value": 2,
     "status": "confirmed"
    },
    "pool": {
     "value": 1,
     "status": "confirmed"
    },
    "poolLength": {
     "value": "50m",
     "status": "confirmed"
    },
    "recordingStudio": {
     "value": 1,
     "status": "partial"
    },
    "ovals": {
     "value": 1,
     "status": "confirmed"
    },
    "boarding": {
     "value": 1,
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.scotch.wa.edu.au/about/our-campus/",
       "title": "Campus",
       "quote": "The campus publishes playing fields, a 50-metre pool and a state-of-the-art Boat Shed.",
       "publishedOrCurrent": "current 2026"
      },
      "F2": {
       "url": "https://www.scotch.wa.edu.au/",
       "title": "Facilities overview",
       "quote": "The current site also identifies a podcast studio and six sailing yachts at the Boat Shed.",
       "publishedOrCurrent": "current 2026"
      },
      "F3": {
       "url": "https://www.scotch.wa.edu.au/admissions/",
       "title": "Admissions and boarding",
       "quote": "The College accepts boarding enrolments and operates residential accommodation.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Head of Music",
      "Head of Rowing"
     ],
     "status": "partial"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.scotch.wa.edu.au/admissions/scholarships/",
       "title": "Music selection",
       "quote": "The current scholarship process identifies the Head of Music role.",
       "publishedOrCurrent": "current 2026"
      },
      "R2": {
       "url": "https://www.scotch.wa.edu.au/wp-content/uploads/2022/07/Senior-School-Sports-Handbook.pdf",
       "title": "Senior sport handbook",
       "quote": "The official sport handbook identifies a Head of Rowing role.",
       "publishedOrCurrent": "2022"
      }
     },
     "status": "partial"
    }
   },
   "record": {
    "sport": {
     "value": "2021 PSA: Challenge Trophy at Head of the River; Darlot Cup cricket; Corr Cup tennis; Alcock Cup football; Alcock Shield athletics. Athletics was the fourth consecutive title and sixth in seven years.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.scotch.wa.edu.au/wp-content/uploads/2025/08/SC220529-Performance-Report-2021_1108.pdf",
       "title": "2021 performance report",
       "quote": "The College won the rowing Challenge Trophy, cricket, tennis, football and athletics trophies.",
       "publishedOrCurrent": "2021"
      }
     },
     "status": "partial"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Uniform must be worn completely and correctly; black leather lace-up shoes and the specified shirt, tie, blazer and House tie are prescribed.",
   "assemblyFrequency": "Daily mentor group; whole-school assembly frequency not stated.",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": true,
   "singleSex": true,
   "formalEvents": [
    "Speech Night",
    "Chapel services",
    "Founders' or heritage occasions",
    "Head of the River",
    "senior leadership presentation"
   ],
   "note": "The published traditions combine blazer-and-tie seasonal uniform, House ties, a distinctive Year 12 blazer, daily vertical mentoring and Chapel occasions."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 2,
     "status": "partial"
    },
    "construction": {
     "value": 2,
     "status": "partial"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": 2,
     "status": "partial"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "partial"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "The current resource list confirms Certificate II Furniture Making, Certificate II Hospitality, Certificate II Workplace Skills, Certificate II Creative Industries and Certificate II Music. A resource list can omit courses with no required purchased items, so other fields remain null.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "Registered Training Organisation partners not publicly named",
    "releaseDay": null,
    "facilities": [
     "furniture-making workshop",
     "hospitality facilities",
     "creative-industries and music facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": null,
    "workplaceLearning": 1,
    "careersStaffNamed": null,
    "industryLinks": [],
    "atarVetSplit": ""
   }
  }
 },
 "Christ Church Grammar School": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open boys’ independent-school application subject to waitlists and the published offer timeline."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Academic and Music scholarships are separate competitive processes and do not mean unrestricted entry."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "The school is non-selective but has academic extension classes, scholarships and advanced senior pathways.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Extension grouping across core areas is published; complete year-by-year setting rules were not captured."
   },
   "movement_between_levels": {
    "status": "partial",
    "detail": "Placement is reviewed through results and teacher judgement; exact public rules were not located."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Extension classes, competitions, scholarships and broad enrichment support students who are ahead."
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support and pastoral systems are published; exact intervention thresholds were not verified."
   },
   "framework": {
    "status": "partial",
    "detail": "High expectations, boys’ education and visible pastoral structures are explicit; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current senior subject-selection materials.",
    "url": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection",
    "access": "Public subject handbook"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Biology, Chemistry, Human Biology and Physics are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Economics, Geography, Modern History and Politics and Law are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "languages": {
     "status": "confirmed",
     "detail": "French and Japanese are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Art is offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Design and technology pathways are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computer Science and computing pathways are offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Compulsory PSA sport and extensive representative teams are published.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/sport"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama, Visual Art and performance are published.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computer Science, design, engineering and technology are offered.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Leadership, service and broad co-curricular opportunities are central to the senior-school model.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Chamber and Symphony Orchestras are published.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "wind_band": {
    "status": "partial",
    "detail": "Band opportunities are published; exact current concert-band hierarchy was not fully verified.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "choral": {
    "status": "partial",
    "detail": "Vocal and choral opportunities exist; exact current choir structure was not fully verified.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Bands and ensembles are published.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Rock Bands and contemporary performance are published.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "production": {
    "status": "partial",
    "detail": "Live-recording theory, composition and arranging are published; no dedicated audio-production course was verified.",
    "source": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/the-arts"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition and music scholarships are published.",
    "source": "https://www.ccgs.wa.edu.au/enrolments/scholarships"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not found recent",
   "summary": "A SEEK company profile exists, but no clearly dated 2023-or-later teaching review was located in this pass.",
   "concerns": [
    "Independent staff evidence is currently too thin for confident culture claims."
   ],
   "sources": [
    "https://www.seek.com.au/companies/christ-church-grammar-school-perth-804037"
   ]
  },
  "academicStanding": {
   "summary": "Among WA’s highest-performing boys’ schools. The College reports sustained top-tier results across roughly fifteen years.",
   "score": 97,
   "url": "https://www.ccgs.wa.edu.au/learning-at-christ-church/academic-results",
   "label": "Academic results"
  },
  "entryReality": "Open boys’ independent-school application subject to waitlists and the published offer timeline.",
  "programAccess": "Academic and Music scholarships are separate competitive processes and do not mean unrestricted entry.",
  "seniorSubjects": {
   "summary": "Official Year 11 subject handbook and senior curriculum information are public.",
   "url": "https://www.ccgs.wa.edu.au/learning-at-christ-church/senior-school/subject-selection",
   "access": "Public subject handbook"
  },
  "musicReality": {
   "style": "ATAR Music with substantial practical performance, analysis and composition.",
   "production": "Limited verified production",
   "note": "Composition is supported; dedicated DAW, recording or music-production study was not verified."
  },
  "productionScore": 48,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Computer Science ATAR is available in the current senior subject-sharing program and is supported by substantial coding activity."
   },
   "robotics": {
    "status": "partial",
    "detail": "Robotics Club is current and open-entry evidence exists; international RoboCup competition evidence is older, so competition status is partial rather than current-confirmed."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering Studies ATAR and senior Design and Technology are published."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Current middle and senior evidence includes design, film, media, game art and digital production contexts."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "The Preparatory School has an Innovation Lab, but no equivalent Senior School makerspace was publicly verified and the primary facility was not transferred."
   },
   "note": "Senior Computer Science and Engineering are verified. Robotics is definite, but its high-level competition evidence is historical."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts is offered at ATAR and General level in senior school."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design is offered at ATAR and General level."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama includes regular public productions, including the long-running Midnite Youth Theatre program."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis ATAR is listed in senior school."
   },
   "dance": {
    "status": "confirmed",
    "detail": "The current senior Arts list and co-curricular performing-arts pages were checked; Dance is not listed."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Current admissions and scholarships were checked; no visual art, drama, dance or film selective school-entry pathway was listed."
   },
   "artFacility": {
    "status": "partial",
    "detail": "Existing performance activity is substantial, but the major PERFORM auditorium and black-box complex is a development project and is not counted as fully current."
   },
   "note": "Visual Arts, Design, Drama and Media have senior depth. Dance is checked-and-absent. The future PERFORM complex is not treated as an existing completed facility."
  },
  "sport": {
   "body": "Public Schools Association of WA",
   "division": "PSA first-team fixtures plus PSA athletics, swimming and rowing carnivals",
   "specialistProgram": "",
   "note": "Netball and sailing are left null because they are not PSA competition sports and no separate current school offering was verified here.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Marine and Maritime Studies ATAR",
     "Marine and Maritime Studies General",
     "Physics ATAR",
     "Psychology ATAR"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Ancient History ATAR",
     "Business Management and Enterprise ATAR",
     "Business Management and Enterprise General",
     "Careers and Employability General",
     "Economics ATAR",
     "Geography ATAR",
     "Geography General",
     "Modern History ATAR",
     "Philosophy and Ethics ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese Second Language ATAR",
     "Chinese First Language ATAR",
     "French Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Design ATAR",
     "Design General",
     "Media Production and Analysis ATAR",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Drama ATAR",
     "Drama General",
     "Music ATAR",
     "Music General",
     "Certificate III Music"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Computer Science ATAR",
     "Applied Information Technology ATAR",
     "Engineering Studies ATAR",
     "Materials Design and Technology ATAR",
     "Materials Design and Technology General",
     "Food Science and Technology General",
     "Certificate III Information Technology",
     "Design ATAR",
     "Design General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Physical Education Studies ATAR",
     "Physical Education Studies General",
     "Certificate III Fitness"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "ATAR-majority with General and certificate options"
  },
  "myschool": {
   "icsea": 1193,
   "topQuarterPct": 77,
   "teachingStaffFTE": 165.9,
   "nonTeachingFTE": 99.5,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 10.2,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Tutor Group within a vertical House",
   "unitSize": null,
   "contactFrequency": "Every morning",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Tutor as first contact → Head of House and specialist pastoral/wellbeing support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 2,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 2,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 1,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "partial"
    },
    "maxRemission": {
     "value": "Up to 50% tuition on a published Council scholarship.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "A Year 7 music scholarship is selected by audition; instrument tuition and hire coverage were not established.",
     "status": "partial"
    },
    "applicationBasis": {
     "value": "Scholarship examination; audition for music and drama where applicable; reports and NAPLAN; interview; supporting evidence for targeted awards.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.ccgs.wa.edu.au/enrolments/scholarships",
       "title": "Scholarships",
       "quote": "The current inventory includes academic, music, drama, boarding, general-excellence, Indigenous and philanthropic awards.",
       "publishedOrCurrent": "current 2026"
      },
      "S2": {
       "url": "https://www2.ccgs.wa.edu.au/enrolments/scholarships/council-scholarship-boarding/",
       "title": "Council scholarship conditions",
       "quote": "A published Council scholarship is valued at up to 50% of tuition fees.",
       "publishedOrCurrent": "2027 entry"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "rowingShed": {
     "value": 2,
     "status": "confirmed"
    },
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 1,
     "status": "confirmed"
    },
    "gallery": {
     "value": 1,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "ovals": {
     "value": 1,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "boarding": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2026–2028: PERFORM is in demolition/construction, with completion scheduled for December 2028. It includes a 470-seat auditorium, 220-seat black box, recording studio, ensemble room and practice rooms.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.ccgs.wa.edu.au/wp-content/uploads/2024/05/Internal_2024_0015-Campus-Map-update-v0211.pdf",
       "title": "Campus map",
       "quote": "The map labels a Boatshed, boarding houses, music, drama, gallery, visual arts, design technology, gym and ovals.",
       "publishedOrCurrent": "2024"
      },
      "F2": {
       "url": "https://www.ccgs.wa.edu.au/community/giving/perform-campaign",
       "title": "PERFORM capital project",
       "quote": "The project includes a 470-seat auditorium, 220-seat black box, recording studio and music practice rooms.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Director of Drama",
      "Director of Music",
      "Director of ICT",
      "Teacher in Charge of Rowing",
      "Head of the Centre for Excellence (Senior School)"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.ccgs.wa.edu.au/community/giving/perform-campaign",
       "title": "PERFORM leadership",
       "quote": "The project was designed in consultation with the Directors of Drama, Music and ICT.",
       "publishedOrCurrent": "current 2026"
      },
      "R2": {
       "url": "https://www.ccgs.wa.edu.au/news/senior-school/christ-church-claims-victory-at-head-of-the-river-regatta",
       "title": "Rowing leadership",
       "quote": "The 2025 result article identifies the Teacher in Charge of Rowing role.",
       "publishedOrCurrent": "27 March 2025"
      },
      "R3": {
       "url": "https://www.ccgs.wa.edu.au/news/senior-school/christ-church-crowned-double-state-champions-at-da-vinci-decathlon",
       "title": "Academic-extension leadership",
       "quote": "The 2026 result article identifies the Head of the Centre for Excellence (Senior School).",
       "publishedOrCurrent": "21 May 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "sport": {
     "value": "2025 PSA Head of the River: Challenge Cup winner; shared Hamer Cup; two course records; first dual-cup result in 20 years.",
     "status": "confirmed"
    },
    "academic": {
     "value": "2026 National da Vinci Decathlon: Year 10 third overall; Year 7 equal fifth overall, including first in Creative Producers. 2025 median ATAR 92.1; top ATAR 99.95.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.ccgs.wa.edu.au/news/senior-school/christ-church-claims-victory-at-head-of-the-river-regatta",
       "title": "2025 Head of the River",
       "quote": "The team won the Challenge Cup, shared the Hamer Cup and set two course records.",
       "publishedOrCurrent": "27 March 2025"
      },
      "D2": {
       "url": "https://www.ccgs.wa.edu.au/news/senior-school/christ-church-among-australias-best-at-national-da-vinci-decathlon",
       "title": "2026 National da Vinci Decathlon",
       "quote": "Year 7 finished equal fifth overall and Year 10 placed third overall nationally.",
       "publishedOrCurrent": "23 July 2026"
      },
      "D3": {
       "url": "https://www2.ccgs.wa.edu.au/about/academic-results/",
       "title": "2025 academic results",
       "quote": "The 2025 cohort recorded a median ATAR of 92.1 and a highest ATAR of 99.95.",
       "publishedOrCurrent": "2025"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Students must meet the published standards for hair, shaving, jewellery and complete formal presentation; formal uniform includes white shirt, tie, blazer and prescribed shoes.",
   "assemblyFrequency": "Weekly whole-Senior-School Principal's Assembly on Thursday morning",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": true,
   "singleSex": true,
   "formalEvents": [
    "Prefect Induction Service",
    "weekly Principal's Assembly",
    "Speech Night",
    "Anzac service",
    "Valedictory",
    "Head of the River"
   ],
   "note": "The School publishes a highly structured ceremonial layer: formal seasonal uniform, weekly assembly in Chapel, tiered Prefects, Houses and boarding traditions."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": 1,
     "status": "partial"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "it": {
     "value": 2,
     "status": "confirmed"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current named school qualifications: Certificate III Information Technology; Certificate III Music; Certificate III Fitness. Senior students may also complete Workplace Learning and practical credentials such as White Card training through external providers.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "External Registered Training Organisations and workplace providers",
    "releaseDay": true,
    "facilities": [
     "information-technology facilities",
     "music facilities",
     "fitness facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": null,
    "industryLinks": [
     "external RTOs",
     "workplace host employers",
     "construction safety training provider"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Hale School": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open boys’ independent-school application, with reports and NAPLAN considered and major intake points subject to capacity."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Scholarships and enrichment opportunities do not replace the normal enrolment process."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "The school is non-selective but provides academic enrichment, scholarships and extensive senior pathways.",
    "source": "https://www.hale.wa.edu.au/learning/learning-support-enrichment/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Enrichment and support are published; exact setting by subject and year was not fully verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules were not located."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Learning enrichment, competitions, scholarships and broad advanced subjects support students who are ahead.",
    "source": "https://www.hale.wa.edu.au/learning/learning-support-enrichment/"
   },
   "behind": {
    "status": "confirmed",
    "detail": "Learning support and enrichment are both formal parts of the school structure.",
    "source": "https://www.hale.wa.edu.au/learning/learning-support-enrichment/"
   },
   "framework": {
    "status": "partial",
    "detail": "Boys’ education, mentoring and enrichment are published; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current Year 11 Course Handbook.",
    "url": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf",
    "access": "Public handbook"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "english": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "music": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "PSA sport, extensive grounds and major representative programs are published.",
    "source": "https://www.hale.wa.edu.au/sport/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama, Visual Arts, technical theatre and creative arts are published.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computing, engineering and design pathways are available in the senior handbook.",
    "source": "https://www.hale.wa.edu.au/wp-content/uploads/2025/10/Year-11-Course-Handbook-2026.pdf"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Leadership, service and Redfoot youth arts production provide authentic responsibility.",
    "source": "https://www.hale.wa.edu.au/redfoot/"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "String orchestras and broad orchestral ensembles are published.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert bands are published.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choirs are published.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Big bands and Jazz are published.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary music and rock activity are explicit.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   },
   "production": {
    "status": "partial",
    "detail": "Sound, lighting and technical production are visible through Redfoot and performances; a dedicated audio-production subject was not verified.",
    "source": "https://www.hale.wa.edu.au/redfoot/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Individual instrumental tuition and large ensemble participation are published.",
    "source": "https://www.hale.wa.edu.au/learning/performing-and-creative-arts/music/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "2025–2026 aggregate",
   "summary": "SEEK contains mixed evidence about resources, students, workload and management.",
   "positives": [
    "Reviewers describe strong facilities, supportive colleagues, good student behaviour and generous benefits."
   ],
   "concerns": [
    "Work-life balance, sport and co-curricular workload, corporate management and communication are recurring concerns."
   ],
   "sources": [
    "https://www.seek.com.au/companies/hale-school-1224252/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Exceptionally strong 2025 outcomes: 100% WACE achievement, with 32% of the ATAR cohort in the top 5% statewide and 47% in the top 10%.",
   "score": 96,
   "url": "https://www.hale.wa.edu.au/2025-year-12-results/",
   "label": "2025 results"
  },
  "entryReality": "Open boys’ independent-school application, with reports and NAPLAN considered and major intake points subject to capacity.",
  "programAccess": "Scholarships and enrichment opportunities do not replace the normal enrolment process.",
  "seniorSubjects": {
   "summary": "Official Year 11 curriculum handbook is publicly available.",
   "url": "https://www.hale.wa.edu.au/wp-content/uploads/2025/06/2026-Year-11-Curriculum-Handbook.pdf",
   "access": "Public handbook"
  },
  "musicReality": {
   "style": "Western Art, Jazz and Contemporary music are explicitly recognised.",
   "production": "Some verified production",
   "note": "Contemporary study is present, but dedicated production depth was not clearly established."
  },
  "productionScore": 58,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Applied Information Technology WACE is offered in Years 11 and 12."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Senior Engineering Studies is a named Mechatronics specialism using programmable microcontrollers and student-built models."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering Studies ATAR and General and Materials Design and Technology continue through Year 12."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Applied Information Technology and senior media pathways are published."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current public source checked named a makerspace, fab lab or equivalent facility."
   },
   "note": "Hale was omitted from the user’s pasted school list but restored because it is present in the original 22-school export. Mechatronics is a verified senior pathway."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts ATAR and General are listed in the current Year 11 handbook."
   },
   "design": {
    "status": "partial",
    "detail": "Graphic-design and design processes occur in Visual Arts and Technologies, but a separate senior Arts Design course was not verified."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Senior Drama and regular productions are supported by dedicated drama facilities and Redfoot Youth Theatre."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis ATAR is listed in the current senior handbook, with film-making opportunities also documented."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance appears in Year 9 arts experiences and productions, but no senior Dance course is listed."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "The current handbook and entry pathways were checked; no formal visual-art, drama, dance or media selective admission route was listed."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The Cygnet Theatre precinct and John Inverarity Music and Drama Centre provide named theatre, drama and media spaces."
   },
   "note": "Visual Arts, Drama and Media have verified senior pathways. Dance is present as an experience rather than a senior course."
  },
  "sport": {
   "body": "Public Schools Association of WA",
   "division": "PSA first-team fixtures plus PSA athletics, swimming and rowing carnivals",
   "specialistProgram": "",
   "note": "Netball and sailing are left null because they are not PSA competition sports and no separate current school offering was verified here.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English as an Additional Language or Dialect ATAR",
     "Literature ATAR",
     "English General"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Business Management and Enterprise General",
     "Careers and Employability General",
     "Economics ATAR",
     "Geography ATAR",
     "Geography General",
     "Ancient History ATAR",
     "Modern History ATAR",
     "Philosophy and Ethics ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Chinese Second Language ATAR",
     "French Second Language ATAR",
     "Japanese Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis ATAR",
     "Music ATAR",
     "Visual Arts ATAR",
     "Visual Arts General"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Applied Information Technology ATAR",
     "Applied Information Technology General",
     "Engineering Studies ATAR",
     "Engineering Studies General",
     "Materials Design and Technology (Wood) ATAR",
     "Materials Design and Technology (Wood) General",
     "Materials Design and Technology (Metal) General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Physical Education Studies ATAR",
     "Physical Education Studies General",
     "Outdoor Education General"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "mostly ATAR with General and VET options"
  },
  "myschool": {
   "icsea": 1161,
   "topQuarterPct": 65,
   "teachingStaffFTE": 160.9,
   "nonTeachingFTE": 115.1,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 10.1,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Pastoral Care Leader in Year 7; broader all-level pastoral unit not publicly named",
   "unitSize": null,
   "contactFrequency": "",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 2,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 1,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "partial"
    },
    "maxRemission": {
     "value": "Up to 100% fee remission through a means-tested academic access scholarship.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "One award provides up to 50% tuition remission plus fully subsidised music tuition in one instrument; selection includes audition and reference.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Academic examination; audition and music reference; written submission, reports, NAPLAN, references and interview; means testing where applicable.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.hale.wa.edu.au/scholarships/",
       "title": "Scholarships",
       "quote": "The current inventory publishes academic, music, general-excellence, boarding and Indigenous awards.",
       "publishedOrCurrent": "current 2026"
      },
      "S2": {
       "url": "https://www.hale.wa.edu.au/about-hale/foundation/",
       "title": "Foundation scholarship support",
       "quote": "A means-tested academic scholarship can provide up to 100% fee remission from Year 7 to Year 12.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "rowingShed": {
     "value": 2,
     "status": "confirmed"
    },
    "pool": {
     "value": 2,
     "status": "confirmed"
    },
    "poolLength": {
     "value": "50m competition pool plus 25m learn-to-swim pool",
     "status": "confirmed"
    },
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 1,
     "status": "partial"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "ovals": {
     "value": 2,
     "status": "confirmed"
    },
    "boarding": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2024: a new theatre precinct opened with specialist media and drama studios. A further performing-arts redevelopment is planned with a 220-seat theatre and recording suite.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.hale.wa.edu.au/about-hale/our-campus-facilities/",
       "title": "Campus facilities",
       "quote": "The 48-hectare campus has 11 playing fields, two gymnasiums and two heated outdoor pools.",
       "publishedOrCurrent": "current 2026"
      },
      "F2": {
       "url": "https://www.hale.wa.edu.au/hale-swimming/",
       "title": "Aquatic Centre",
       "quote": "The centre contains an Olympic-sized 50-metre pool and a purpose-built 25-metre learn-to-swim pool.",
       "publishedOrCurrent": "current 2026"
      },
      "F3": {
       "url": "https://www.hale.wa.edu.au/the-arts/",
       "title": "Arts facilities",
       "quote": "The School publishes a Music and Drama Centre, an auditorium and a theatre precinct with specialist studios.",
       "publishedOrCurrent": "current 2026"
      },
      "F4": {
       "url": "https://www.hale.wa.edu.au/about-hale/foundation/capital-projects/",
       "title": "Capital projects",
       "quote": "A planned performing-arts precinct includes a 220-seat theatre and recording suite.",
       "publishedOrCurrent": "current 2026"
      },
      "F5": {
       "url": "https://www.hale.wa.edu.au/2026/03/27/old-boys-day-2026/",
       "title": "Boatshed",
       "quote": "The 2026 school event was held at the operating boatshed.",
       "publishedOrCurrent": "27 March 2026"
      },
      "F6": {
       "url": "https://www.hale.wa.edu.au/about-hale/boarding/",
       "title": "Boarding",
       "quote": "The School operates a residential boarding community on campus.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Director of Music"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.hale.wa.edu.au/scholarships/",
       "title": "Music selection",
       "quote": "Auditioned music applicants meet the Director of Music.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "sport": {
     "value": "2025: seven PSA trophies across cricket, volleyball, basketball, football, soccer, badminton and rugby; surfing carnival winner. 2025–26 summer: premierships in cricket, basketball, volleyball and swimming.",
     "status": "confirmed"
    },
    "academic": {
     "value": "Class of 2025: 100% WACE attainment; one ATAR of 99.95; three General Exhibitions; 52 students in the top 5% and 83 in the top 10%.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.hale.wa.edu.au/2026/04/01/summer-sport-success/",
       "title": "2025–26 PSA summer sport",
       "quote": "The School won PSA premierships in cricket, basketball, volleyball and swimming.",
       "publishedOrCurrent": "1 April 2026"
      },
      "D2": {
       "url": "https://www.hale.wa.edu.au/2025/11/03/hale-sport-in-the-history-books/",
       "title": "2025 PSA season",
       "quote": "The School secured seven PSA trophies, its most successful season to that date.",
       "publishedOrCurrent": "3 November 2025"
      },
      "D3": {
       "url": "https://www.hale.wa.edu.au/2026/01/05/outstanding-outcomes-for-the-class-of-2025/",
       "title": "Class of 2025 results",
       "quote": "The cohort achieved 100% WACE attainment and multiple state exhibition awards.",
       "publishedOrCurrent": "5 January 2026"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Uniform is to be worn neatly; the School tie is required and shirts are to be tucked in.",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": true,
   "singleSex": true,
   "formalEvents": [
    "Valedictory Day",
    "Senior School Speech Day",
    "Junior School Speech Morning",
    "Old Boys' Day",
    "Chapel services",
    "Head of the River"
   ],
   "note": "The documented model combines tie-and-winter-blazer presentation with Prefects, active Houses, Chapel and multiple named annual speech and valedictory ceremonies."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 1,
     "status": "partial"
    },
    "construction": {
     "value": 1,
     "status": "partial"
    },
    "automotive": {
     "value": 1,
     "status": "partial"
    },
    "business": {
     "value": 1,
     "status": "partial"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 1,
     "status": "partial"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current detailed certificate selections are not publicly exposed. The public CareerLink structure arranges TAFE/RTO qualifications, and official historical examples include Certificate II Plumbing, Hospitality, Electrotechnology, Business and Screen and Media. These fields are partial rather than confirmed current offerings.",
   "delivery": {
    "onCampus": false,
    "externalPartner": "CareerLink, North Metropolitan TAFE, South Metropolitan TAFE and private RTOs",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "North Metropolitan TAFE",
     "South Metropolitan TAFE",
     "CareerLink",
     "private RTOs",
     "workplace host employers"
    ],
    "atarVetSplit": "2020 cohort: 87.1% received an ATAR; 23 students followed CareerLink and 2 followed a General pathway."
   }
  }
 },
 "Wesley College": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Non-selective independent application, normally ordered by date of application and availability. Secondary years are boys only."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Scholarships have separate eligibility and selection requirements."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "partial",
    "detail": "The school is non-selective but provides scholarships, broad senior pathways and Katitjin experiential learning."
   },
   "setting_streaming": {
    "status": "not_publicly_verified",
    "detail": "Exact setting by subject and year was not verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Scholarships, advanced subjects, broad activities and mentoring support high-potential students.",
    "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
   },
   "behind": {
    "status": "partial",
    "detail": "Pastoral and learning support are published; exact intervention rules were not verified."
   },
   "framework": {
    "status": "confirmed",
    "detail": "Katitjin experiential learning, broad co-curricular development and whole-person education.",
    "source": "https://www.wesley.wa.edu.au/learning/what-is-katitjin/"
   }
  },
  "subjects": {
   "source": {
    "summary": "Current Years 11 and 12 course guide.",
    "url": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/",
    "access": "Public course guide"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Mathematics Methods and Specialist are offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "english": {
     "status": "confirmed",
     "detail": "English and Literature are offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "A broad set of senior sciences is offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "hass": {
     "status": "confirmed",
     "detail": "A broad set of HASS subjects is offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "languages": {
     "status": "confirmed",
     "detail": "French is offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Visual Arts and Media are offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Drama is offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "music": {
     "status": "confirmed",
     "detail": "Music is offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Engineering and Materials Design and Technology are offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Computer Science and digital technologies are offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Physical Education Studies is offered.",
     "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "PSA sport and a very broad co-curricular sport program are published.",
    "source": "https://www.wesley.wa.edu.au/learning/co-curricular/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama, Visual Art and performance are published.",
    "source": "https://www.wesley.wa.edu.au/learning/co-curricular/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computer Science, engineering and technology are included in senior pathways.",
    "source": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Katitjin, leadership, service and broad co-curricular programs provide project and community responsibility.",
    "source": "https://www.wesley.wa.edu.au/learning/what-is-katitjin/"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Symphony Orchestra is published.",
    "source": "https://www.wesley.wa.edu.au/learning/co-curricular/"
   },
   "wind_band": {
    "status": "partial",
    "detail": "Band opportunities are published; exact concert-band hierarchy was not fully verified."
   },
   "choral": {
    "status": "confirmed",
    "detail": "Wesley Chorus is published.",
    "source": "https://www.wesley.wa.edu.au/learning/co-curricular/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Orchestra and Big Band are published.",
    "source": "https://www.wesley.wa.edu.au/learning/co-curricular/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary styles and instruments are recognised, including in scholarships.",
    "source": "https://www.wesley.wa.edu.au/enrolment/scholarships/"
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "No dedicated audio-production or DAW curriculum was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition and music scholarships are published.",
    "source": "https://www.wesley.wa.edu.au/enrolment/scholarships/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not found recent",
   "summary": "No sufficiently specific recent SEEK, Glassdoor or Indeed teaching review was located in this pass.",
   "concerns": [
    "Independent workplace evidence is currently absent; parent commentary is not a substitute for staff evidence."
   ]
  },
  "academicStanding": {
   "summary": "Strong senior outcomes. The 2024 median ATAR was reported at 89.30, with multiple students above 99.",
   "score": 90,
   "url": "https://www.wesley.wa.edu.au/learning/academic-results/",
   "label": "Academic results"
  },
  "entryReality": "Non-selective independent application, normally ordered by date of application and availability. Secondary years are boys only.",
  "programAccess": "Scholarships have separate eligibility and selection requirements.",
  "seniorSubjects": {
   "summary": "Official Years 11 and 12 course guide is available.",
   "url": "https://www.wesley.wa.edu.au/learning/senior-school/course-selection/",
   "access": "Public course guide"
  },
  "musicReality": {
   "style": "Broad performance program with piano and contemporary instruments recognised in scholarships.",
   "production": "Limited verified production",
   "note": "Contemporary instrumentation is visible, but dedicated production study was not verified."
  },
  "productionScore": 50,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Computer Science is published as a senior pathway and is housed in the Clive Hamer Wing."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Current curriculum evidence includes a named Game Design and Robotics pathway using programmable systems."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Engineering is published through senior study and supported by dedicated prototyping facilities."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Game design, coding and digital product development are published."
   },
   "makerspace": {
    "status": "confirmed",
    "detail": "The Clive Hamer Wing explicitly houses Makerspace programs and prototyping zones with 3D printing."
   },
   "note": "All five fields have direct program or facility evidence. The named makerspace and prototyping laboratories are unusually explicit."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Art is listed in the current senior course guide and supported by the Arts Lab."
   },
   "design": {
    "status": "partial",
    "detail": "Design activity is substantial across arts and technology, but a standalone senior visual-design course was not clearly verified."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is offered in senior school and supported by regular productions in a dedicated theatre."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media is listed in the current senior guide, with photography and production work also offered."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is part of the College arts program, but no standalone Year 12 Dance course was verified."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual art, drama, film or dance admission route requiring audition or portfolio was verified."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names the Joseph Green Centre theatre and dedicated Arts Lab facilities."
   },
   "note": "Visual Art, Drama and Media have verified senior depth. Dance is present but was not verified as a Year 12 subject."
  },
  "sport": {
   "body": "Public Schools Association of WA",
   "division": "PSA first-team fixtures plus PSA athletics, swimming and rowing carnivals",
   "specialistProgram": "",
   "note": "Netball and sailing are left null because they are not PSA competition sports and no separate current school offering was verified here.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR",
     "Mathematics Essential General"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English ATAR",
     "English General",
     "Literature ATAR",
     "English as an Additional Language or Dialect ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Physics ATAR",
     "Psychology ATAR",
     "Marine and Maritime Studies ATAR",
     "Marine and Maritime Studies General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Accounting and Finance ATAR",
     "Business Management and Enterprise ATAR",
     "Business Management and Enterprise General",
     "Economics ATAR",
     "Geography ATAR",
     "Modern History ATAR",
     "Philosophy and Ethics ATAR",
     "Politics and Law ATAR"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "French Second Language ATAR"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Drama ATAR",
     "Drama General",
     "Media Production and Analysis ATAR",
     "Media Production and Analysis General",
     "Music ATAR",
     "Music General",
     "Visual Arts ATAR",
     "Visual Arts General",
     "Design (Photography) General"
    ],
    "status": "confirmed"
   },
   "technologies": {
    "subjects": [
     "Computer Science ATAR",
     "Engineering Studies ATAR",
     "Engineering Studies General",
     "Design (Photography) General",
     "Materials Design and Technology (Wood) General",
     "Materials Design and Technology (Metal) General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Physical Education Studies ATAR",
     "Physical Education Studies General"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix with VET presence"
  },
  "myschool": {
   "icsea": 1147,
   "topQuarterPct": 61,
   "teachingStaffFTE": 116.8,
   "nonTeachingFTE": 96.7,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 11.2,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Tutor in Years 5–8; Mentor Group in Years 9–12",
   "unitSize": 12,
   "contactFrequency": "",
   "sameAdultAcrossYears": "no",
   "handoverPoint": "On entry to Year 9",
   "escalationChain": "Tutor or Mentor → Team Lead / Head of Year or Head of School → sub-school pastoral team → College psychologist",
   "status": {
    "unitSize": "confirmed",
    "sameAdultAcrossYears": "confirmed"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 2,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 2,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "partial"
    },
    "maxRemission": {
     "value": "Up to 50% tuition and boarding where applicable; combined music award also covers 100% instrumental tuition for one instrument.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Audition requires two contrasting pieces and an interview. A combined award can include full instrumental tuition for one instrument.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Academic examination; music audition and interview; reports and supporting material; eligibility conditions for targeted awards.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.wesley.wa.edu.au/enrolment/scholarships/",
       "title": "Scholarships",
       "quote": "Scholarships provide 25%–50% tuition remission; combined music awards also cover one instrument tuition.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "pool": {
     "value": 1,
     "status": "confirmed"
    },
    "poolLength": {
     "value": "50m",
     "status": "confirmed"
    },
    "theatre": {
     "value": 1,
     "status": "confirmed"
    },
    "gym": {
     "value": 2,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "roboticsLab": {
     "value": 1,
     "status": "partial"
    },
    "makerspace": {
     "value": 2,
     "status": "confirmed"
    },
    "boarding": {
     "value": 1,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2026–2027: the Centenary Building Project adds four indoor courts, an 1,800-seat gathering space, teaching facilities, a high-performance centre, a new 50m pool and a full-size water-polo pool.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.wesley.wa.edu.au/contact-us/",
       "title": "Campus facilities",
       "quote": "The campus publishes theatre and sporting facilities, a heated 50-metre pool, sports centre and design-technology facilities.",
       "publishedOrCurrent": "current 2026"
      },
      "F2": {
       "url": "https://www.wesley.wa.edu.au/award-winning-innovation/",
       "title": "Innovation facilities",
       "quote": "A 2019 refurbishment created prototyping zones for building, 3D printing, model creation and construction.",
       "publishedOrCurrent": "current 2026"
      },
      "F3": {
       "url": "https://www.wesley.wa.edu.au/the-cliver-hamer-wing-opens/",
       "title": "Technology facility",
       "quote": "The facility supports laser cutting, 3D printing, virtual reality, robot building and makerspace programs.",
       "publishedOrCurrent": "2018; current operation corroborated"
      },
      "F4": {
       "url": "https://www.wesley.wa.edu.au/only-the-daring/discover/",
       "title": "Centenary Building Project",
       "quote": "Phase 1 opens in Term 3 2026; the aquatic and high-performance phase is scheduled for mid-2027.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Head of Music",
      "Director of Football",
      "Director of Hockey"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.wesley.wa.edu.au/enrolment/scholarships/",
       "title": "Music selection",
       "quote": "The music audition panel includes the Head of Music.",
       "publishedOrCurrent": "current 2026"
      },
      "R2": {
       "url": "https://www.wesley.wa.edu.au/about-us/teacher-spotlight/",
       "title": "Specialist sport roles",
       "quote": "The staff profile page publishes Director of Football and Director of Hockey roles.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "academic": {
     "value": "2024: median ATAR 89.30; 14 students (21.5%) achieved 95+; 30 students (46.2%) achieved 90+; 95.4% achieved 70+.",
     "status": "confirmed"
    },
    "alumniDomains": {
     "value": [
      "Cricket — four Australian Test players and one England Test player explicitly counted by the College.",
      "AFL — at least five elite-league players explicitly listed by the College."
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://www.wesley.wa.edu.au/wesley-students-excel-in-atar-results-2024/",
       "title": "2024 academic results",
       "quote": "The cohort recorded an 89.30 median ATAR; 21.5% achieved 95+ and 46.2% achieved 90+.",
       "publishedOrCurrent": "9 January 2025"
      },
      "D2": {
       "url": "https://www.wesley.wa.edu.au/learning/co-curricular/sport/",
       "title": "Sport alumni record",
       "quote": "The College publishes a countable Test-cricket and elite-football alumni record.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "partial"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Best dress specifies the complete white-shirt, blazer, House-tie, trousers and black-shoe presentation.",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": true,
   "singleSex": false,
   "formalEvents": [
    "Speech Night",
    "Valedictory Assembly",
    "special Chapel services",
    "House ceremonies",
    "Head of the River"
   ],
   "note": "Best dress, House ties, blazer use at Chapel and assembly, a ceremonial bell and named Speech and Valedictory occasions create the documented formal layer."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": 2,
     "status": "confirmed"
    },
    "it": {
     "value": 2,
     "status": "confirmed"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": 2,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current school qualifications: ICT20120 Certificate II Applied Digital Technologies; BSB20120 Certificate II Workplace Skills; SIS20321 Certificate II Sport Coaching. The guide also provides INSTEP Workplace Learning and access to other external VET opportunities whose fields vary.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "INSTEP and external VET/RTO providers",
    "releaseDay": true,
    "facilities": [
     "digital-technology facilities",
     "sport-coaching facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 2,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "INSTEP",
     "external RTOs",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "CBC Fremantle": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open boys’ Catholic-school application with Year 7 as the major intake; expression of interest, interview and offer occur well ahead of entry."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Academic Excellence is an internal performance-based pathway, not a separate external entry route. Music scholarships assist lesson costs rather than school tuition."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Academic Excellence uses enriched and accelerated classes with continuation tied to performance.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/learning-support-and-extension/academic-excellence-program"
   },
   "setting_streaming": {
    "status": "confirmed",
    "detail": "Academic Excellence students are grouped for enriched core study.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/learning-support-and-extension/academic-excellence-program"
   },
   "movement_between_levels": {
    "status": "confirmed",
    "detail": "Continued place in the program is performance-based; complete entry/exit thresholds should be confirmed with the College.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/learning-support-and-extension/academic-excellence-program"
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Academic Excellence, competitions and extension provide formal stretch.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/learning-support-and-extension/academic-excellence-program"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support and mentor systems are published; exact intervention thresholds were not verified."
   },
   "framework": {
    "status": "partial",
    "detail": "A boys’ learning and Edmund Rice formation model is explicit; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Public curriculum overview and performance information; a single current full subject handbook was not located.",
    "url": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc",
    "access": "Public overview"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "english": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "languages": {
     "status": "partial",
     "detail": "Language study exists; the current senior list was not verified.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "music": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Represented in the published curriculum overview.",
     "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad boys’ sport and representative teams are published.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/co-curricular/co-curricular-sport"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama, Visual Art, Media and productions are published.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/co-curricular/co-curricular-arts"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Digital technologies, media and design pathways are included in the curriculum.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership, service and academic competitions are published; a dedicated entrepreneurship pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Orchestra is published.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/co-curricular/co-curricular-arts"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Bands are published.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/co-curricular/co-curricular-arts"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choir is published and required for some music scholarship recipients.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/enrolments/scholarships-and-bursaries"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Orchestra and Jazz Combo are published.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/co-curricular/co-curricular-arts"
   },
   "contemporary": {
    "status": "partial",
    "detail": "Contemporary performance is present, but exact rock/pop ensemble structure was not fully verified."
   },
   "production": {
    "status": "not_publicly_verified",
    "detail": "Media and music exist, but no dedicated audio-production curriculum was verified."
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Music scholarships support individual tuition and require ensemble/choir participation.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/enrolments/scholarships-and-bursaries"
   }
  },
  "pastoral": {
   "unit": {
    "status": "confirmed",
    "detail": "Mentor system.",
    "source": "https://www.cbcfremantle.wa.edu.au/view/pastoral-care"
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "partial",
    "detail": "Mentor and pastoral leaders connect to student support; a formal published chain was not located."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not found recent",
   "summary": "No sufficiently specific recent staff review was located in SEEK, Glassdoor or Indeed in this pass.",
   "concerns": [
    "An older alumni account about boys’ culture exists, but alumni commentary is not staff-review evidence and may not reflect the current school."
   ]
  },
  "academicStanding": {
   "summary": "Credible broad-school outcomes with Academic Excellence and ATAR pathways; exact current comparable whole-cohort figures should be checked in the performance report.",
   "score": 80,
   "url": "https://www.cbcfremantle.wa.edu.au/view/college-information/school-performance-information",
   "label": "Performance information"
  },
  "entryReality": "Open boys’ Catholic-school application with Year 7 as the major intake; expression of interest, interview and offer occur well ahead of entry.",
  "programAccess": "Academic Excellence is an internal performance-based pathway, not a separate external entry route. Music scholarships assist lesson costs rather than school tuition.",
  "seniorSubjects": {
   "summary": "Senior curriculum and performance information are publicly available, although the full current subject handbook was not located as one open document.",
   "url": "https://www.cbcfremantle.wa.edu.au/view/learning-at-cbc/learning-at-cbc",
   "access": "Public curriculum overview"
  },
  "musicReality": {
   "style": "Performance-led Music within a broader Arts and Media environment.",
   "production": "Limited verified production",
   "note": "Media and music are available, but a dedicated audio-production pathway was not verified."
  },
  "productionScore": 48,
  "computing": {
   "csSubject": {
    "status": "not_publicly_verified",
    "detail": "The current public curriculum page names Design and Technology but does not expose a current Year 11–12 Computer Science or Applied IT list."
   },
   "robotics": {
    "status": "not_publicly_verified",
    "detail": "A Robotics Club was documented in 2016, but no current continuation was found, so the old club is not coded as current."
   },
   "engineering": {
    "status": "partial",
    "detail": "Design and Technology is current, and senior electrotechnology appears in the fee schedule; a current Year 12 Engineering Studies or MDT pathway was not fully verified."
   },
   "digitalDesign": {
    "status": "not_publicly_verified",
    "detail": "No current public subject page clearly established senior digital media, game design or digital product design."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current named makerspace, fab lab or design studio was found."
   },
   "note": "The current public curriculum detail is too thin for confident coding. Historical robotics evidence is retained only as a note, not as a current value."
  },
  "arts": {
   "visualArt": {
    "status": "partial",
    "detail": "Visual Arts and an annual art exhibition are current, but a complete public Year 12 course list was not located."
   },
   "design": {
    "status": "partial",
    "detail": "Visual and Media Arts provide design-related work, but exact senior Design course continuity was not verified."
   },
   "drama": {
    "status": "partial",
    "detail": "Drama and regular productions are current, though a complete current senior course list was not public."
   },
   "film": {
    "status": "partial",
    "detail": "Media Arts and student film-festival opportunities are documented, but a Year 12 Media course was not publicly verified."
   },
   "dance": {
    "status": "confirmed",
    "detail": "The current Arts page was checked and lists Music, Drama, Visual Arts and Media Arts, not Dance."
   },
   "artSelective": {
    "status": "confirmed",
    "detail": "Current enrolment and scholarship information was checked; no formal non-music arts selective pathway was listed."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The restored Waterford Theatre is a named performance facility."
   },
   "note": "The College has visible visual, drama and media activity, but the exact senior subject depth is not fully public. Dance is checked-and-absent."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Southern Coastal Associated Schools",
   "division": "ACC Swimming A Division in 2026",
   "specialistProgram": "",
   "note": "The College describes an extensive sport program, but unnamed sports remain null rather than being inferred.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "not_publicly_verified"
    },
    "basketball": {
     "status": "not_publicly_verified"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "not_publicly_verified"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "english": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "sciences": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "hass": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "languages": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "arts": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "technologies": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "pe": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "atarVetBalance": "genuine mix with VET presence"
  },
  "myschool": {
   "icsea": 1092,
   "topQuarterPct": 34,
   "teachingStaffFTE": 82.7,
   "nonTeachingFTE": 41.7,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 11.5,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Vertical Mentor Group within a House",
   "unitSize": null,
   "contactFrequency": "Every morning",
   "sameAdultAcrossYears": "yes",
   "handoverPoint": "No handover from Year 7 to Year 12",
   "escalationChain": "Mentor / adult adviser → Head of House → wider Pastoral Care support",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "confirmed"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 0,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 0,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 2,
     "status": "confirmed"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Full tuition through the Indigenous College bursary or all/part tuition through the family-hardship bursary.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Individual instrumental tuition through Years 7–10; trombone scholarship also includes use of a College instrument; voice scholarship includes weekly individual tuition.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Musical ability and aptitude for music; interview, reports, NAPLAN, reference and proof of disadvantage/descent for Indigenous support; financial evidence for bursaries.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.cbcfremantle.wa.edu.au/view/enrolments/scholarships-and-bursaries",
       "title": "Scholarships and bursaries",
       "quote": "CBC Fremantle does not offer academic scholarships.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.cbcfremantle.wa.edu.au/view/enrolments/scholarships-and-bursaries",
       "title": "Music scholarships",
       "quote": "The scholarship entitles the student to individual music tuition on their instrument throughout Year 7-10.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S3": {
       "url": "https://www.cbcfremantle.wa.edu.au/view/enrolments/scholarships-and-bursaries",
       "title": "Indigenous support",
       "quote": "If successful, bursaries will cover the full cost of tuition fees.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "Recent years to 2025: new science laboratories, revitalised theatre, restored heritage spaces and modernised classrooms; enhanced sport facilities are proposed, not operating.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.cbcfremantle.wa.edu.au/view/community/20251118143715",
       "title": "Campus investment",
       "quote": "Over recent years ... new science laboratories and a revitalised Waterford Theatre ... restoration of heritage spaces and modernised classrooms.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2025"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Indigenous Program Coordinator"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.cbcfremantle.wa.edu.au/view/enrolments/scholarships-and-bursaries",
       "title": "Indigenous-program selection",
       "quote": "Indigenous Program Coordinator.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Students must wear the correct complete uniform to and from school, on campus and at official functions; detailed current hair and jewellery wording was not public.",
   "assemblyFrequency": "Daily morning Mentor Group; assembly frequency not separately stated.",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": false,
   "singleSex": true,
   "formalEvents": [
    "College liturgies",
    "student leadership commissioning",
    "Year 12 graduation",
    "House ceremonies",
    "Anzac service"
   ],
   "note": "The public evidence combines formal uniform for official functions, daily vertical Mentor Groups, Chapel liturgies and tiered senior leadership."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "portal_only"
    },
    "construction": {
     "value": 1,
     "status": "partial"
    },
    "automotive": {
     "value": null,
     "status": "portal_only"
    },
    "business": {
     "value": null,
     "status": "portal_only"
    },
    "it": {
     "value": null,
     "status": "portal_only"
    },
    "health": {
     "value": null,
     "status": "portal_only"
    },
    "earlyChildhood": {
     "value": null,
     "status": "portal_only"
    },
    "sportRec": {
     "value": null,
     "status": "portal_only"
    },
    "animalStudies": {
     "value": null,
     "status": "portal_only"
    },
    "creative": {
     "value": null,
     "status": "portal_only"
    },
    "hairBeauty": {
     "value": null,
     "status": "portal_only"
    },
    "maritime": {
     "value": null,
     "status": "portal_only"
    }
   },
   "note": "Public 2026 evidence confirms Certificate II Electrotechnology Pre-apprenticeship, Year 12 VET and Workplace Learning. The complete current VET field list remains unavailable publicly, so other categories are portal_only rather than zero.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "External pre-apprenticeship/RTO provider not publicly named",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": null,
    "industryLinks": [],
    "atarVetSplit": ""
   }
  }
 },
 "Iona Presentation College": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open girls’ independent Catholic application, subject to availability and interview. Secondary schooling is girls only."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Academic, Music and General Excellence scholarships have separate eligibility and do not replace the admissions process."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Academic Excellence and scholarship pathways operate within a non-selective girls’ school.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/enriched-learning/academic-excellence"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Advanced classes are published; complete setting rules were not verified.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/enriched-learning/academic-excellence"
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement criteria were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Advanced classes, academic co-curricular activity and scholarships provide stretch.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/enriched-learning/academic-excellence"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support and pastoral structures are published; exact intervention thresholds were not verified."
   },
   "framework": {
    "status": "partial",
    "detail": "Presentation values and enriched learning are explicit; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Public Senior School academic overview; complete current detailed handbooks may be family-facing.",
    "url": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2",
    "access": "Public overview"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "english": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "languages": {
     "status": "confirmed",
     "detail": "French and Italian are published.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "music": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Represented in the published Senior School curriculum.",
     "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad girls’ sport and co-curricular teams are published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/sport-2"
   },
   "arts": {
    "status": "confirmed",
    "detail": "More than 80 co-curricular groups include extensive performing and production arts.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Design and Digital Technologies are published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Leadership, service and General Excellence scholarships recognise broad initiative.",
    "source": "https://www.iona.wa.edu.au/enrolments/scholarships"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "String and Symphony Orchestras are published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert Band is published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "choral": {
    "status": "confirmed",
    "detail": "College Choir, Year 7 Choir and Chorale are published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz Band is published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Rock Bands are published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "production": {
    "status": "partial",
    "detail": "Production Arts and broadcast-studio facilities are published; a dedicated DAW music-production pathway was not confirmed.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Private instrumental lessons are published.",
    "source": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2"
   }
  },
  "pastoral": {
   "unit": {
    "status": "partial",
    "detail": "House allocation is published; the exact pastoral group name was not verified."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not sufficiently recent",
   "summary": "SEEK contains older positive reviews, but no clearly visible 2023-or-later teaching review was located.",
   "positives": [
    "Older reviewers described caring students, supportive colleagues and a strong music department."
   ],
   "concerns": [
    "Older comments mention scheduling and career-development challenges."
   ],
   "sources": [
    "https://au.seek.com/companies/iona-presentation-college-798500"
   ]
  },
  "academicStanding": {
   "summary": "Strong academic reputation with repeated high results, though a current directly comparable cohort distribution was not located in the reviewed public source.",
   "score": 85,
   "url": "https://www.iona.wa.edu.au/about-us/annual-reports",
   "label": "Annual reports"
  },
  "entryReality": "Open girls’ independent Catholic application, subject to availability and interview. Secondary schooling is girls only.",
  "programAccess": "Academic, Music and General Excellence scholarships have separate eligibility and do not replace the admissions process.",
  "seniorSubjects": {
   "summary": "Senior School academic and pathway information is public, while complete current handbooks may be distributed through family systems.",
   "url": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/academics-2",
   "access": "Public senior overview"
  },
  "musicReality": {
   "style": "Extensive ensemble, choir, orchestra, band, rock-band and performance culture.",
   "production": "Some production-adjacent evidence",
   "note": "Technical production and original work are visible, but a dedicated senior audio-production course was not confirmed."
  },
  "productionScore": 60,
  "computing": {
   "csSubject": {
    "status": "not_publicly_verified",
    "detail": "The public Senior School page does not name a Year 11–12 Computer Science or Applied IT course, and a detailed current handbook was not located."
   },
   "robotics": {
    "status": "not_publicly_verified",
    "detail": "Robotics evidence found publicly related to the Junior School; it was not transferred to the Years 7–12 record."
   },
   "engineering": {
    "status": "partial",
    "detail": "Design Technologies is part of the published secondary curriculum, but exact senior engineering or MDT continuation was not verified."
   },
   "digitalDesign": {
    "status": "partial",
    "detail": "Digital Technologies and Performing and Production Arts are published, but exact Year 12 digital-design courses were not publicly named."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "No current named makerspace, fab lab or secondary design studio was found."
   },
   "note": "The public evidence establishes broad Technologies provision, not the senior depth needed for a stronger score. Junior robotics is deliberately excluded."
  },
  "arts": {
   "visualArt": {
    "status": "partial",
    "detail": "Visual Arts extends through senior years with painting, sculpture, ceramics, printmaking and exhibition work, but the exact ATAR/General list is not fully public."
   },
   "design": {
    "status": "partial",
    "detail": "Photography, media and design are published in the Practical Arts program; detailed senior course titles remain incomplete publicly."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is a senior Arts pathway and the College mounts regular productions."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media and Film Production are explicitly named in the Senior School curriculum."
   },
   "dance": {
    "status": "partial",
    "detail": "Dance is part of the Senior Arts program and productions, though exact Year 12 course status is not fully public."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual art, drama, dance or film admission route requiring audition or portfolio was verified."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The College names state-of-the-art arts learning spaces and multipurpose studios."
   },
   "note": "The arts offer is broad and substantial. Drama and film are clearly named; some senior course-level detail remains incomplete publicly."
  },
  "sport": {
   "body": "Independent Girls’ Schools’ Sports Association WA",
   "division": "IGSSA team-sport grades plus IGSSA athletics, swimming, cross-country and rowing competitions",
   "specialistProgram": "Iona Netball Club, Iona Rowing and Iona Swim Training — participation programs rather than selective school-entry routes",
   "note": "The page labels the term table a typical program and also mentions external opportunities, so unlisted sports remain null rather than zero.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "english": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "sciences": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "hass": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "languages": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "arts": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "technologies": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "pe": {
    "subjects": [],
    "status": "not_publicly_verified"
   },
   "atarVetBalance": "genuine mix"
  },
  "myschool": {
   "icsea": 1141,
   "topQuarterPct": 56,
   "teachingStaffFTE": 101.5,
   "nonTeachingFTE": 58.9,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 12.5,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "House-based Homeroom",
   "unitSize": null,
   "contactFrequency": "Year 9 wellbeing program: weekly; overall Homeroom cadence not stated",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Student self-referral, parent referral or teacher referral → College psychologist; Homeroom and year-level wellbeing staff support delivery",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 2,
     "status": "confirmed"
    },
    "music": {
     "value": 2,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 2,
     "status": "confirmed"
    },
    "indigenous": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Academic and General Excellence: 25% or 50% tuition; Music: music tuition fees.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "All instruments, including voice; minimum Piano Grade 4 or Grade 2 for most other instruments; two contrasting pieces, ear tests and interview; covers music tuition fees.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "External scholarship examination, interview, reports and community involvement; music audition with two contrasting pieces, ear tests and interview.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.iona.wa.edu.au/enrolments/scholarships",
       "title": "Scholarships",
       "quote": "Iona Presentation College is proud to offer Academic, General Excellence and Music scholarships.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.iona.wa.edu.au/enrolments/scholarships",
       "title": "Music scholarship support",
       "quote": "Music Scholarships cover Music Tuition Fees ... Applications will be accepted in all instruments, including voice.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 1,
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/arts-2",
       "title": "Senior arts facilities",
       "quote": "studio areas in our multi-purpose facilities: Painting, Sculpture, Ceramics, Printmaking, Photography, Media and Design.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.iona.wa.edu.au/life-at-iona/senior-school-2/sport-2",
       "title": "Fitness facilities",
       "quote": "A trainer visits twice a week to educate students on how to correctly train in a gym and how to write fitness programs.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Director of Music"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.iona.wa.edu.au/enrolments/scholarships",
       "title": "Music leadership",
       "quote": "available by invitation from the Director of Music.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 1,
   "honourBoards": null,
   "boarding": false,
   "singleSex": true,
   "formalEvents": [
    "Saint Patrick's Day Mass",
    "Presentation celebrations",
    "student leadership ceremonies",
    "Year 12 graduation",
    "House carnivals"
   ],
   "note": "Published traditions centre on the winter blazer, Presentation heritage, major Masses, six active Houses and House Captains."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "portal_only"
    },
    "construction": {
     "value": null,
     "status": "portal_only"
    },
    "automotive": {
     "value": null,
     "status": "portal_only"
    },
    "business": {
     "value": null,
     "status": "portal_only"
    },
    "it": {
     "value": null,
     "status": "portal_only"
    },
    "health": {
     "value": null,
     "status": "portal_only"
    },
    "earlyChildhood": {
     "value": null,
     "status": "portal_only"
    },
    "sportRec": {
     "value": null,
     "status": "portal_only"
    },
    "animalStudies": {
     "value": null,
     "status": "portal_only"
    },
    "creative": {
     "value": null,
     "status": "portal_only"
    },
    "hairBeauty": {
     "value": null,
     "status": "portal_only"
    },
    "maritime": {
     "value": null,
     "status": "portal_only"
    }
   },
   "note": "The public Senior School page confirms a Year 12 Certificate IV opportunity but does not name its field or provider. All certificate categories therefore remain portal_only rather than being inferred.",
   "delivery": {
    "onCampus": null,
    "externalPartner": "INSTEP and an unnamed Certificate IV training provider",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": null,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "INSTEP",
     "workplace host employers",
     "unnamed Certificate IV provider"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Santa Maria College": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Non-selective girls’ Catholic-school application subject to capacity. Year 7 has a published intake size, while other-year entry depends on vacancies."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Scholarship and bursary routes are separate from securing a standard enrolment place."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "The school is non-selective but offers academic enrichment, extension electives and scholarships/bursaries.",
    "source": "https://santamaria.wa.edu.au/academic/"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Extension classes and science electives are published; complete setting rules were not verified.",
    "source": "https://santamaria.wa.edu.au/academic/"
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement criteria were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Advanced courses, extension and a large co-curricular ecosystem provide stretch.",
    "source": "https://santamaria.wa.edu.au/academic/"
   },
   "behind": {
    "status": "partial",
    "detail": "Learning support and wellbeing structures are published; exact intervention thresholds were not verified."
   },
   "framework": {
    "status": "partial",
    "detail": "Mercy education, complex-issue learning and broad participation are explicit; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Current Year 11 and 12 curriculum handbook.",
    "url": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf",
    "access": "Public handbook"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "english": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "languages": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "music": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Confirmed in the current public Year 11–12 handbook; consult the handbook for exact course descriptions and prerequisites.",
     "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad girls’ sport and team pathways are published.",
    "source": "https://santamaria.wa.edu.au/sport/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Visual Art, Drama, Music, Media, performance and productions are published.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Computing, media, STEM and technology pathways are present in the senior handbook.",
    "source": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Leadership, service and broad co-curricular activity are major parts of the school experience.",
    "source": "https://santamaria.wa.edu.au/co-curricular/"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "String Orchestra and other instrumental ensembles are published.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert Band and related ensembles are published.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choirs and vocal ensembles are published.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   },
   "jazz": {
    "status": "partial",
    "detail": "Jazz-related groups may exist, but exact current structure was not fully verified."
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Pop/rock ensembles, songwriting and musical theatre are published.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   },
   "production": {
    "status": "partial",
    "detail": "Composition is clear, but advanced in-school DAW, recording and engineering depth was not verified.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "Instrumental tuition is published.",
    "source": "https://santamaria.wa.edu.au/cultural/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not found",
   "summary": "No sufficiently specific recent SEEK, Glassdoor or Indeed teaching review was located in this pass.",
   "concerns": [
    "Independent staff evidence is absent; school and community claims should remain clearly separated."
   ]
  },
  "academicStanding": {
   "summary": "Strong senior subject outcomes. The College was identified among WA’s top-performing schools across nine ATAR courses in 2024.",
   "score": 88,
   "url": "https://santamaria.wa.edu.au/academic/",
   "label": "Academic program and outcomes"
  },
  "entryReality": "Non-selective girls’ Catholic-school application subject to capacity. Year 7 has a published intake size, while other-year entry depends on vacancies.",
  "programAccess": "Scholarship and bursary routes are separate from securing a standard enrolment place.",
  "seniorSubjects": {
   "summary": "Official Year 11 and 12 curriculum handbook is publicly available.",
   "url": "https://santamaria.wa.edu.au/wp-content/uploads/2026/05/2027-Year-11-and-12-Curriculum-Handbook.pdf",
   "access": "Public handbook"
  },
  "musicReality": {
   "style": "Pop and rock performance, songwriting, composition and musical theatre sit alongside traditional ensembles.",
   "production": "Some verified production",
   "note": "Composition is clear; advanced DAW, recording and engineering depth remains uncertain."
  },
  "productionScore": 62,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Year 10 Robotics and Coding leads to Year 11 Applied Information Technology at ATAR or General level; current senior materials also list AIT."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "The College entered six teams in RoboCup Junior and currently offers Robotics and Coding."
   },
   "engineering": {
    "status": "not_publicly_verified",
    "detail": "The current public material checked did not establish Engineering Studies or senior Materials Design and Technology through Year 12."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Applied Information Technology and Digital Media and Photography pathways are published."
   },
   "makerspace": {
    "status": "partial",
    "detail": "Students use 3D printing and robotics, but no facility is formally named a makerspace or fab lab."
   },
   "note": "Robotics competition, coding and senior AIT are verified. Senior engineering and a named makerspace remain unverified."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Arts is offered in current senior curriculum material and supported by a dedicated studio."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design and digital-creative subjects are listed in current course material."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is offered in senior school and supported by regular productions in the Cultural Centre."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media and film-production pathways and a co-curricular Film Crew are publicly documented."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance is offered in curriculum and co-curricular pathways, supported by a dedicated dance studio."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual art, drama, dance or film admission pathway requiring audition or portfolio was verified."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "The Cultural Centre opened with a 642-seat theatre, black-box space and dance studio."
   },
   "note": "All five arts areas have current subject, production or facility evidence. No formal non-music arts admission pathway was publicly verified."
  },
  "sport": {
   "body": "Independent Girls’ Schools’ Sports Association WA",
   "division": "IGSSA team-sport grades plus IGSSA athletics, swimming and cross-country carnivals",
   "specialistProgram": "",
   "note": "Current evidence is strongest for AFL, volleyball and cross country. Older official breadth evidence remains partial.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "not_publicly_verified"
    },
    "netball": {
     "status": "partial"
    },
    "basketball": {
     "status": "partial"
    },
    "soccer": {
     "status": "partial"
    },
    "hockey": {
     "status": "partial"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "partial"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "partial"
    },
    "athletics": {
     "status": "partial"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "partial"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [],
    "status": "portal_only"
   },
   "english": {
    "subjects": [],
    "status": "portal_only"
   },
   "sciences": {
    "subjects": [],
    "status": "portal_only"
   },
   "hass": {
    "subjects": [],
    "status": "portal_only"
   },
   "languages": {
    "subjects": [],
    "status": "portal_only"
   },
   "arts": {
    "subjects": [],
    "status": "portal_only"
   },
   "technologies": {
    "subjects": [],
    "status": "portal_only"
   },
   "pe": {
    "subjects": [],
    "status": "portal_only"
   },
   "atarVetBalance": "genuine mix with strong VET presence"
  },
  "myschool": {
   "icsea": 1133,
   "topQuarterPct": 51,
   "teachingStaffFTE": 109.5,
   "nonTeachingFTE": 41.9,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 12.2,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Homeroom within the House system",
   "unitSize": null,
   "contactFrequency": "",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 0,
     "status": "partial"
    },
    "music": {
     "value": 0,
     "status": "partial"
    },
    "sport": {
     "value": 0,
     "status": "partial"
    },
    "art": {
     "value": 0,
     "status": "partial"
    },
    "drama": {
     "value": 0,
     "status": "partial"
    },
    "allRounder": {
     "value": 0,
     "status": "partial"
    },
    "indigenous": {
     "value": 0,
     "status": "partial"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Financial need and an eligible Health Care Card or Pensioner Concession Card for the published bursary.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://santamaria.wa.edu.au/scholarship-bursary/",
       "title": "Scholarships and bursaries fund",
       "quote": "The College states that it does not currently offer scholarships through this fund.",
       "publishedOrCurrent": "current 2026"
      },
      "S2": {
       "url": "https://santamaria.wa.edu.au/enrol/",
       "title": "Enrolment assistance",
       "quote": "A needs-based bursary is available to current families holding an eligible concession card.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "partial"
    }
   },
   "facilities": {
    "pool": {
     "value": 1,
     "status": "confirmed"
    },
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": 642,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "gallery": {
     "value": 2,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "gym": {
     "value": 1,
     "status": "confirmed"
    },
    "ovals": {
     "value": 1,
     "status": "confirmed"
    },
    "boarding": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2026: the purpose-built Cultural Centre opened, including a 642-seat auditorium, black-box theatre, dance studio and dedicated music spaces.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://santamaria.wa.edu.au/santa-maria-college-cultural-centre/",
       "title": "Cultural Centre opening",
       "quote": "The new purpose-built Cultural Centre opened for performance, creativity and student learning.",
       "publishedOrCurrent": "2026"
      },
      "F2": {
       "url": "https://santamaria.wa.edu.au/santa-maria-college-vision-2026-jennifer-oaten/",
       "title": "2026 facilities update",
       "quote": "The centre includes a 642-seat auditorium, black-box theatre and dance studio.",
       "publishedOrCurrent": "6 February 2026"
      },
      "F3": {
       "url": "https://santamaria.wa.edu.au/cultural/",
       "title": "Visual arts facilities",
       "quote": "The College publishes a visual-art studio and a dedicated gallery.",
       "publishedOrCurrent": "current 2026"
      },
      "F4": {
       "url": "https://santamaria.wa.edu.au/",
       "title": "School overview",
       "quote": "The College operates as a day and boarding school with 152 boarders.",
       "publishedOrCurrent": "current 2026"
      },
      "F5": {
       "url": "https://santamaria.wa.edu.au/year-5-at-santa-maria-big-opportunities-begin-here/",
       "title": "Campus facilities",
       "quote": "The campus material identifies a pool, gym, sports courts and oval.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Head of Music",
      "Head of Dance and Drama",
      "Director of Boarding"
     ],
     "status": "confirmed"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://santamaria.wa.edu.au/music-camp-kaleidoscope-2025/",
       "title": "Music leadership",
       "quote": "The official music-camp article identifies the Head of Music role.",
       "publishedOrCurrent": "30 June 2025"
      },
      "R2": {
       "url": "https://santamaria.wa.edu.au/arts-tour-melbourne-sydney-students/",
       "title": "Performing-arts leadership",
       "quote": "The 2026 arts-tour material identifies the Head of Dance and Drama role.",
       "publishedOrCurrent": "2026"
      },
      "R3": {
       "url": "https://santamaria.wa.edu.au/boarding/",
       "title": "Boarding leadership",
       "quote": "The current boarding material identifies the Director of Boarding role.",
       "publishedOrCurrent": "current 2026"
      }
     },
     "status": "confirmed"
    }
   },
   "record": {
    "arts": {
     "value": "2024 WACE: Subject Exhibitions in Visual Arts and Drama, recognising the state's top examination result in each course.",
     "status": "confirmed"
    },
    "academic": {
     "value": "2024 WACE: identified as a top-performing school in nine ATAR courses; four Subject Certificates of Excellence and two Subject Exhibitions.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "D1": {
       "url": "https://santamaria.wa.edu.au/class-of-2024-achievers-assembly/",
       "title": "Class of 2024 Achievers Assembly",
       "quote": "The College was a top-performing school in nine ATAR courses and received state subject awards.",
       "publishedOrCurrent": "2025 assembly reporting 2024 results"
      }
     },
     "status": "confirmed"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Long hair is tied back; unnatural hair colour, make-up, false nails and false eyelashes are not permitted; jewellery is limited to a watch, simple ring, simple Christian chain and one small stud or sleeper in each lower ear lobe.",
   "assemblyFrequency": "",
   "chapelOrService": 2,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": true,
   "singleSex": true,
   "formalEvents": [
    "weekly Mass or Liturgy for boarders",
    "Student Leadership Commissioning",
    "Lenten Mass",
    "Year 12 graduation",
    "House carnivals"
   ],
   "note": "The documented model combines compulsory blazer presentation, detailed grooming rules, weekly boarding worship, commissioned leaders and active House traditions."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": 1,
     "status": "confirmed"
    },
    "construction": {
     "value": 1,
     "status": "confirmed"
    },
    "automotive": {
     "value": 1,
     "status": "confirmed"
    },
    "business": {
     "value": 1,
     "status": "confirmed"
    },
    "it": {
     "value": 1,
     "status": "confirmed"
    },
    "health": {
     "value": 1,
     "status": "confirmed"
    },
    "earlyChildhood": {
     "value": 1,
     "status": "confirmed"
    },
    "sportRec": {
     "value": 1,
     "status": "confirmed"
    },
    "animalStudies": {
     "value": 1,
     "status": "confirmed"
    },
    "creative": {
     "value": 1,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": 1,
     "status": "confirmed"
    },
    "maritime": {
     "value": 1,
     "status": "partial"
    }
   },
   "note": "Published external menu includes Certificate III Animal Studies; Certificate III Aviation; Certificates II–IV Beauty/Make-Up; Certificate II Building and Construction; Certificate IV Business; Certificate III Early Childhood Studies; Certificates III–IV Community Services; Certificate II Computer Assembly and Repair; Certificate IV Video Production; Certificate IV Education Support; Certificate II Electrotechnology; Certificate III Engineering — Technical; Certificate III Events; Certificate II Applied Fashion Design; Certificate III Fitness; Certificate II Furniture Making; Certificates III–IV Game Design; Certificate IV Graphic Design; Certificate II Hairdressing; Certificates III–IV Health; Certificate II Horticulture; and Certificate II Hospitality. Annual availability varies.",
   "delivery": {
    "onCampus": false,
    "externalPartner": "South Metropolitan TAFE, North Metropolitan TAFE, Health Science Hub, Fremantle Education Centre and specialist private providers",
    "releaseDay": true,
    "facilities": [
     "external Health Science Hub laboratories",
     "external TAFE trade workshops",
     "external beauty and creative-media training facilities"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "South Metropolitan TAFE",
     "North Metropolitan TAFE",
     "Health Science Hub",
     "Fremantle Education Centre",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "Seton Catholic College": {
  "lastChecked": "2026-07-31",
  "confidence": "Medium",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open co-ed Catholic application, but demand can exceed availability. Catholic Education priorities apply, while families of all faiths may apply."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Accelerated classes, Excellence and Creativity, Sport Excellence and music scholarships are internal or separately selected pathways."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "confirmed",
    "detail": "Accelerated classes, Excellence and Creativity, Sport Excellence and music scholarships operate within a non-selective co-ed school.",
    "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
   },
   "setting_streaming": {
    "status": "partial",
    "detail": "Accelerated classes are published; exact subject/year grouping and movement rules were not fully verified.",
    "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement criteria were not found."
   },
   "ahead": {
    "status": "confirmed",
    "detail": "Accelerated classes and Excellence and Creativity provide formal stretch.",
    "source": "https://www.seton.wa.edu.au/excellence-and-creativity-at-seton"
   },
   "behind": {
    "status": "confirmed",
    "detail": "The school emphasises personal attention and learning support; exact thresholds were not verified.",
    "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
   },
   "framework": {
    "status": "partial",
    "detail": "Close pastoral attention and differentiated pathways are published; no single detailed instructional framework was verified."
   }
  },
  "subjects": {
   "source": {
    "summary": "Public lower- and upper-school pathway information and annual reporting.",
    "url": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school",
    "access": "Public overview"
   },
   "matrix": {
    "maths": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "english": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "sciences": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "hass": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "languages": {
     "status": "partial",
     "detail": "Language study exists; current senior availability was not verified.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "visual_art": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "drama": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "music": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "design_tech": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "computing_it": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    },
    "pe_studies": {
     "status": "confirmed",
     "detail": "Available within the published upper-school curriculum.",
     "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Sport Excellence and broad school sport are published.",
    "source": "https://www.seton.wa.edu.au/sports-excellence-program"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Drama extension, Visual Art, Music, Media and Excellence and Creativity are published.",
    "source": "https://www.seton.wa.edu.au/excellence-and-creativity-at-seton"
   },
   "computing": {
    "status": "confirmed",
    "detail": "Film and Television, Music Technology and digital/technology pathways are published.",
    "source": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school"
   },
   "enterprise": {
    "status": "partial",
    "detail": "Leadership and creative projects are present; a dedicated entrepreneurship pathway was not verified."
   }
  },
  "music": {
   "orchestral": {
    "status": "not_publicly_verified",
    "detail": "A full strings or symphony orchestra was not verified."
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert Band is published.",
    "source": "https://www.seton.wa.edu.au/music-scholarships-1"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Choir and musical-theatre choir are published.",
    "source": "https://www.seton.wa.edu.au/music-scholarships-1"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Jazz ensemble is published.",
    "source": "https://www.seton.wa.edu.au/music-scholarships-1"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Rock band, songwriting and contemporary contexts are published.",
    "source": "https://www.seton.wa.edu.au/music-scholarships-1"
   },
   "production": {
    "status": "confirmed",
    "detail": "Music Technology contexts, songwriting technology and recording-industry workshops are published.",
    "source": "https://www.seton.wa.edu.au/music-scholarships-1"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "One-to-one lessons across a published instrument list are available; ensembles are published as free.",
    "source": "https://www.seton.wa.edu.au/music-scholarships-1"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": "not found",
   "summary": "No sufficiently specific recent staff review was located in SEEK, Glassdoor or Indeed.",
   "concerns": [
    "Independent staff evidence is currently absent."
   ]
  },
  "academicStanding": {
   "summary": "Broad ATAR, General and vocational provision; the reviewed public sources did not provide a strong current comparable academic-standing metric.",
   "score": 74,
   "url": "https://www.seton.wa.edu.au/annual-reports",
   "label": "Annual reports"
  },
  "entryReality": "Open co-ed Catholic application, but demand can exceed availability. Catholic Education priorities apply, while families of all faiths may apply.",
  "programAccess": "Accelerated classes, Excellence and Creativity, Sport Excellence and music scholarships are internal or separately selected pathways.",
  "seniorSubjects": {
   "summary": "Official senior-subject and upper-school information is publicly available.",
   "url": "https://www.seton.wa.edu.au/overview-of-lower-and-upper-school",
   "access": "Public senior overview"
  },
  "musicReality": {
   "style": "Contemporary, Jazz, Music Theatre, Film and Television, world music and Music Technology contexts are explicitly included.",
   "production": "Some verified production",
   "note": "Music technology and recording-industry workshops are present, but not a full specialist production program."
  },
  "productionScore": 72,
  "computing": {
   "csSubject": {
    "status": "confirmed",
    "detail": "Applied Information Technology General is offered in Years 11 and 12."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "The current complete Technologies subject-by-year list and current extracurricular page were checked; neither lists robotics."
   },
   "engineering": {
    "status": "confirmed",
    "detail": "Materials Design and Technology Woodwork and Textiles continue through Years 11 and 12."
   },
   "digitalDesign": {
    "status": "confirmed",
    "detail": "Design ATAR, Design General and Applied Information Technology continue through Years 11 and 12."
   },
   "makerspace": {
    "status": "not_publicly_verified",
    "detail": "Workshops and multimedia laboratories are evident, but no facility is formally named a makerspace or fab lab."
   },
   "note": "Robotics is a checked-and-absent finding based on the school’s current year-by-year Technologies list and extracurricular page, not an unchecked null."
  },
  "arts": {
   "visualArt": {
    "status": "confirmed",
    "detail": "Visual Art continues through senior pathways and is supported by an annual exhibition."
   },
   "design": {
    "status": "confirmed",
    "detail": "Design ATAR and General and related media and materials design pathways are published."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama continues through senior school and the College mounts major Year 11–12 productions."
   },
   "film": {
    "status": "confirmed",
    "detail": "Media Production and Analysis is offered at ATAR and General level, with Creative Industries Media also available."
   },
   "dance": {
    "status": "confirmed",
    "detail": "Dance and Certificate IV Dance are included in the senior course structure, with an annual showcase."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "The Excellence and Creativity Program includes the Arts, but no public audition, portfolio or invitation rule was found for arts entry."
   },
   "artFacility": {
    "status": "confirmed",
    "detail": "Purpose-built facilities include art studios, multimedia laboratories and the Emilie de Vialar Performing Arts Centre."
   },
   "note": "All five arts fields have current senior or substantial production evidence. The enrichment program includes Arts, but its arts-selection mechanism is not publicly stated."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Southern Coastal Associated Schools; School Sport WA",
   "division": "ACC Swimming D Division in 2026",
   "specialistProgram": "Sports Excellence Program — selected talented athletes across sports",
   "note": "Touch Rugby is published but is not coded as rugby union. The school says its sport list gives examples, so unlisted sports remain null.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "not_publicly_verified"
    },
    "rugby": {
     "status": "not_publicly_verified"
    },
    "tennis": {
     "status": "not_publicly_verified"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "not_publicly_verified"
    },
    "waterpolo": {
     "status": "not_publicly_verified"
    },
    "golf": {
     "status": "not_publicly_verified"
    },
    "sailing": {
     "status": "not_publicly_verified"
    },
    "surfing": {
     "status": "not_publicly_verified"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [
     "Mathematics Foundation General",
     "Mathematics Essential General",
     "Mathematics Applications ATAR",
     "Mathematics Methods ATAR",
     "Mathematics Specialist ATAR"
    ],
    "status": "confirmed"
   },
   "english": {
    "subjects": [
     "English Foundation",
     "English General",
     "English ATAR",
     "Literature ATAR"
    ],
    "status": "confirmed"
   },
   "sciences": {
    "subjects": [
     "Biology ATAR",
     "Chemistry ATAR",
     "Human Biology ATAR",
     "Human Biology General",
     "Physics ATAR",
     "Psychology ATAR",
     "Psychology General",
     "Science in Practice General"
    ],
    "status": "confirmed"
   },
   "hass": {
    "subjects": [
     "Modern History ATAR",
     "Modern History General",
     "Politics and Law ATAR",
     "Business Management and Enterprise General"
    ],
    "status": "confirmed"
   },
   "languages": {
    "subjects": [
     "Italian ATAR",
     "Italian General"
    ],
    "status": "confirmed"
   },
   "arts": {
    "subjects": [
     "Visual Arts ATAR",
     "Visual Arts General",
     "Drama ATAR",
     "Drama General",
     "Music",
     "Media",
     "Certificate IV in Dance"
    ],
    "status": "partial"
   },
   "technologies": {
    "subjects": [
     "Design and Technology (Dimensional) ATAR",
     "Design and Technology (Dimensional) General",
     "Food Science and Technology General",
     "Materials Design and Technology (Wood) General",
     "Materials Design and Technology (Textiles) General",
     "Children, Family and Community General"
    ],
    "status": "confirmed"
   },
   "pe": {
    "subjects": [
     "Physical Education Studies ATAR",
     "Physical Education Studies General",
     "Outdoor Education General"
    ],
    "status": "confirmed"
   },
   "atarVetBalance": "genuine mix"
  },
  "myschool": {
   "icsea": 1048,
   "topQuarterPct": 19,
   "teachingStaffFTE": 79.8,
   "nonTeachingFTE": 50.3,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 13.7,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Vertical Pastoral Care Group within a House",
   "unitSize": "20–25",
   "contactFrequency": "Every morning",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "Pastoral Care teacher for routine concerns → Head of House for referral → psychologist or counsellor → outside agency if required",
   "status": {
    "unitSize": "confirmed",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 1,
     "status": "confirmed"
    },
    "music": {
     "value": 1,
     "status": "confirmed"
    },
    "sport": {
     "value": 0,
     "status": "confirmed"
    },
    "art": {
     "value": 0,
     "status": "confirmed"
    },
    "drama": {
     "value": 0,
     "status": "confirmed"
    },
    "allRounder": {
     "value": 1,
     "status": "partial"
    },
    "indigenous": {
     "value": 1,
     "status": "confirmed"
    },
    "bursary": {
     "value": 0,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "100% of the following year's tuition for Year Dux awards; full or half music fees; annual tuition for two First Nations awards.",
     "status": "confirmed"
    },
    "musicDetail": {
     "value": "Full or half contribution to music fees; currently prioritises woodwind and brass, though other instruments and voice may apply; instrument hire is extra.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Academic record for Dux; music ability, potential, ensemble need, report and music-teacher reference; targeted eligibility for First Nations awards.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.seton.wa.edu.au/scholarships",
       "title": "Scholarship inventory",
       "quote": "Seton Catholic College is proud to offer a number of Academic, General and Specialist Scholarships.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.seton.wa.edu.au/music-scholarships-1",
       "title": "Music scholarship",
       "quote": "Full or half scholarships are awarded ... instrumental hire is an additional fee.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2027 entry"
      },
      "S3": {
       "url": "https://www.seton.wa.edu.au/first-nations-scholarship",
       "title": "First Nations scholarship",
       "quote": "Seton Catholic College offers two First Nations Scholarships each year to cover the cost of annual tuition fees.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "confirmed"
    }
   },
   "facilities": {
    "theatre": {
     "value": 2,
     "status": "confirmed"
    },
    "theatreSeats": {
     "value": 200,
     "status": "confirmed"
    },
    "musicSchool": {
     "value": 2,
     "status": "confirmed"
    },
    "artStudios": {
     "value": 2,
     "status": "confirmed"
    },
    "designTech": {
     "value": 2,
     "status": "confirmed"
    },
    "recentBuild": {
     "value": "2021: Mother Seton Centre completed.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "F1": {
       "url": "https://www.seton.wa.edu.au/facilities",
       "title": "Facilities",
       "quote": "two Design & Technology Workshops, two Art & Craft Studios, a Specialist Music Studio ... the Emilie de Vialar Performing Arts Centre, with retractable theatre seating for 200.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "F2": {
       "url": "https://www.seton.wa.edu.au/facilities",
       "title": "Recent facility",
       "quote": "April 2021 saw the finalisation of the Mother Seton Centre.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "2021"
      }
     },
     "status": "confirmed"
    }
   },
   "staffRoles": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "Students must wear the complete uniform clean, tidy, in good condition and properly fitted.",
   "assemblyFrequency": "Daily Pastoral Care group; whole-school assembly frequency not stated.",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": null,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Opening Mass",
    "student leadership camp and commissioning",
    "Year 12 graduation",
    "House carnivals",
    "Brother Francis Exhibition"
   ],
   "note": "The College publishes seasonal blazer-and-tie uniform, daily vertical House groups, specialist House leaders and Catholic ministry occasions."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "construction": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "automotive": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "business": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "it": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "health": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "earlyChildhood": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "sportRec": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "animalStudies": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "creative": {
     "value": 2,
     "status": "confirmed"
    },
    "hairBeauty": {
     "value": null,
     "status": "not_publicly_verified"
    },
    "maritime": {
     "value": null,
     "status": "not_publicly_verified"
    }
   },
   "note": "Current named on-campus qualification: Certificate IV Dance. Students may also select external TAFE qualifications through North or South Metropolitan TAFE, but the annual external field list is not reproduced on the College page, so other categories remain null.",
   "delivery": {
    "onCampus": true,
    "externalPartner": "South Metropolitan TAFE, North Metropolitan TAFE and private training providers",
    "releaseDay": true,
    "facilities": [
     "dance studios"
    ]
   },
   "pathways": {
    "schoolBasedApprenticeship": 1,
    "workplaceLearning": 2,
    "careersStaffNamed": true,
    "industryLinks": [
     "South Metropolitan TAFE",
     "North Metropolitan TAFE",
     "workplace host employers"
    ],
    "atarVetSplit": ""
   }
  }
 },
 "John XXIII College": {
  "lastChecked": "2026-07-31",
  "confidence": "High",
  "entry": {
   "schoolAccess": {
    "status": "confirmed",
    "detail": "Open co-ed Catholic independent application subject to capacity and published priorities. Catholic mission, existing family links, linked Catholic primary schools, the value placed on co-education, application date and gender balance may influence offers."
   },
   "programAccess": {
    "status": "confirmed",
    "detail": "Music and academic opportunities sit within the normal admissions process; there is no automatic program-based entry route identified."
   }
  },
  "pedagogy": {
   "selective_or_extension": {
    "status": "partial",
    "detail": "The school is non-selective but offers scholarships, broad senior pathways and enrichment."
   },
   "setting_streaming": {
    "status": "not_publicly_verified",
    "detail": "Exact setting by subject and year was not verified."
   },
   "movement_between_levels": {
    "status": "not_publicly_verified",
    "detail": "Published movement rules were not found."
   },
   "ahead": {
    "status": "partial",
    "detail": "Strong senior outcomes and broad pathways are evident; the exact lower-school extension route was not fully verified."
   },
   "behind": {
    "status": "partial",
    "detail": "Ignatian pastoral and learning support structures are published; exact intervention thresholds were not verified."
   },
   "framework": {
    "status": "confirmed",
    "detail": "Ignatian pedagogy and cura personalis: academic rigour combined with care for the whole person.",
    "source": "https://www.johnxxiii.edu.au/about/mission/"
   }
  },
  "subjects": {
   "source": {
    "summary": "Detailed current curriculum handbooks are available to enrolled families through SEQTA rather than openly public.",
    "url": "https://www.johnxxiii.edu.au/info-for/families/curriculum-handbooks/",
    "access": "Portal-only detailed handbooks"
   },
   "matrix": {
    "maths": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "english": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "sciences": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "hass": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "languages": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "visual_art": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "drama": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "music": {
     "status": "confirmed",
     "detail": "ATAR Music is publicly confirmed.",
     "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
    },
    "design_tech": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "computing_it": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    },
    "pe_studies": {
     "status": "portal_only",
     "detail": "A current detailed handbook exists in the family portal, but public verification of the exact senior course list is not available."
    }
   }
  },
  "opportunities": {
   "sport": {
    "status": "confirmed",
    "detail": "Broad co-ed sport and representative teams are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/sport/"
   },
   "arts": {
    "status": "confirmed",
    "detail": "Music, Drama, Visual Art, productions and performance are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "computing": {
    "status": "partial",
    "detail": "Digital technologies and design are part of the curriculum, but the exact current robotics and senior computing list is portal-only.",
    "source": "https://www.johnxxiii.edu.au/info-for/families/curriculum-handbooks/"
   },
   "enterprise": {
    "status": "confirmed",
    "detail": "Leadership, service, sustainability and community programs are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/"
   }
  },
  "music": {
   "orchestral": {
    "status": "confirmed",
    "detail": "Symphony, Chamber and String ensembles are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "wind_band": {
    "status": "confirmed",
    "detail": "Concert, Wind and Swing bands are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "choral": {
    "status": "confirmed",
    "detail": "Multiple choirs are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "jazz": {
    "status": "confirmed",
    "detail": "Swing Band and smaller jazz-combo opportunities are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "contemporary": {
    "status": "confirmed",
    "detail": "Contemporary bands and pop repertoire are published.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "production": {
    "status": "partial",
    "detail": "Composition with notation software is published; no dedicated DAW, recording or audio-engineering pathway was verified.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   },
   "tuition": {
    "status": "confirmed",
    "detail": "One-to-one tuition is published at $45 per 30-minute lesson, with 36 lessons per year and instrument hire at $255 in the reviewed fee schedule.",
    "source": "https://www.johnxxiii.edu.au/co-curricular/music/"
   }
  },
  "pastoral": {
   "unit": {
    "status": "not_stated",
    "detail": "Not stated in a sufficiently specific public source."
   },
   "group_size": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "frequency": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "continuity": {
    "status": "not_stated",
    "detail": "Not stated."
   },
   "escalation": {
    "status": "not_stated",
    "detail": "A published escalation chain was not found."
   }
  },
  "external": {
   "type": "Independent staff reviews",
   "year": 2025,
   "summary": "SEEK contains a recent October 2025 secondary-teacher review and strong aggregate ratings.",
   "positives": [
    "The recent teacher review praised staff support, student behaviour and career-development opportunities."
   ],
   "concerns": [
    "The same review described workload as substantial, although rewarding."
   ],
   "sources": [
    "https://www.seek.com.au/companies/john-xxiii-college-800165/reviews"
   ]
  },
  "academicStanding": {
   "summary": "Very strong 2025 outcomes: 52 students achieved ATAR 90+, 24 achieved 95+, 11 achieved 98+ and three achieved 99+.",
   "score": 90,
   "url": "https://www.johnxxiii.edu.au/about/academic-performance/",
   "label": "Class of 2025 results"
  },
  "entryReality": "Open co-ed Catholic independent application subject to capacity and published priorities. Catholic mission, existing family links, linked Catholic primary schools, the value placed on co-education, application date and gender balance may influence offers.",
  "programAccess": "Music and academic opportunities sit within the normal admissions process; there is no automatic program-based entry route identified.",
  "seniorSubjects": {
   "summary": "Curriculum handbooks exist for all year levels but the latest detailed handbooks are accessed by enrolled families through SEQTA.",
   "url": "https://www.johnxxiii.edu.au/info-for/families/curriculum-handbooks/",
   "access": "Portal-access handbooks"
  },
  "musicReality": {
   "style": "Classical, Jazz, Contemporary, Music Theatre and pop repertoire; ATAR Music is offered.",
   "production": "Some verified production",
   "note": "Students compose with notation software such as Sibelius, but a dedicated DAW, recording or audio-production pathway was not verified."
  },
  "productionScore": 58,
  "computing": {
   "csSubject": {
    "status": "portal_only",
    "detail": "Digital Technologies is taught to Year 12, but the current detailed senior handbook is available only through SEQTA, so exact CS/AIT course status cannot be publicly confirmed."
   },
   "robotics": {
    "status": "confirmed",
    "detail": "Robotics is embedded in the secondary curriculum and current College material also names robotics and coding among interests."
   },
   "engineering": {
    "status": "partial",
    "detail": "Engineering and Design and Technology are current elective areas, but exact Year 11–12 courses are portal-only."
   },
   "digitalDesign": {
    "status": "partial",
    "detail": "Digital Technologies and Media are current, but exact senior digital-design courses are portal-only."
   },
   "makerspace": {
    "status": "partial",
    "detail": "3D printing is available across secondary subjects, but no facility is formally named a makerspace or fab lab."
   },
   "note": "The school clearly teaches digital technology, robotics and engineering contexts. Exact senior-course coding remains portal-only and is not converted into a confident score."
  },
  "arts": {
   "visualArt": {
    "status": "partial",
    "detail": "Visual Arts, photography, digital media, pottery and textiles are documented through secondary years, including Year 12 outcomes, but the detailed current handbook is portal-only."
   },
   "design": {
    "status": "partial",
    "detail": "Photography, digital media, textiles and production design are documented, but exact current senior Design-course titles are portal-only."
   },
   "drama": {
    "status": "confirmed",
    "detail": "Drama is taught through Years 7–12, including ATAR Drama and regular productions."
   },
   "film": {
    "status": "portal_only",
    "detail": "Digital media and production work are visible, but a current standalone senior film or media course cannot be confirmed because detailed handbooks are portal-only."
   },
   "dance": {
    "status": "partial",
    "detail": "Dance and musical theatre opportunities are current, but a standalone senior Dance subject was not publicly verified."
   },
   "artSelective": {
    "status": "not_publicly_verified",
    "detail": "No current formal visual art, drama, film or dance admission route requiring audition or portfolio was verified."
   },
   "artFacility": {
    "status": "partial",
    "detail": "The Thomas More Exhibition Centre and production spaces are named, but a comprehensive current specialist-facility description was not located."
   },
   "note": "Drama has clear senior and production evidence. Visual arts are broad, but detailed current course coding remains limited because curriculum handbooks are available through SEQTA."
  },
  "sport": {
   "body": "Associated & Catholic Colleges WA; Northern Associated Schools; rowing also competes through school rowing structures",
   "division": "ACC Swimming A Division in 2026",
   "specialistProgram": "Rowing Club and Netball Club — substantial co-curricular pathways, not published selective school-entry programs",
   "note": "Sailing is the only checked-and-absent field because the current page explicitly presents the College participation list. Older individual representation is not treated as a school offering.",
   "fields": {
    "afl": {
     "status": "confirmed"
    },
    "cricket": {
     "status": "confirmed"
    },
    "netball": {
     "status": "confirmed"
    },
    "basketball": {
     "status": "confirmed"
    },
    "soccer": {
     "status": "confirmed"
    },
    "hockey": {
     "status": "confirmed"
    },
    "rugby": {
     "status": "confirmed"
    },
    "tennis": {
     "status": "confirmed"
    },
    "volleyball": {
     "status": "confirmed"
    },
    "swimming": {
     "status": "confirmed"
    },
    "athletics": {
     "status": "confirmed"
    },
    "crosscountry": {
     "status": "confirmed"
    },
    "rowing": {
     "status": "confirmed"
    },
    "waterpolo": {
     "status": "confirmed"
    },
    "golf": {
     "status": "confirmed"
    },
    "sailing": {
     "status": "confirmed"
    },
    "surfing": {
     "status": "confirmed"
    }
   }
  },
  "seniorSubjectList": {
   "maths": {
    "subjects": [],
    "status": "portal_only"
   },
   "english": {
    "subjects": [],
    "status": "portal_only"
   },
   "sciences": {
    "subjects": [],
    "status": "portal_only"
   },
   "hass": {
    "subjects": [],
    "status": "portal_only"
   },
   "languages": {
    "subjects": [],
    "status": "portal_only"
   },
   "arts": {
    "subjects": [],
    "status": "portal_only"
   },
   "technologies": {
    "subjects": [],
    "status": "portal_only"
   },
   "pe": {
    "subjects": [],
    "status": "portal_only"
   },
   "atarVetBalance": "genuine mix"
  },
  "myschool": {
   "icsea": 1186,
   "topQuarterPct": 74,
   "teachingStaffFTE": 116.1,
   "nonTeachingFTE": 85.0,
   "dataYear": 2025,
   "studentsPerTeachingFTE": 12.9,
   "ratioNote": "Whole-school enrolment over whole-school teaching FTE. Using Years 7-12 enrolment against whole-school staff flatters K-12 schools badly - Christ Church reads 7.2 that way and 10.2 correctly."
  },
  "pastoralStructure": {
   "unitName": "Homeroom within a pastoral-care House group",
   "unitSize": null,
   "contactFrequency": "Weekly Homeroom sessions",
   "sameAdultAcrossYears": "not_stated",
   "handoverPoint": "",
   "escalationChain": "",
   "status": {
    "unitSize": "not_stated",
    "sameAdultAcrossYears": "not_stated"
   }
  },
  "backs": {
   "scholarships": {
    "academic": {
     "value": 0,
     "status": "partial"
    },
    "music": {
     "value": 0,
     "status": "partial"
    },
    "sport": {
     "value": 0,
     "status": "partial"
    },
    "art": {
     "value": 0,
     "status": "partial"
    },
    "drama": {
     "value": 0,
     "status": "partial"
    },
    "allRounder": {
     "value": 0,
     "status": "partial"
    },
    "indigenous": {
     "value": 0,
     "status": "partial"
    },
    "bursary": {
     "value": 1,
     "status": "confirmed"
    },
    "maxRemission": {
     "value": "Full tuition, with potential support for uniforms, books and other expenses.",
     "status": "confirmed"
    },
    "applicationBasis": {
     "value": "Strictly financial need and published income criteria; intake opportunities are advertised for specific year levels.",
     "status": "confirmed"
    },
    "source": {
     "value": {
      "S1": {
       "url": "https://www.johnxxiii.edu.au/apply/",
       "title": "Current application inventory",
       "quote": "Bursaries ... The Foundation Bursary supports families who demonstrate financial need.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S2": {
       "url": "https://www.johnxxiii.edu.au/apply/bursaries/",
       "title": "Foundation bursary",
       "quote": "Launched in 2022, the Bursary program covers tuition ... with potential support for uniforms, books, and other expenses.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      },
      "S3": {
       "url": "https://www.johnxxiii.edu.au/about/giving/",
       "title": "Bursary funding",
       "quote": "our Foundation Bursary Program now offers full fee assistance.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "partial"
    }
   },
   "facilities": {
    "source": {
     "value": {
      "F1": {
       "url": "https://www.johnxxiii.edu.au/contact/",
       "title": "Campus",
       "quote": "Set across 24.6 hectares ... Open green spaces and purpose-built learning environments sit alongside one another.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "current page checked 2026-08-04"
      }
     },
     "status": "partial"
    }
   },
   "staffRoles": {
    "namedDirectors": {
     "value": [
      "Director of Music"
     ],
     "status": "partial"
    },
    "source": {
     "value": {
      "R1": {
       "url": "https://www.johnxxiii.edu.au/upload/pages/music-instrumental-program/music-hand-book.pdf",
       "title": "Music handbook",
       "quote": "The Director of Music places the student with an appropriate tutor.",
       "quoteType": "verbatim excerpt",
       "publishedOrCurrent": "official handbook available through current site; publication date not stated"
      }
     },
     "status": "partial"
    }
   },
   "record": {
    "source": {
     "value": {},
     "status": "not_publicly_verified"
    }
   }
  },
  "formality": {
   "uniformFormal": 2,
   "blazerRequired": true,
   "separateFormalUniform": true,
   "groomingRules": "",
   "assemblyFrequency": "",
   "chapelOrService": 1,
   "houseSystem": 2,
   "prefectStructure": 2,
   "honourBoards": true,
   "boarding": false,
   "singleSex": false,
   "formalEvents": [
    "Procession of Palms",
    "Anzac commemoration",
    "student leadership commissioning",
    "Year 12 graduation",
    "Interhouse carnivals"
   ],
   "note": "Published formality is expressed through a secondary blazer tradition, Catholic observances, active Houses, portfolio captaincies and a permanent honour board."
  },
  "vetDetail": {
   "fields": {
    "hospitality": {
     "value": null,
     "status": "portal_only"
    },
    "construction": {
     "value": null,
     "status": "portal_only"
    },
    "automotive": {
     "value": null,
     "status": "portal_only"
    },
    "business": {
     "value": 1,
     "status": "partial"
    },
    "it": {
     "value": null,
     "status": "portal_only"
    },
    "health": {
     "value": null,
     "status": "portal_only"
    },
    "earlyChildhood": {
     "value": null,
     "status": "portal_only"
    },
    "sportRec": {
     "value": null,
     "status": "portal_only"
    },
    "animalStudies": {
     "value": null,
     "status": "portal_only"
    },
    "creative": {
     "value": null,
     "status": "portal_only"
    },
    "hairBeauty": {
     "value": null,
     "status": "portal_only"
    },
    "maritime": {
     "value": null,
     "status": "portal_only"
    }
   },
   "note": "Public evidence identifies a business-focused VET program with Certificate I Business in Year 11 and Certificate II Business in Year 12, plus White Card, workplace-safety and first-aid credentials. The complete current certificate menu is not public; remaining fields are portal_only.",
   "delivery": {
    "onCampus": null,
    "externalPartner": "INSTEP and external training providers",
    "releaseDay": true,
    "facilities": []
   },
   "pathways": {
    "schoolBasedApprenticeship": null,
    "workplaceLearning": 2,
    "careersStaffNamed": null,
    "industryLinks": [
     "INSTEP",
     "workplace host employers",
     "external training providers"
    ],
    "atarVetSplit": ""
   }
  }
 }
};

/* ---------- accessors ----------
   These read the imported layer. None of them return a score, and
   nothing here is allowed to reach schoolMatch. The rule from the
   source brief: never convert partial / portal_only /
   not_publicly_verified / not_stated into a confident yes or no. */

const RESEARCH_UNKNOWN = ["partial","not_publicly_verified","not_stated","portal_only"];

function research(schoolName){ return RESEARCH[schoolName] || null; }

/* A short, honest phrase for a single flagged field. Returns null when
   there is nothing to say, so callers can skip it rather than print
   "unknown" all over the page. */
function evidenceLine(schoolName, section, key){
  const r=research(schoolName); if(!r) return null;
  const f=(r[section]||{})[key]; if(!f||!f.status) return null;
  const lead={
    confirmed:"",
    partial:"Partly — ",
    not_publicly_verified:"Not found publicly — ",
    not_stated:"The school doesn't say — ",
    portal_only:"Behind the parent portal — "
  }[f.status];
  if(lead===undefined) return null;
  return {status:f.status, text:lead+(f.detail||""), source:f.source||null,
          known:f.status==="confirmed"};
}

/* Entry to the school and entry to a program are different questions and
   are deliberately answered separately. A child can be enrolled and still
   locked out of the thing they came for. */
function accessNotes(schoolName){
  const r=research(schoolName); if(!r) return null;
  return {school:r.entryReality||null, program:r.programAccess||null};
}

/* Music production is NOT implied by a strong music department. The
   imported data shows the two coming apart badly: schools with large,
   long-established programs return "not publicly verified" on production,
   while a mid-sized public school has the clearest pathway in the set. */
function musicReality(schoolName){
  const r=research(schoolName); return r ? (r.musicReality||null) : null;
}

/* Everything we looked for at this school and could not confirm. This is
   what feeds tour questions — the gaps are the useful part. */
function openQuestions(schoolName){
  const r=research(schoolName); if(!r) return [];
  const out=[];
  ["entry","pedagogy","opportunities","music","pastoral","subjects"].forEach(sec=>{
    Object.entries(r[sec]||{}).forEach(([k,f])=>{
      if(f && RESEARCH_UNKNOWN.includes(f.status))
        out.push({section:sec, field:k, status:f.status, detail:f.detail||""});
    });
  });
  return out;
}

/* ---------- what a school demonstrably backs ----------
   Reputation is the worst possible source for this. It is what produced
   the fee-shaped numbers that had to be stripped out of the scoring, and
   it is wrong in specific ways: the priority-six pass found that NONE of
   the six large independents offers a sport scholarship, yet four of them
   have rowing sheds, three employ a named Head or Director of a sport,
   and one won seven PSA trophies in a single year.

   So no single signal works. Scholarships reveal what a school pays to
   attract, which turns out to mean music and academic. Buildings, named
   staff roles and dated results reveal sport. A domain counts here only
   when at least two independent signals agree, which is deliberately
   hard to satisfy by accident. */
const BACK_SIGNALS = {
  sport:{ scholarship:"sport",
          facilities:["rowingShed","pool","ovals","tennisCourts","gym"],
          roles:/rowing|football|hockey|cricket|sport|athletic|swim|basketball/i,
          record:"sport" },
  music:{ scholarship:"music",
          facilities:["musicSchool","recordingStudio"],
          roles:/music|strings|band|choral|cantorum|orchestra/i,
          record:"music" },
  arts:{  scholarship:"art",
          facilities:["theatre","gallery","artStudios"],
          roles:/drama|art|dance|theatre/i,
          record:"arts" },
  tech:{  scholarship:null,
          facilities:["roboticsLab","makerspace","designTech"],
          roles:/ict|technolog|robotic|engineer|digital/i,
          record:null },
  academic:{ scholarship:"academic",
          facilities:[],
          roles:/academic|scholar|extension|gifted|dean/i,
          record:"academic" }
};

function backs(schoolName){
  const r=RESEARCH[schoolName]; if(!r||!r.backs) return null;
  const B=r.backs, out=[];
  Object.entries(BACK_SIGNALS).forEach(([domain,sig])=>{
    const hits=[];
    if(sig.scholarship){
      const s=(B.scholarships||{})[sig.scholarship];
      if(s && s.value===2) hits.push("pays for it");
    }
    const built=(sig.facilities||[]).filter(f=>((B.facilities||{})[f]||{}).value===2);
    if(built.length) hits.push("built for it ("+built.join(", ")+")");
    const roles=(((B.staffRoles||{}).namedDirectors||{}).value)||[];
    const hit=roles.filter(t=>sig.roles.test(t));
    if(hit.length) hits.push("employs "+hit.join(", "));
    if(sig.record){
      const rec=((B.record||{})[sig.record]||{}).value;
      if(rec) hits.push("documented record");
    }
    /* Two independent signals minimum. One is an accident, two is a pattern. */
    if(hits.length>=2) out.push({domain, signals:hits, strength:hits.length});
  });
  return out.sort((a,b)=>b.strength-a.strength);
}
