/* eslint-disable react/no-unescaped-entities */

// https://app.termly.io/dashboard/website/f420175c-39d4-4d50-887f-14b681a1a9de/terms-of-service

export const metadata = {
  title: 'TOS',
}

interface Props {
  params: { lang: string }
}

export default function Tos({ params: { lang } }: Props) {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl ">
        {lang === 'fr' && (
          <p className="text-gray-500 mb-12 text-center">
            Les conditions générales d'utilisation traduites en français seront bientôt disponibles.
          </p>
        )}
        <div>
          <div>
            <h2 className="text-center font-bold text-lg">TERMS OF SERVICE</h2>

            <div className="mt-12">
              <div className="font-bold">Last updated</div> <strong>August 26, 2023</strong>
            </div>

            <h3 className="font-semibold mt-8">AGREEMENT TO OUR LEGAL TERMS</h3>
          </div>

          <div className="mt-8">
            We are roumple ("
            <strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>" ) , a
            company registered in France at 124 rue Montesquieu, Lyon 69007.
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span>
                We operate the website{' '}
                <a className="text-blue-600" href="http://www.roumple.com" target="_blank">
                  http://www.roumple.com
                </a>{' '}
                (the "<strong>Site</strong>") , as well as any other related products and services that refer or link to
                these legal terms (the "<strong>Legal Terms</strong>") (collectively, the "<strong>Services</strong>").
              </span>
            </div>

            <div className="mt-4">
              You can contact us by email at mimccio.dev@gmail.com or by mail to 124 rue Montesquieu, Lyon 69007,
              France.
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on
                behalf of an entity ("<strong>you</strong>"), and roumple, concerning your access to and use of the
                Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by
                all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY
                PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                Supplemental terms and conditions or documents that may be posted on the Services from time to time are
                hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make
                changes or modifications to these Legal Terms from time to time. We will alert you about any changes by
                updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific
                notice of each such change. It is your responsibility to periodically review these Legal Terms to stay
                informed of updates. You will be subject to, and will be deemed to have been made aware of and to have
                accepted, the changes in any revised Legal Terms by your continued use of the Services after the date
                such revised Legal Terms are posted.
                <div className="else-block"></div>
              </span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <div className="block-container if" data-type="if" id="a2595956-7028-dbe5-123e-d3d3a93ed076">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <span>
                      <div className="block-container if" data-type="if" id="a2595956-7028-dbe5-123e-d3d3a93ed076">
                        <div data-type="conditional-block">
                          <div data-type="body">
                            <span>
                              The Services are intended for users who are at least 13 years of age. All users who are
                              minors in the jurisdiction in which they reside (generally under the age of 18) must have
                              the permission of, and be directly supervised by, their parent or guardian to use the
                              Services. If you are a minor, you must have your parent or guardian read and agree to
                              these Legal Terms prior to you using the Services.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div data-type="body">
                        <span></span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>We recommend that you print a copy of these Legal Terms for your records.</div>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <div>
              <strong>TABLE OF CONTENTS</strong>
            </div>
            <div>
              <br />
            </div>
            <div className="text-blue-600">
              <div>
                <a href="#services">
                  <span>
                    <span>
                      <span>1. OUR SERVICES</span>
                    </span>
                  </span>
                </a>
              </div>
              <div>
                <a href="#ip">
                  <span>2. INTELLECTUAL PROPERTY RIGHTS</span>
                </a>
              </div>
              <div>
                <a href="#userreps"></a>
                <a href="#userreps">
                  <span>
                    <span>3. USER REPRESENTATIONS</span>
                  </span>
                </a>
              </div>
              <div>
                <span>
                  <span></span>
                </span>
                <a href="#userreg">
                  <span>
                    <span>4. USER REGISTRATION</span>
                  </span>
                </a>
                <span>
                  <span></span>
                </span>{' '}
                <a href="#products"></a>
              </div>
              <div>
                <a href="#products">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#purchases"></a>
              </div>
              <div>
                <a href="#purchases">
                  <span>
                    <span>5. PURCHASES AND PAYMENT</span>
                  </span>
                </a>
              </div>
              <div>
                <span>
                  <span></span>
                </span>
              </div>
              <div>
                <span>
                  <span></span>
                </span>{' '}
                <a href="#free"></a>
              </div>
              <div>
                <a href="#free">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#cancel"></a>
              </div>
              <div>
                <a href="#cancel">
                  <span>
                    <span>6. CANCELLATION</span>
                  </span>
                </a>
                <span>
                  <span></span>
                </span>{' '}
                <a href="#software"></a> <a href="#software"></a>
              </div>
              <div>
                <a href="#software">
                  <span>
                    <span>7. SOFTWARE</span>
                  </span>
                </a>{' '}
                <a href="#prohibited"></a>
              </div>
              <div>
                <a href="#prohibited">
                  <span>
                    <span>8. PROHIBITED ACTIVITIES</span>
                  </span>
                </a>{' '}
                <a href="#ugc"></a>
              </div>
              <div>
                <a href="#ugc">
                  <span>
                    <span>9. USER GENERATED CONTRIBUTIONS</span>
                  </span>
                </a>{' '}
                <a href="#license"></a>
              </div>
              <div>
                <a href="#license">
                  <span>
                    <span>10. CONTRIBUTION LICENSE</span>
                  </span>
                </a>{' '}
                <a href="#reviews"></a>
              </div>
              <div>
                <a href="#reviews">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#mobile"></a>
              </div>
              <div>
                <a href="#mobile">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#socialmedia"></a>
              </div>
              <div>
                <a href="#socialmedia">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#thirdparty"></a>
              </div>
              <div>
                <a href="#thirdparty">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#advertisers"></a>
              </div>
              <div>
                <a href="#advertisers">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#sitemanage"></a>
              </div>
              <div>
                <a href="#sitemanage">
                  <span>
                    <span>11. SERVICES MANAGEMENT</span>
                  </span>
                </a>{' '}
                <a href="#ppyes"></a>
              </div>
              <div>
                <a href="#ppyes">
                  <span>
                    <span></span>
                  </span>
                </a>{' '}
                <a href="#ppno"></a>
              </div>
              <div>
                <a href="#ppno">
                  <span>
                    <span>12. PRIVACY POLICY</span>
                  </span>
                </a>{' '}
                <a href="#dmca"></a>
              </div>
              <div>
                <a href="#dmca">
                  <span>
                    <span></span>
                  </span>
                </a>
              </div>
              <div>
                <span>
                  <span></span>
                </span>{' '}
                <a href="#terms"></a>
              </div>
              <div>
                <a href="#terms">
                  <span>
                    <span>13. TERM AND TERMINATION</span>
                  </span>
                </a>{' '}
                <a href="#modifications"></a>
              </div>
              <div>
                <a href="#modifications">
                  <span>
                    <span>14. MODIFICATIONS AND INTERRUPTIONS</span>
                  </span>
                </a>{' '}
                <a href="#law"></a>
              </div>
              <div>
                <a href="#law">
                  <span>
                    <span>15. GOVERNING LAW</span>
                  </span>
                </a>{' '}
                <a href="#disputes"></a>
              </div>
              <div>
                <a href="#disputes">
                  <span>
                    <span>16. DISPUTE RESOLUTION</span>
                  </span>
                </a>{' '}
                <a href="#corrections"></a>
              </div>
              <div>
                <a href="#corrections">
                  <span>
                    <span>17. CORRECTIONS</span>
                  </span>
                </a>{' '}
                <a href="#disclaimer"></a>
              </div>
              <div>
                <a href="#disclaimer">
                  <span>
                    <span>18. DISCLAIMER</span>
                  </span>
                </a>{' '}
                <a href="#liability"></a>
              </div>
              <div>
                <a href="#liability">
                  <span>
                    <span>19. LIMITATIONS OF LIABILITY</span>
                  </span>
                </a>{' '}
                <a href="#indemnification"></a>
              </div>
              <div>
                <a href="#indemnification">
                  <span>
                    <span>20. INDEMNIFICATION</span>
                  </span>
                </a>{' '}
                <a href="#userdata"></a>
              </div>
              <div>
                <a href="#userdata">
                  <span>
                    <span>21. USER DATA</span>
                  </span>
                </a>{' '}
                <a href="#electronic"></a>
              </div>
              <div>
                <a href="#electronic">
                  <span>
                    <span>22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span>
                  </span>
                </a>{' '}
                <a href="#california"></a>
              </div>
              <div>
                <a href="#california">
                  <span>
                    <span>23. CALIFORNIA USERS AND RESIDENTS</span>
                  </span>
                </a>{' '}
                <a href="#misc"></a>
              </div>
              <div>
                <a href="#misc">
                  <span>
                    <span>24. MISCELLANEOUS</span>
                  </span>
                </a>{' '}
                <a href="#contact"></a>
              </div>

              <div>
                <a href="#contact">
                  <span>
                    <span>25. CONTACT US</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <a></a>
            </div>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <div id="services">
              <strong>
                <span>1. OUR SERVICES</span>
              </strong>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                The information provided when using the Services is not intended for distribution to or use by any
                person or entity in any jurisdiction or country where such distribution or use would be contrary to law
                or regulation or which would subject us to any registration requirement within such jurisdiction or
                country. Accordingly, those persons who choose to access the Services from other locations do so on
                their own initiative and are solely responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </span>
              <div>
                <span></span>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability
                and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your
                interactions would be subjected to such laws, you may not use the Services. You may not use the Services
                in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </span>
            </div>
            <div>
              <br />
            </div>
          </div>
          <div>
            <strong>
              <span id="ip">2. INTELLECTUAL PROPERTY RIGHTS</span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <strong>Our intellectual property</strong>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                We are the owner or the licensee of all intellectual property rights in our Services, including all
                source code, databases, functionality, software, website designs, audio, video, text, photographs, and
                graphics in the Services (collectively, the "Content" ), as well as the trademarks, service marks, and
                logos contained therein (the "Marks" ).
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual
                property rights and unfair competition laws) and treaties in the United States and around the world.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial
                use only.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <strong>Your use of our Services</strong>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>Subject to your compliance with these Legal Terms, including the "</span>
              <a href="#prohibited">
                <span>PROHIBITED ACTIVITIES</span>
              </a>
              <span>" section below, we grant you a non-exclusive, non-transferable, revocable license to:</span>
            </div>
            <ul>
              <li>
                <span>access the Services; and</span>
              </li>
              <li>
                <span>
                  download or print a copy of any portion of the Content to which you have properly gained access.
                </span>
              </li>
            </ul>
            <div>
              <span>solely for your personal, non-commercial use .</span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no
                Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly
                displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any
                commercial purpose whatsoever, without our express prior written permission.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or
                elsewhere in our Legal Terms, please address your request to: mimccio.dev@gmail.com. If we ever grant
                you the permission to post, reproduce, or publicly display any part of our Services or Content, you must
                identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright
                or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
              </span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span>
                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms
                and your right to use our Services will terminate immediately.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                <strong>Your submissions and contributions</strong>
                <div className="statement-end-if-in-editor">
                  <strong></strong>
                </div>
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                Please review this section and the "<a href="#prohibited">PROHIBITED ACTIVITIES</a>" section carefully
                prior to using our Services to understand the (a) rights you give us and (b) obligations you have when
                you post or upload any content through the Services.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback,
                or other information about the Services ("Submissions" ), you agree to assign to us all intellectual
                property rights in such Submission. You agree that we shall own this Submission and be entitled to its
                unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without
                acknowledgment or compensation to you.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                <strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in
                blogs, message boards, online forums, and other functionality during which you may create, submit, post,
                display, transmit, publish, distribute, or broadcast content and materials to us or through the
                Services, including but not limited to text, writings, video, audio, photographs, music, graphics,
                comments, reviews, rating suggestions, personal information, or other material ( "Contributions" ). Any
                Submission that is publicly posted shall also be treated as a Contribution.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>You understand that Contributions may be viewable by other users of the Services .</span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                <strong>
                  When you post Contributions, you grant us a license (including use of your name, trademarks, and
                  logos):&nbsp;
                </strong>
                By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual,
                non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy,
                reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly
                display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including,
                without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise,
                to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense
                the licenses granted in this section. Our use and distribution may occur in any media formats and
                through any media channels.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                This license includes our use of your name, company name, and franchise name, as applicable, and any of
                the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                <strong>You are responsible for what you post or upload:</strong> By sending us Submissions and/or
                posting Contributions through any part of the Services or making Contributions accessible through the
                Services by linking your account through the Services to any of your social networking accounts, you:
              </span>
            </div>
            <ul>
              <li>
                <span>confirm that you have read and agree with our "</span>
                <a href="#prohibited">
                  <span>PROHIBITED ACTIVITIES</span>
                </a>
                <span>
                  " and will not post, send, publish, upload, or transmit through the Services any Submission nor post
                  any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive,
                  discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful,
                  or misleading;
                </span>
              </li>
              <li>
                <span>
                  to the extent permissible by applicable law, waive any and all moral rights to any such Submission
                  and/or Contribution ;
                </span>
              </li>
              <li>
                <span>
                  warrant that any such Submission and/or Contributions are original to you or that you have the
                  necessary rights and licenses to submit such Submissions and/or Contributions and that you have full
                  authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions
                  ; and
                </span>
              </li>
              <li>
                <span>
                  warrant and represent that your Submissions and/or Contributions do not constitute confidential
                  information.
                </span>
              </li>
            </ul>
            <div>
              You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse
              us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third
              party’s intellectual property rights, or (c) applicable law.
            </div>
            <div>
              <br />
            </div>
            <div>
              <strong>We may remove or edit your Content:</strong> Although we have no obligation to monitor any
              Contributions, we shall have the right to remove or edit any Contributions at any time without notice if
              in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we
              remove or edit any such Contributions, we may also suspend or disable your account and report you to the
              authorities.
            </div>
            <div>
              <br />
            </div>
          </div>
          <div>
            <div id="userreps">
              <a></a>
              <strong>
                <span>
                  <strong>
                    <span>
                      <strong>
                        <span>
                          <strong>
                            <span>3.</span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  USER REPRESENTATIONS
                </span>
              </strong>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span>By using the Services, you represent and warrant that:</span>
              <div className="block-container if" data-type="if" id="d2d82ca8-275f-3f86-8149-8a5ef8054af6">
                <div data-type="conditional-block">
                  <div data-record-question-key="user_account_option" data-type="statement"></div>{' '}
                  <div data-type="body">
                    <span>(</span>
                    <span>1</span>
                    <span>
                      ) all registration information you submit will be true, accurate, current, and complete; (
                    </span>
                    <span>2</span>
                    <span>
                      ) you will maintain the accuracy of such information and promptly update such registration
                      information as necessary;
                    </span>
                  </div>
                </div>
                <div className="statement-end-if-in-editor" data-type="close"></div>&nbsp;
              </div>
              <span>(</span>
              <span>3</span>
              <span>) you have the legal capacity and you agree to comply with these Legal Terms;</span>
              <div className="block-container if" data-type="if" id="8d4c883b-bc2c-f0b4-da3e-6d0ee51aca13">
                <div data-type="conditional-block">
                  <div data-record-question-key="user_u13_option" data-type="statement"></div>{' '}
                  <div data-type="body">
                    <span>(</span>
                    <span>4</span>
                    <span>) you are not under the age of 13;</span>
                  </div>
                </div>
                <div className="statement-end-if-in-editor" data-type="close"></div>&nbsp;
              </div>
              <span>(</span>
              <span>5</span>
              <span>
                ) you are not a minor in the jurisdiction in which you reside
                <div className="block-container if" data-type="if" id="76948fab-ec9e-266a-bb91-948929c050c9">
                  <div data-type="conditional-block">
                    <div data-record-question-key="user_o18_option" data-type="statement"></div>
                    <div data-type="body">
                      , or if a minor, you have received parental permission to use the Services
                    </div>
                  </div>
                  <div className="statement-end-if-in-editor" data-type="close"></div>
                </div>
                ; (
              </span>
              <span>6</span>
              <span>
                ) you will not access the Services through automated or non-human means, whether through a bot, script
                or otherwise; (
              </span>
              <span>7</span>
              <span>) you will not use the Services for any illegal or unauthorized purpose; and (</span>
              <span>8</span>
              <span>) your use of the Services will not violate any applicable law or regulation.</span>
              <span></span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <div>
                <div>
                  <span>
                    If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the
                    right to suspend or terminate your account and refuse any and all current or future use of the
                    Services (or any portion thereof).
                  </span>
                </div>
                <div></div>
                <div>
                  <br />
                </div>
              </div>
              <div>
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div id="userreg">
                      <strong>
                        <span>
                          <strong>
                            <span>
                              <strong>
                                <span>
                                  <strong>
                                    <span>4.</span>
                                  </strong>
                                </span>
                              </strong>
                            </span>
                            &nbsp;
                          </strong>
                          USER REGISTRATION
                        </span>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <br />
              </div>
              <div>
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <span>
                        You may be required to register to use the Services. You agree to keep your password
                        confidential and will be responsible for all use of your account and password. We reserve the
                        right to remove, reclaim, or change a username you select if we determine, in our sole
                        discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        <div className="statement-end-if-in-editor" data-type="close"></div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <span></span>
                </div>
              </div>
              <div>
                <div>
                  <span></span>
                </div>
              </div>
              <div>
                <br />
              </div>
            </div>
          </div>
          <div>
            <div id="purchases">
              <a></a>
              <strong>
                <span>
                  <strong>
                    <span>
                      <strong>
                        <span>
                          <strong>
                            <span>5.</span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  PURCHASES AND PAYMENT
                </span>
              </strong>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span>We accept the following forms of payment:</span>
            </div>
            <div>
              <div>
                <br />
              </div>
            </div>
            <ol>
              <li>- Visa</li>
              <li>- PayPal</li>
            </ol>

            <div>
              <span>
                <br />
              </span>
            </div>
            <div>
              <span>
                You agree to provide current, complete, and accurate purchase and account information for all purchases
                made via the Services. You further agree to promptly update account and payment information, including
                email address, payment method, and payment card expiration date, so that we can complete your
                transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed
                required by us. We may change prices at any time. All payments shall be&nbsp;
              </span>
              <span>in Euros.</span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span>
                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping
                fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your
                order.{' '}
                <div className="block-container if" data-type="if" id="9c0216a1-d094-fd73-a062-9615dc795ffc">
                  <div data-type="conditional-block">
                    <div data-record-question-key="recurring_charge_option" data-type="statement"></div>
                    <div data-type="body">
                      If your order is subject to recurring charges, then you consent to our charging your payment
                      method on a recurring basis without requiring your prior approval for each recurring charge, until
                      such time as you cancel the applicable order.&nbsp;
                    </div>
                  </div>
                  <div className="statement-end-if-in-editor" data-type="close"></div>
                </div>
                We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or
                received payment.
              </span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span>
                We reserve the right to refuse any order placed through the Services. We may, in our sole discretion,
                limit or cancel quantities purchased per person, per household, or per order. These restrictions may
                include orders placed by or under the same customer account, the same payment method, and/or orders that
                use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our
                sole judgment, appear to be placed by dealers, resellers, or distributors.
              </span>
              <span>
                <div data-type="conditional-block">
                  <div data-record-question-key="return_option" data-type="statement"></div>
                </div>
              </span>
            </div>
            <div>
              <div>
                <span></span>
              </div>
            </div>
            <div>
              <div>
                <span></span>
              </div>
              <span></span>
            </div>
            <div>
              <br />
            </div>
            <div id="cancel">
              <span>
                <strong>6. CANCELLATION</strong>
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div>
                <span></span>
              </div>
              <span>
                All purchases are non-refundable. You can cancel your subscription at any time by logging into your
                account. Your cancellation will take effect at the end of the current paid term.
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>If you are unsatisfied with our Services, please email us at mimccio.dev@gmail.com.</span>
            </div>
            <div></div>
            <div>
              <br />
            </div>
            <div id="software">
              <strong>
                <span>7. SOFTWARE</span>
              </strong>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span>
                We may include software for use in connection with our Services. If such software is accompanied by an
                end user license agreement ( "EULA" ), the terms of the EULA will govern your use of the software. If
                such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal,
                and non-transferable license to use such software solely in connection with our services and in
                accordance with these Legal Terms. Any software and any related documentation is provided "AS IS"
                without warranty of any kind, either express or implied, including, without limitation, the implied
                warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and
                all risk arising out of use or performance of any software. You may not reproduce or redistribute any
                software except in accordance with the EULA or these Legal Terms.
              </span>
            </div>
            <div>
              <span>
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <br />
                    </div>
                  </div>
                </div>
              </span>
              <div id="prohibited">
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>
                            <strong>
                              <span>8.</span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    PROHIBITED ACTIVITIES
                  </span>
                </strong>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div>
                <span>
                  You may not access or use the Services for any purpose other than that for which we make the Services
                  available. The Services may not be used in connection with any commercial endeavors except those that
                  are specifically endorsed or approved by us.
                </span>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <span>As a user of the Services, you agree not to:</span>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span>
                        <span>
                          Systematically retrieve data or other content from the Services to create or compile, directly
                          or indirectly, a collection, compilation, database, or directory without written permission
                          from us.
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Trick, defraud, or mislead us and other users, especially in any attempt to learn
                                sensitive account information such as user passwords.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Circumvent, disable, or otherwise interfere with security-related features of the
                                Services, including features that prevent or restrict the use or copying of any Content
                                or enforce limitations on the use of the Services and/or the Content contained therein.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Use any information obtained from the Services in order to harass, abuse, or harm
                                another person.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Make improper use of our support services or submit false reports of abuse or
                                misconduct.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Use the Services in a manner inconsistent with any applicable laws or regulations.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>Engage in unauthorized framing of or linking to the Services.</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
                                other material, including excessive use of capital letters and spamming (continuous
                                posting of repetitive text), that interferes with any party’s uninterrupted use and
                                enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the
                                use, features, functions, operation, or maintenance of the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Engage in any automated use of the system, such as using scripts to send comments or
                                messages, or using any data mining, robots, or similar data gathering and extraction
                                tools.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>Delete the copyright or other proprietary rights notice from any Content.</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Attempt to impersonate another user or person or use the username of another user.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Upload or transmit (or attempt to upload or to transmit) any material that acts as a
                                passive or active information collection or transmission mechanism, including without
                                limitation, clear graphics interchange formats ( "gifs" ), 1×1 pixels, web bugs,
                                cookies, or other similar devices (sometimes referred to as "spyware" or "passive
                                collection mechanisms" or "pcms").
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Interfere with, disrupt, or create an undue burden on the Services or the networks or
                                services connected to the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
                                providing any portion of the Services to you.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Attempt to bypass any measures of the Services designed to prevent or restrict access to
                                the Services, or any portion of the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML,
                                JavaScript, or other code.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Except as permitted by applicable law, decipher, decompile, disassemble, or reverse
                                engineer any of the software comprising or in any way making up a part of the Services.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Except as may be the result of standard search engine or Internet browser usage, use,
                                launch, develop, or distribute any automated system, including without limitation, any
                                spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or
                                use or launch any unauthorized script or other software.
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>Use a buying agent or purchasing agent to make purchases on the Services.</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Make any unauthorized use of the Services, including collecting usernames and/or email
                                addresses of users by electronic or other means for the purpose of sending unsolicited
                                email, or creating user accounts by automated means or under false pretenses .
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                Use the Services as part of any effort to compete with us or otherwise use the Services
                                and/or the Content for any revenue-generating endeavor or commercial enterprise.
                              </span>
                              <span>
                                <div className="forloop-component"></div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <div className="question">Sell or otherwise transfer your profile.</div>
                        <div className="forloop-component"></div>
                      </span>
                    </li>
                    <li>
                      <span>
                        <div className="question">
                          Use the Services to advertise or offer to sell goods and services.
                        </div>
                        <div className="forloop-component"></div>
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <br />
                </div>
              </div>
              <div>
                <div>
                  <div className="block-container if" data-type="if">
                    <div data-type="conditional-block">
                      <div data-type="body">
                        <div id="ugc">
                          <strong>
                            <span>
                              <strong>
                                <span>
                                  <strong>
                                    <span>
                                      <strong>
                                        <span>9.</span>
                                      </strong>
                                    </span>
                                  </strong>
                                </span>
                                &nbsp;
                              </strong>
                              USER GENERATED CONTRIBUTIONS
                            </span>
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <br />
                </div>
                <div>
                  <div className="block-container if" data-type="if">
                    <div data-type="conditional-block">
                      <div data-type="body">
                        <div>
                          <span>
                            <div
                              className="block-container if"
                              data-type="if"
                              id="24327c5d-a34f-f7e7-88f1-65a2f788484f"
                            >
                              <div data-type="conditional-block">
                                <div data-record-question-key="user_post_content_option" data-type="statement"></div>
                              </div>
                            </div>
                            The Services may invite you to chat, contribute to, or participate in blogs, message boards,
                            online forums, and other functionality, and may provide you with the opportunity to create,
                            submit, post, display, transmit, perform, publish, distribute, or broadcast content and
                            materials to us or on the Services, including but not limited to text, writings, video,
                            audio, photographs, graphics, comments, suggestions, or personal information or other
                            material (collectively, "Contributions" ). Contributions may be viewable by other users of
                            the Services and through third-party websites. As such, any Contributions you transmit may
                            be treated as non-confidential and non-proprietary. When you create or make available any
                            Contributions, you thereby represent and warrant that:
                            <div className="else-block"></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <span>
                  <span>
                    <span>
                      The creation, distribution, transmission, public display, or performance, and the accessing,
                      downloading, or copying of your Contributions do not and will not infringe the proprietary rights,
                      including but not limited to the copyright, patent, trademark, trade secret, or moral rights of
                      any third party.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      You are the creator and owner of or have the necessary licenses , rights, consents, releases, and
                      permissions to use and to authorize us, the Services, and other users of the Services to use your
                      Contributions in any manner contemplated by the Services and these Legal Terms.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      You have the written consent, release, and/or permission of each and every identifiable individual
                      person in your Contributions to use the name or likeness of each and every such identifiable
                      individual person to enable inclusion and use of your Contributions in any manner contemplated by
                      the Services and these Legal Terms.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>Your Contributions are not false, inaccurate, or misleading.</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid
                      schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous ,
                      slanderous, or otherwise objectionable (as determined by us).
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      Your Contributions are not used to harass or threaten (in the legal sense of those terms) any
                      other person and to promote violence against a specific person or class of people.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>Your Contributions do not violate any applicable law, regulation, or rule.</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>Your Contributions do not violate the privacy or publicity rights of any third party.</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      Your Contributions do not violate any applicable law concerning child pornography, or otherwise
                      intended to protect the health or well-being of minors.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      Your Contributions do not include any offensive comments that are connected to race, national
                      origin, gender, sexual preference, or physical handicap.
                    </span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span>
                    <span>
                      Your Contributions do not otherwise violate, or link to material that violates, any provision of
                      these Legal Terms, or any applicable law or regulation.
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <span>
                        Any use of the Services in violation of the foregoing violates these Legal Terms and may result
                        in, among other things, termination or suspension of your rights to use the Services.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div id="license">
                      <strong>
                        <span>
                          <strong>
                            <span>
                              <strong>
                                <span>
                                  <strong>
                                    <span>10.</span>
                                  </strong>
                                </span>
                              </strong>
                            </span>
                            &nbsp;
                          </strong>
                          CONTRIBUTION LICENSE
                        </span>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div className="block-container if" data-type="if" id="a088ddfb-d8c1-9e58-6f21-958c3f4f0709">
                <div data-type="conditional-block">
                  <div data-record-question-key="user_post_content_option" data-type="statement"></div>
                </div>
              </div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <span>
                        By posting your Contributions to any part of the Services
                        <div className="block-container if" data-type="if" id="19652acc-9a2a-5ffe-6189-9474402fa6cc">
                          <div data-type="conditional-block">
                            <div data-record-question-key="socialnetwork_link_option" data-type="statement"></div>
                          </div>
                          , you automatically grant, and you represent and warrant that you have the right to grant, to
                          us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable,
                          royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce,
                          disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform,
                          publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute
                          such Contributions (including, without limitation, your image and voice) for any purpose,
                          commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into
                          other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use
                          and distribution may occur in any media formats and through any media channels.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <span>
                        This license will apply to any form, media, or technology now known or hereafter developed, and
                        includes our use of your name, company name, and franchise name, as applicable, and any of the
                        trademarks, service marks, trade names, logos, and personal and commercial images you provide.
                        You waive all moral rights in your Contributions, and you warrant that moral rights have not
                        otherwise been asserted in your Contributions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <span>
                        We do not assert any ownership over your Contributions. You retain full ownership of all of your
                        Contributions and any intellectual property rights or other proprietary rights associated with
                        your Contributions. We are not liable for any statements or representations in your
                        Contributions provided by you in any area on the Services. You are solely responsible for your
                        Contributions to the Services and you expressly agree to exonerate us from any and all
                        responsibility and to refrain from any legal action against us regarding your Contributions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <br />
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <div>
                      <span>
                        We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change
                        any Contributions; (2) to re-categorize any Contributions to place them in more appropriate
                        locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for
                        any reason, without notice. We have no obligation to monitor your Contributions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <br />
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-type="body">
                    <span>
                      <div className="else-block"></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-record-question-key="review_option" data-type="statement"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-record-question-key="mobile_app_option" data-type="statement"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-record-question-key="socialnetwork_link_option" data-type="statement"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="block-container if" data-type="if">
              <div data-type="conditional-block">
                <div data-record-question-key="3rd_party_option" data-type="statement"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="block-container if" data-type="if">
              <div data-type="conditional-block">
                <div data-record-question-key="advertiser_option" data-type="statement"></div>
              </div>
            </div>
          </div>
          <div id="sitemanage">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>11.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                SERVICES MANAGEMENT
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal
            Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or
            these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in
            our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or
            disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise
            disable all files and content that are excessive in size or are in any way burdensome to our systems; and
            (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate
            the proper functioning of the Services.
          </div>
          <div>
            <br />
          </div>
          <div>
            <div className="block-container if" data-type="if">
              <div data-type="conditional-block">
                <div data-record-question-key="privacy_policy_option" data-type="statement"></div>
              </div>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <div data-record-question-key="privacy_policy_followup" data-type="statement"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="ppno">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>12.</span>
                    </strong>
                  </span>
                </strong>
              </span>{' '}
              PRIVACY POLICY
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              We care about data privacy and security. By using the Services, you agree to be bound by our Privacy
              Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the
              Services are hosted in the United States. If you access the Services from any other region of the world
              with laws or other requirements governing personal data collection, use, or disclosure that differ from
              applicable laws in the United States, then through your continued use of the Services, you are
              transferring your data to the United States, and you expressly consent to have your data transferred to
              and processed in the United States.
              <div className="block-container if" data-type="if" id="547bb7bb-ecf2-84b9-1cbb-a861dc3e14e7">
                <div data-type="conditional-block">
                  <span>
                    <div className="block-container if" data-type="if" id="547bb7bb-ecf2-84b9-1cbb-a861dc3e14e7">
                      <div data-type="conditional-block">
                        <div data-type="body">
                          <span>
                            <div
                              className="block-container if"
                              data-type="if"
                              id="547bb7bb-ecf2-84b9-1cbb-a861dc3e14e7"
                            >
                              <div data-type="conditional-block">
                                <div data-record-question-key="user_u13_option" data-type="statement"></div>
                                <div data-type="body">
                                  &nbsp;Further, we do not knowingly accept, request, or solicit information from
                                  children or knowingly market to children. Therefore, in accordance with the U.S.
                                  Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone
                                  under the age of 13 has provided personal information to us without the requisite and
                                  verifiable parental consent, we will delete that information from the Services as
                                  quickly as is reasonably practical.
                                </div>
                              </div>
                              <div className="statement-end-if-in-editor" data-type="close">
                                <span></span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              <div className="block-container if" data-type="if">
                <div data-type="conditional-block">
                  <span>
                    <div className="block-container if" data-type="if">
                      <div data-type="conditional-block">
                        <div data-type="body">
                          <span>
                            <div className="block-container if" data-type="if">
                              <div className="statement-end-if-in-editor" data-type="close">
                                <span>
                                  <div className="statement-end-if-in-editor">
                                    <span>
                                      <div className="block-container if" data-type="if">
                                        <div data-type="conditional-block">
                                          <span>
                                            <div className="block-container if" data-type="if">
                                              <div data-type="conditional-block">
                                                <div data-type="body">
                                                  <span>
                                                    <div className="block-container if" data-type="if">
                                                      <div className="statement-end-if-in-editor" data-type="close">
                                                        <span></span>
                                                      </div>
                                                    </div>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div>
            <div className="block-container if" data-type="if">
              <div data-type="conditional-block">
                <div data-record-question-key="copyright_agent_option" data-type="statement"></div>
                <div className="block-container if" data-type="if">
                  <div className="statement-end-if-in-editor" data-type="close"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="block-container if" data-type="if">
              <div className="statement-end-if-in-editor" data-type="close"></div>
            </div>
          </div>
          <div id="terms">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>13.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                TERM AND TERMINATION
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY
              OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
              OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY
              PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
              WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE{' '}
              <div className="block-container if" data-type="if" id="a6e121c2-36b4-5066-bf9f-a0a33512e768">
                <div data-type="conditional-block">
                  <div data-record-question-key="user_account_option" data-type="statement"></div>
                  <div data-type="body">YOUR ACCOUNT AND&nbsp;</div>
                </div>
                <div className="statement-end-if-in-editor" data-type="close"></div>
              </div>
              ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              If we terminate or suspend your account for any reason, you are prohibited from registering and creating a
              new account under your name, a fake or borrowed name, or the name of any third party, even if you may be
              acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without limitation pursuing civil, criminal, and
              injunctive redress.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div id="modifications">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>14.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                MODIFICATIONS AND INTERRUPTIONS
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any
              reason at our sole discretion without notice. However, we have no obligation to update any information on
              our Services. We will not be liable to you or any third party for any modification, price change,
              suspension, or discontinuance of the Services.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              We cannot guarantee the Services will be available at all times. We may experience hardware, software, or
              other problems or need to perform maintenance related to the Services, resulting in interruptions, delays,
              or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You agree that we have no liability
              whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services
              during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to
              obligate us to maintain and support the Services or to supply any corrections, updates, or releases in
              connection therewith.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div id="law">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>15.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                GOVERNING LAW
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span></span>
          </div>

          <p>
            These Legal Terms are governed by and interpreted following the laws of France, and the use of the United
            Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual
            residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by
            obligatory provisions of the law in your country to residence. Roumple and yourself both agree to submit to
            the non-exclusive jurisdiction of the courts of Lyon, which means that you may make a claim to defend your
            consumer protection rights in regards to these Legal Terms in France, or in the EU country in which you
            reside.
          </p>

          <div>
            <br />
          </div>
          <div id="disputes">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>16.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                DISPUTE RESOLUTION
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div></div>
          <div></div>
          <div>
            <strong>Binding Arbitration</strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div>
              <span></span>
            </div>
          </div>
          <p>
            Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by
            one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European
            Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and
            which are in force at the time the application for arbitration is filed, and of which adoption of this
            clause constitutes acceptance. The seat of arbitration shall be lyon, France. The language of the
            proceedings shall be french. Applicable rules of substantive law shall be the law of France.
          </p>
          <div>
            <br />
          </div>
          <div>
            <strong>Restrictions</strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To
            the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is
            no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action
            procedures; and (c) there is no right or authority for any Dispute to be brought in a purported
            representative capacity on behalf of the general public or any other persons.
          </div>
          <div>
            <br />
          </div>
          <div>
            <strong>Exceptions to Arbitration</strong>
            <div className="else-block"></div>
          </div>
          <div>
            <br />
          </div>
          <div>
            The Parties agree that the following Disputes are not subject to the above provisions concerning binding
            arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the
            intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft,
            piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision
            is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling
            within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided
            by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree
            to submit to the personal jurisdiction of that court.
            <div className="else-block"></div>
          </div>
          <div>
            <div className="statement-end-if-in-editor"></div>
          </div>
          <div>
            <br />
          </div>
          <div id="corrections">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>17.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                CORRECTIONS
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            There may be information on the Services that contains typographical errors, inaccuracies, or omissions,
            including descriptions, pricing, availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or update the information on the Services at
            any time, without prior notice.
          </div>
          <div>
            <br />
          </div>
          <div id="disclaimer">
            <span>
              <strong>
                <span>
                  <strong>
                    <span>
                      <strong>
                        <span>18.</span>
                      </strong>
                    </span>
                  </strong>
                </span>{' '}
                DISCLAIMER
              </strong>
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL
              BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
              IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
              WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT
              OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR
              RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY
              OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3)
              ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
              FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
              SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
              SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
              OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED
              WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT
              BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
              PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN
              ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div id="liability">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>19.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                LIMITATIONS OF LIABILITY
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              <span>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
                DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
                PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </span>{' '}
              <div className="block-container if" data-type="if" id="3c3071ce-c603-4812-b8ca-ac40b91b9943">
                <span>
                  <div data-type="conditional-block">
                    <div data-record-question-key="limitations_liability_option" data-type="statement"></div>
                    <div data-type="body">
                      NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
                      WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO{' '}
                      <div className="block-container if" data-type="if" id="73189d93-ed3a-d597-3efc-15956fa8e04e">
                        <div data-type="conditional-block">
                          <div data-record-question-key="limitations_liability_option" data-type="statement"></div>
                          <div data-type="body">
                            THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE three (3) MONTH PERIOD PRIOR TO ANY CAUSE
                            OF ACTION ARISING.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </span>
            <p className="mt-4">
              CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
              EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
              DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
            </p>
            <div className="statement-end-if-in-editor" data-type="close">
              <span></span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div id="indemnification">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>20.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                INDEMNIFICATION
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of
              our respective officers, agents, partners, and employees, from and against any loss, damage, liability,
              claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or
              arising out of:{' '}
              <div className="block-container if" data-type="if" id="475fffa5-05ca-def8-ac88-f426b238903c">
                <div data-type="conditional-block">
                  <div data-record-question-key="user_post_content_option" data-type="statement"></div>
                  <div data-type="body">(1) your Contributions;&nbsp;</div>
                </div>
                <div className="statement-end-if-in-editor" data-type="close"></div>
              </div>
              (<span>2</span>) use of the Services; (<span>3</span>) breach of these Legal Terms; (<span>4</span>) any
              breach of your representations and warranties set forth in these Legal Terms; (<span>5</span>) your
              violation of the rights of a third party, including but not limited to intellectual property rights; or (
              <span>6</span>) any overt harmful act toward any other user of the Services with whom you connected via
              the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the
              exclusive defense and control of any matter for which you are required to indemnify us, and you agree to
              cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you
              of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of
              it.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div id="userdata">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>21.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                USER DATA
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              We will maintain certain data that you transmit to the Services for the purpose of managing the
              performance of the Services, as well as data relating to your use of the Services. Although we perform
              regular routine backups of data, you are solely responsible for all data that you transmit or that relates
              to any activity you have undertaken using the Services. You agree that we shall have no liability to you
              for any loss or corruption of any such data, and you hereby waive any right of action against us arising
              from any such loss or corruption of such data.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div id="electronic">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>22.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              Visiting the Services, sending us emails, and completing online forms constitute electronic
              communications. You consent to receive electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you electronically, via email and on the
              Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE
              OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
              POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive
              any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or retention of non-electronic records, or to
              payments or the granting of credits by any means other than electronic means.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div></div>
          <div id="california">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>23.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                CALIFORNIA USERS AND RESIDENTS
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of
              the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625
              North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </span>
          </div>
          <div>
            <br />
          </div>
          <div></div>
          <div id="misc">
            <strong>
              <span>
                <strong>
                  <span>
                    <strong>
                      <span>
                        <strong>
                          <span>24.</span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                  &nbsp;
                </strong>
                MISCELLANEOUS
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the
              Services constitute the entire agreement and understanding between you and us. Our failure to exercise or
              enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or
              provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of
              our rights and obligations to others at any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or
              part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that
              provision or part of the provision is deemed severable from these Legal Terms and does not affect the
              validity and enforceability of any remaining provisions. There is no joint venture, partnership,
              employment or agency relationship created between you and us as a result of these Legal Terms or use of
              the Services. You agree that these Legal Terms will not be construed against us by virtue of having
              drafted them. You hereby waive any and all defenses you may have based on the electronic form of these
              Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
            </span>
          </div>
          <div>
            <div>
              <span></span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div id="contact">
            <strong>
              <span>
                <span>
                  <strong>
                    <span>
                      <strong>
                        <span>
                          <strong>
                            <span>25.</span>
                          </strong>
                        </span>
                      </strong>
                    </span>
                    &nbsp;
                  </strong>
                  CONTACT US
                </span>
              </span>
            </strong>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              In order to resolve a complaint regarding the Services or to receive further information regarding use of
              the Services, please contact us at:
            </span>
          </div>
          <div>
            <br />
          </div>
          <div>
            <span>
              <span>
                <div className="question">
                  <strong>roumple</strong>
                </div>
                <strong></strong>
              </span>
            </span>
          </div>
          <div>
            <span>
              <span>
                <div className="question">
                  <strong>
                    <div className="question">124 rue montesquieu</div>
                  </strong>
                </div>
                <span></span>
              </span>
            </span>
          </div>
          <div>
            <span>
              <strong>
                <span>
                  <div className="question">lyon</div>

                  <div className="question">69007</div>
                </span>
              </strong>
              <strong>
                <span></span>
              </strong>
            </span>
          </div>
          <div>
            <div>
              <strong></strong>
            </div>
            <strong>
              <div className="question">France</div>
            </strong>

            <div className="statement-end-if-in-editor">
              <strong></strong>
            </div>
          </div>
          <div>
            <strong>
              <span>
                <strong></strong>
              </span>
            </strong>
          </div>
          <div>
            <strong>
              <span>
                <strong></strong>
              </span>
            </strong>
          </div>
          <div>
            <strong>
              <span>
                <strong>
                  <div className="question">mimccio.dev@gmail.com</div>
                </strong>
              </span>
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
