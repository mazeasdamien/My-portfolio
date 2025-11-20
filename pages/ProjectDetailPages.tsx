
import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { ZoomableImage, VideoPlayer, YoutubeEmbed } from '../components/MediaComponents';
import { FileText, ExternalLink, Github, Monitor } from 'lucide-react';

export const HCICoursePage = () => (
    <ProjectLayout title="Human-Computer Interaction" subtitle="Course Design • BNBU • 2025">
        <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="prose prose-neutral max-w-none text-lg text-neutral-600">
                <p>
                    I created this 14-week course consisting of weekly 1-hour lectures and 2-hour practical lab sessions.
                    It aims to develop an understanding of how users interact with technology and how effective design enhances user experience.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Build hands-on skills in prototyping and usability evaluation, learning how to design, test, and refine interactive systems.</li>
                    <li>Apply user-centered design principles, using an iterative design approach to create intuitive, user-friendly interfaces.</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <img src="images/portfolio/hcicourse/hci1.webp" alt="HCI Course Hero" className="w-full aspect-video object-cover rounded-lg shadow-sm" />
                <div className="grid grid-cols-2 gap-4">
                    <img src="images/portfolio/hcicourse/hci3.webp" alt="User Studies" className="w-full aspect-square object-cover rounded-lg shadow-sm" />
                    <img src="images/portfolio/hcicourse/hci4.webp" alt="Ergonomics" className="w-full aspect-square object-cover rounded-lg shadow-sm" />
                </div>
            </div>

            <blockquote className="border-l-4 border-[rgb(9,172,239)] pl-4 italic text-xl text-neutral-500">
                "If a picture is worth 1000 words, a prototype is worth 1000 meetings."
                <footer className="text-sm mt-2 font-bold not-italic">— Tom & David Kelley</footer>
            </blockquote>

            <div className="flex flex-wrap gap-4">
                <a href="pdfs/HCI.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                    <FileText size={18} /> View Full Syllabus
                </a>
            </div>
        </div>

        <div className="lg:col-span-5 space-y-12">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Course Modules</h3>
                <ul className="space-y-4 text-neutral-600 text-sm">
                    {[
                        ['Introduction to HCI', 'Core goals, definitions, evolution.'],
                        ['Prototyping', 'Low-fidelity vs High-fidelity methods.'],
                        ['User Studies', 'Evaluation, SUS, NASA-TLX.'],
                        ['General Theories', "Miller's Law, Hick's Law, Gestalt."],
                        ['Mobile Ergonomics', 'Designing for touch, gestures, and mobile.'],
                        ['Web Ergonomics', 'Principles of navigation and architecture.'],
                        ['Accessibility', 'Inclusive design principles.'],
                        ['VR & AR', 'Interaction design, challenges, hardware.'],
                        ['Human-AI Interaction', 'Design principles, XAI.'],
                        ['Human-Robot Interaction', 'Trust, safety, and HRI concepts.']
                    ].map(([topic, desc]) => (
                        <li key={topic}><strong className="text-neutral-900">{topic}:</strong> {desc}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Projects</h3>
                <div className="space-y-4">
                    {[
                        { name: 'Unity 3D', desc: 'Design eHMI concepts for autonomous shuttles.', color: 'bg-[rgba(9,172,239,0.1)]' },
                        { name: 'Quant-UX', desc: 'Mobile app prototyping and A/B testing.', color: 'bg-[rgba(98,183,77,0.1)]' },
                        { name: 'ShapesXR', desc: 'Educational VR experience prototyping.', color: 'bg-[rgba(154,58,137,0.1)]' }
                    ].map((p) => (
                        <div key={p.name} className={`p-4 rounded-lg ${p.color}`}>
                            <strong className="block text-neutral-900 font-bold mb-1">{p.name}</strong>
                            <span className="text-sm text-neutral-600">{p.desc}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Assessment</h3>
                <ul className="space-y-4 text-neutral-600 text-sm">
                    <li><strong className="text-neutral-900">Exams (30%):</strong> Quizzes and a final exam covering lecture content.</li>
                    <li><strong className="text-neutral-900">Labs Submissions (10%):</strong> Individual software learning assignments.</li>
                    <li><strong className="text-neutral-900">HCI Project Reports (60%):</strong> Three group project reports, one for each lab rotation (20% each).</li>
                </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-4">Key Details</h3>
                <dl className="space-y-3 text-sm">
                    <div><dt className="font-bold text-neutral-900">Role</dt><dd className="text-neutral-600">Course Creator & Instructor</dd></div>
                    <div><dt className="font-bold text-neutral-900">Tools</dt><dd className="text-neutral-600">Unity, Quant-UX, ShapesXR</dd></div>
                    <div><dt className="font-bold text-neutral-900">Highlights</dt><dd className="text-neutral-600">3-Rotation Lab System</dd></div>
                </dl>
            </div>
        </div>
    </ProjectLayout>
);

export const RemoteMaintenancePage = () => (
    <ProjectLayout title="Telexistence for Remote Marine Maintenance" subtitle="Vision • PhD Research • 2023">
        <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg text-neutral-600 leading-relaxed">
                Maintenance of a vessel's machinery space is critical but often hazardous. Current remote solutions are limited in capability.
                This project investigates <strong>telexistence</strong> as a high-presence solution, allowing marine engineers to conduct complex inspections
                and repairs from a safe, remote location as if they were physically present. We propose a scalable framework to evaluate this technology
                aiming to improve safety, efficiency, and reduce operational costs.
            </p>

            <ZoomableImage src="images/portfolio/telexistencemaintenance/framework.webp" alt="Framework" className="w-full rounded-lg border border-neutral-100" />

            <div className="grid grid-cols-2 gap-4">
                <VideoPlayer src="videos/vrteleoperation2.mp4" className="aspect-video rounded-lg" />
                <ZoomableImage src="images/portfolio/telexistencemaintenance/elements.webp" alt="Elements" className="aspect-video rounded-lg bg-white object-contain" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <ZoomableImage src="images/portfolio/telexistencemaintenance/levels.webp" alt="Maintenance Levels" className="aspect-video rounded-lg bg-white object-contain" />
                {/* Fallback/Additional Content if needed, or just span full width if levels is detailed */}
            </div>

            <blockquote className="border-l-4 border-neutral-300 pl-4 italic text-xl text-neutral-500">
                What are the opportunities and challenges of deploying telexistence capabilities for remote marine maintenance?
            </blockquote>

            <div className="flex flex-wrap gap-4">
                <a href="pdfs/paper3.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700"><FileText size={16} /> Publication</a>
                <a href="https://github.com/mazeasdamien/Inverse-Kinematics-Universal-Robot-Unity" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200"><Github size={16} /> GitHub</a>
                <a href="https://mazeasdamien.github.io/Unity-Universal-Robots-UR8-UR15/" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200"><Monitor size={16} /> WebGL Demo</a>
            </div>
        </div>
        <div className="lg:col-span-5 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Research Method</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    We gathered context from expert marine engineers to understand current challenges. Based on this, we designed a realistic maintenance scenario (engine inspection).
                    An experimental protocol compared our telexistence solution (VR HMD + Digital Twin) against traditional direct teleoperation.
                </p>
                <VideoPlayer src="videos/ur16e.mp4" className="aspect-video rounded-lg" />
            </div>
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Contribution</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                    I designed and developed the telexistence framework, integrating a physical UR16e collaborative robot with Unity 3D via DDS.
                    A key component was developing a custom <strong>C# Inverse Kinematics (IK)</strong> solution for the UR16e, enabling intuitive control from the VR HMD.
                </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-4">Metadata</h3>
                <dl className="space-y-3 text-sm">
                    <div><dt className="font-bold text-neutral-900">Type</dt><dd className="text-neutral-600">PhD Research</dd></div>
                    <div><dt className="font-bold text-neutral-900">Location</dt><dd className="text-neutral-600">Cranfield University & DSTL</dd></div>
                    <div><dt className="font-bold text-neutral-900">Published</dt><dd className="text-neutral-600">IEEE VRW 2023</dd></div>
                </dl>
            </div>
        </div>
    </ProjectLayout>
);

export const TelexistenceInterfacePage = () => (
    <ProjectLayout title="VR Interface for Industrial Robotics" subtitle="PhD Research • 2022">
        <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg text-neutral-600">
                Current HMI controllers for industrial robots are often complex and non-intuitive.
                This project proposes a digital-twin-based framework with a VR interface to reduce complexity.
                Using DDS for real-time sensor data, the system allows for intuitive remote manipulation of a FANUC robot.
            </p>
            <ZoomableImage src="images/portfolio/telexistence/architecture.webp" alt="System Architecture" className="rounded-lg border border-neutral-100" />

            <div className="grid grid-cols-2 gap-4">
                <ZoomableImage src="images/portfolio/telexistence/ui1.webp" alt="UI Elements" className="aspect-square object-contain bg-neutral-900 rounded-lg" />
                <ZoomableImage src="images/portfolio/telexistence/ui2.webp" alt="Interaction Methods" className="aspect-square object-contain bg-neutral-900 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <ZoomableImage src="images/portfolio/telexistence/ui3.webp" alt="Fanuc Setup" className="aspect-square object-contain bg-white rounded-lg border border-neutral-100" />
                <ZoomableImage src="images/portfolio/telexistence/ui4.webp" alt="Point Cloud" className="aspect-square object-contain bg-neutral-900 rounded-lg" />
            </div>

            <VideoPlayer src="videos/Fanuc industrial robot controlled in VR.mp4" className="aspect-video rounded-lg" />

            <div className="flex flex-wrap gap-4">
                <a href="pdfs/paper2.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700"><FileText size={16} /> Publication</a>
            </div>
        </div>
        <div className="lg:col-span-5 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Implementation</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    The framework connects a VR HMD to a physical FANUC M-20iA robot.
                    Architecture components:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 mb-6">
                    <li><strong>C#.NET Gateway:</strong> Collects sensor data from Azure Kinect & Robot Controller.</li>
                    <li><strong>Unity 3D App:</strong> Immersive UI for the operator.</li>
                    <li><strong>DDS (RTI Connext):</strong> Real-time data backbone replacing ROS.</li>
                </ul>

                <h4 className="text-xs font-bold uppercase text-neutral-400 mb-4">Data Structure & Coordinates</h4>
                <div className="grid grid-cols-2 gap-2">
                    <ZoomableImage src="images/portfolio/telexistence/coor.webp" alt="Coordinates" className="aspect-square object-contain bg-white rounded-lg border border-neutral-100" />
                    <ZoomableImage src="images/portfolio/telexistence/datastructure.webp" alt="Data Structure" className="aspect-square object-contain bg-white rounded-lg border border-neutral-100" />
                    <ZoomableImage src="images/portfolio/telexistence/robot.webp" alt="Robot Data" className="col-span-2 aspect-video object-contain bg-white rounded-lg border border-neutral-100" />
                </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-4">Highlights</h3>
                <dl className="space-y-3 text-sm">
                    <div><dt className="font-bold text-neutral-900">Innovation</dt><dd className="text-neutral-600">Physical Robot Integration (Not just Sim)</dd></div>
                    <div><dt className="font-bold text-neutral-900">Protocol</dt><dd className="text-neutral-600">DDS (Non-ROS Framework)</dd></div>
                    <div><dt className="font-bold text-neutral-900">Feature</dt><dd className="text-neutral-600">Real-time Digital Twin</dd></div>
                </dl>
            </div>
        </div>
    </ProjectLayout>
);

export const RemoteCollabPage = () => (
    <ProjectLayout title="Expert and Worker Remote Collaboration" subtitle="Research Vision • 2024">
        <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg text-neutral-600">
                Existing AR solutions often encumber workers with devices. This paper presents a telexistence framework
                integrating a collaborative robot (cobot), projector, and VR to eliminate worker wearables while enhancing expert presence.
            </p>
            <ZoomableImage src="images/portfolio/remotecollab/figure1.webp" alt="Setup" className="rounded-lg" />

            <div className="aspect-video rounded-lg overflow-hidden">
                <YoutubeEmbed id="pjlTcweo_lg" />
            </div>

            <div className="flex flex-wrap gap-4">
                <a href="pdfs/paper4.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700"><FileText size={16} /> Publication</a>
            </div>
        </div>
        <div className="lg:col-span-5 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">System Overview</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                    <strong>R-Robotics Application:</strong> Built in Unity using Netcode.
                    <br /><br />
                    <strong>Worker Space:</strong> Universal Robot UR16e + Projector.
                    <br />
                    <strong>Expert Space:</strong> VR Interface + RoboDK for IK solving.
                </p>
            </div>

            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Contributions & Limitations</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                    This work validates a telexistence-based remote guidance system that eliminates the need for local workers to wear devices.
                    <br /><br />
                    <strong>Limitations:</strong> Manual calibration of the drawing area, limited workspace of the UR16e cobot (900mm), and observed high cognitive workload on the expert.
                </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-4">Project Data</h3>
                <dl className="space-y-3 text-sm">
                    <div><dt className="font-bold text-neutral-900">Innovation</dt><dd className="text-neutral-600">Cobot-projected AR guidance without worker wearables</dd></div>
                    <div><dt className="font-bold text-neutral-900">Tools</dt><dd className="text-neutral-600">Unity, RoboDK, URScript</dd></div>
                    <div><dt className="font-bold text-neutral-900">Partners</dt><dd className="text-neutral-600">Cranfield University, DSTL, INP</dd></div>
                </dl>
            </div>
        </div>
    </ProjectLayout>
);

export const VRPrototypingPage = () => (
    <ProjectLayout title="VR Application for Immersive Prototyping" subtitle="Master Thesis • 2019">
        <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg text-neutral-600">
                "ImPro" envisions VR not just as visualization, but as a creation tool.
                This research investigates how immersive environments enhance early-stage design, improving scale perception compared to desktop CAD.
            </p>
            <ZoomableImage src="images/portfolio/VRprototyping/method.webp" alt="Method" className="rounded-lg bg-neutral-50 p-4" />

            <div className="grid grid-cols-4 gap-2">
                {['p1', 'p2', 'p3', 'p4'].map(img => (
                    <ZoomableImage key={img} src={`images/portfolio/VRprototyping/${img}.webp`} alt={img} className="aspect-square rounded-lg object-cover" />
                ))}
            </div>

            <ZoomableImage src="images/portfolio/VRprototyping/usercreation.webp" alt="User Creation" className="rounded-lg bg-neutral-50 p-4" />

            <div className="flex flex-wrap gap-4">
                <a href="pdfs/paper1.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700"><FileText size={16} /> Publication</a>
                <a href="pdfs/master thesis damien mazeas.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200"><FileText size={16} /> Thesis</a>
            </div>
        </div>
        <div className="lg:col-span-5 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Research Findings</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    Comparative analysis against Google Blocks and Gravity Sketch.
                    ImPro achieved a System Usability Scale (SUS) score of 77.3.
                    Demonstrated improved proportion understanding vs Desktop CAD.
                </p>
                <ZoomableImage src="images/portfolio/VRprototyping/user.webp" alt="User Analysis" className="rounded-lg mb-4 border border-neutral-100" />
                <div className="grid grid-cols-1 gap-4">
                    <ZoomableImage src="images/portfolio/VRprototyping/table 1.webp" alt="Table 1" className="rounded-lg border border-neutral-100" />
                    <ZoomableImage src="images/portfolio/VRprototyping/table 2.webp" alt="Table 2" className="rounded-lg border border-neutral-100" />
                </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-4">Context</h3>
                <dl className="space-y-3 text-sm">
                    <div><dt className="font-bold text-neutral-900">Location</dt><dd className="text-neutral-600">TUMCREATE (Singapore) / Arts et Métiers</dd></div>
                    <div><dt className="font-bold text-neutral-900">Venue</dt><dd className="text-neutral-600">DESIGN 2020 Conference</dd></div>
                </dl>
            </div>
        </div>
    </ProjectLayout>
);

export const IndustrialRoboticsPage = () => (
    <ProjectLayout title="Industrial Robotics & Automation" subtitle="Professional Training • 2021">
        <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-lg text-neutral-600">
                Hands-on experience with industrial robotics, specifically the FANUC 6-axis robot.
                The core of this training was achieving certification in <strong>Teach Pendant Programming</strong>,
                which involves using a handheld control unit to manually guide the robot, define waypoints, and write logical sequences.
            </p>
            <VideoPlayer src="videos/fanucpickandplace.mp4" className="aspect-video rounded-lg" />

            <p className="text-neutral-600 leading-relaxed">
                I also co-authored a technical article for <strong>Maintenance and Engineering</strong>, discussing how emerging technologies
                like Digital Twins, IoT, and Telexistence can be leveraged to support industrial asset management.
            </p>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                    <ZoomableImage src="images/portfolio/fanuc/fanuc.webp" alt="Fanuc Robot" className="aspect-[3/4] rounded-lg object-contain bg-white" />
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                    <VideoPlayer src="videos/roboguideunity.mp4" className="aspect-video rounded-lg" />
                    <VideoPlayer src="videos/turtlebot.mp4" className="aspect-video rounded-lg" />
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <a href="pdfs/certificate fanuc.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700"><FileText size={16} /> Certificate</a>
                <a href="https://www.maintenanceandengineering.com/2021/06/16/emerging-technologies-to-support-asset-management/" target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200"><ExternalLink size={16} /> Technical Article</a>
            </div>
        </div>
        <div className="lg:col-span-5 space-y-10">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Skills Acquired</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600">
                    <li>FANUC Teach Pendant Operation (Programming & Operation)</li>
                    <li>Waypoints & Logic Programming</li>
                    <li>Digital Twin Integration (Roboguide to Unity)</li>
                    <li>ROS-based teleoperation (Turtlebot 2 + HoloLens 2)</li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-neutral-200 pb-2 mb-6">Digital Twin + R&D</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    Beyond standard operation, I explored connecting <strong>FANUC Roboguide</strong> to Unity 3D for rich interactive training simulations.
                    Further research involved mobile robotics with <strong>Turtlebot 2</strong> and Azure Kinect controlled via HoloLens 2.
                </p>
            </div>
        </div>
    </ProjectLayout>
);

export const MasterProjectsPage = () => (
    <ProjectLayout title="Industrial VR Applications" subtitle="Master Projects • 2018-2019">
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2 text-neutral-900">Virtual Process Training</h2>
                    <span className="text-sm text-neutral-500 uppercase tracking-wider">Gerresheimer • Production Line</span>
                </div>
                <p className="text-neutral-600">
                    Enables novice operators to learn complex startup sequences for glass bulb manufacturing without risking real equipment.
                    By digitizing the training, operators practice "muscle memory" in a safe environment.
                </p>
                <VideoPlayer src="videos/production-line.mp4" className="aspect-video rounded-lg" />
                <div className="grid grid-cols-2 gap-2">
                    <ZoomableImage src="images/portfolio/masterprojects/ligneproduction.webp" alt="Prod Line" className="aspect-square rounded-lg" />
                    <ZoomableImage src="images/portfolio/masterprojects/flacon.webp" alt="Glass Vial" className="aspect-square rounded-lg" />
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2 text-neutral-900">Mould Animation VR</h2>
                    <span className="text-sm text-neutral-500 uppercase tracking-wider">MMI • Mechanics Visualization</span>
                </div>
                <p className="text-neutral-600">
                    Visualizes industrial mould mechanics in VR. Interactively open/close moulds, view fluid flows, and perform cross-section cuts.
                    Replaces static technical drawings with immersive validation.
                </p>
                <VideoPlayer src="videos/moulding.mp4" className="aspect-video rounded-lg" />
                <div className="grid grid-cols-2 gap-2">
                    <ZoomableImage src="images/portfolio/masterprojects/moulebis.webp" alt="Mould" className="aspect-square rounded-lg" />
                    <ZoomableImage src="images/portfolio/masterprojects/moule.webp" alt="Fluid" className="aspect-square rounded-lg" />
                </div>
            </div>
        </div>
    </ProjectLayout>
);

export const ArduinoPage = () => (
    <ProjectLayout title="Connect your Arduino to Unity 3D" subtitle="Tutorial • 2025">
        <div className="col-span-full space-y-16 max-w-5xl mx-auto">

            {/* Introduction */}
            <div className="prose prose-neutral max-w-none text-lg text-neutral-600">
                <p>
                    Bridging Physical & Digital Worlds: An Interactive Demo with Arduino & Unity.
                    This guide covers the hardware setup, the Arduino C++ code, and the Unity C# implementation.
                </p>
            </div>

            {/* Hardware Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-[rgb(98,183,77)] pl-4">1. Hardware Setup</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-neutral-800 mb-2">Components</h4>
                            <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                                <li><strong>Arduino Uno:</strong> The 'brain' of the operation.</li>
                                <li><strong>Potentiometer:</strong> Input sensor (variable knob).</li>
                                <li><strong>LED:</strong> Output (simple light).</li>
                                <li><strong>220Ω Resistor:</strong> Protects the LED.</li>
                                <li><strong>Breadboard & Wires</strong></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-neutral-800 mb-2">Wiring Diagram</h4>
                            <div className="text-sm text-neutral-600 space-y-2">
                                <p><strong>Potentiometer:</strong><br />Outer Pins → 5V & GND<br />Middle Pin → A3</p>
                                <p><strong>LED:</strong><br />Long leg → Pin 5<br />Short leg → Resistor → GND</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <ZoomableImage src="images/tuto-arduino-unity/arduino2.webp" alt="Arduino Components" className="rounded-lg shadow-sm aspect-video" />
                    <ZoomableImage src="images/tuto-arduino-unity/schema.webp" alt="Wiring Schematic" className="rounded-lg shadow-sm bg-white p-2 border border-neutral-100 aspect-video" />
                </div>
            </section>

            {/* Arduino Code Section */}
            <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-8 border-l-4 border-[rgb(9,172,239)] pl-4">2. Arduino Code</h2>
                <div className="space-y-8">

                    {/* Block 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#8e8e8e' }}>// 1. Define the pins</span><br />
                            <span style={{ color: '#00979C' }}>const</span> <span style={{ color: '#00979C' }}>int</span> potPin = A3;<br />
                            <span style={{ color: '#00979C' }}>const</span> <span style={{ color: '#00979C' }}>int</span> ledPin = <span style={{ color: '#00979C' }}>5</span>;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(9,172,239)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p>We start by giving memorable names to the pins. Potentiometer on <strong>A3</strong>, LED on <strong>Pin 5</strong>.</p>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#8e8e8e' }}>// 2. Setup (runs once)</span><br />
                            <span style={{ color: '#00979C' }}>void</span> <span style={{ color: '#E34C00' }}>setup</span>() &#123;<br />
                            &nbsp;&nbsp;<span style={{ color: '#E34C00' }}>Serial.begin</span>(<span style={{ color: '#00979C' }}>9600</span>);<br />
                            &nbsp;&nbsp;<span style={{ color: '#E34C00' }}>pinMode</span>(ledPin, <span style={{ color: '#D34242' }}>OUTPUT</span>);<br />
                            &#125;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(9,172,239)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p><code>setup()</code> runs once. It opens the Serial Port (9600 baud) and configures the LED pin.</p>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#8e8e8e' }}>// 3. Loop (runs forever)</span><br />
                            <span style={{ color: '#00979C' }}>void</span> <span style={{ color: '#E34C00' }}>loop</span>() &#123;<br />
                            &nbsp;&nbsp;<span style={{ color: '#8e8e8e' }}>// --- SENDING DATA ---</span><br />
                            &nbsp;&nbsp;<span style={{ color: '#00979C' }}>int</span> potValue = <span style={{ color: '#E34C00' }}>analogRead</span>(potPin);<br />
                            &nbsp;&nbsp;<span style={{ color: '#E34C00' }}>Serial.println</span>(potValue);<br />
                            <br />
                            &nbsp;&nbsp;<span style={{ color: '#8e8e8e' }}>// --- RECEIVE DATA ---</span><br />
                            &nbsp;&nbsp;<span style={{ color: '#00979C' }}>if</span> (<span style={{ color: '#E34C00' }}>Serial.available</span>()) &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#00979C' }}>char</span> cmd = <span style={{ color: '#E34C00' }}>Serial.read</span>();<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#00979C' }}>if</span> (cmd == <span style={{ color: '#00979C' }}>'1'</span>) <span style={{ color: '#E34C00' }}>digitalWrite</span>(ledPin, <span style={{ color: '#D34242' }}>HIGH</span>);<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#00979C' }}>else</span> <span style={{ color: '#00979C' }}>if</span> (cmd == <span style={{ color: '#00979C' }}>'0'</span>) <span style={{ color: '#E34C00' }}>digitalWrite</span>(ledPin, <span style={{ color: '#D34242' }}>LOW</span>);<br />
                            &nbsp;&nbsp;&#125;<br />
                            &nbsp;&nbsp;<span style={{ color: '#E34C00' }}>delay</span>(<span style={{ color: '#00979C' }}>50</span>);<br />
                            &#125;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(241,100,32)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p>Reads the knob value and sends it to Unity. Then checks if Unity sent '1' or '0' to toggle the LED.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unity Setup Section */}
            <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-l-4 border-[rgb(154,58,137)] pl-4">3. Unity Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h4 className="font-bold text-neutral-800">Critical Setting</h4>
                        <p className="text-neutral-600 text-sm">
                            To access serial ports, you MUST change the API Compatibility Level.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-amber-800 text-sm">
                            <strong>File &gt; Build Profiles &gt; Player Settings</strong><br />
                            Other Settings &gt; Api Compatibility Level: <strong>.NET Framework</strong>
                        </div>
                        <h4 className="font-bold text-neutral-800 mt-6">Scene Components</h4>
                        <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                            <li>Ghost/Cube character to rotate.</li>
                            <li>Empty GameObject "ArduinoManager".</li>
                            <li>UI Button to toggle LED.</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <ZoomableImage src="images/tuto-arduino-unity/unity1.webp" alt="Player Settings" className="rounded-lg shadow-sm aspect-video" />
                        <ZoomableImage src="images/tuto-arduino-unity/unity2.webp" alt="Scene View" className="rounded-lg shadow-sm aspect-video" />
                    </div>
                </div>
            </section>

            {/* Unity Code Section */}
            <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-8 border-l-4 border-[rgb(154,58,137)] pl-4">4. Unity C# Script</h2>
                <div className="space-y-8">

                    {/* Variables */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#57a64a' }}>// 1. Define variables</span><br />
                            <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#569cd6' }}>string</span> portName = <span style={{ color: '#d69d85' }}>"COM3"</span>;<br />
                            <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#569cd6' }}>int</span> baudRate = <span style={{ color: '#b5cea8' }}>9600</span>;<br /><br />
                            <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#4ec9b0' }}>GameObject</span> objectToRotate;<br />
                            <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#4ec9b0' }}>Material</span> objectMaterial;<br /><br />
                            <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#4ec9b0' }}>SerialPort</span> stream;<br />
                            <span style={{ color: '#569cd6' }}>private</span> <span style={{ color: '#569cd6' }}>bool</span> ledState = <span style={{ color: '#569cd6' }}>false</span>;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(98,183,77)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p>Public variables allow configuration directly in the Inspector (Port Name is crucial!).</p>
                        </div>
                    </div>

                    {/* Start */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#569cd6' }}>void</span> <span style={{ color: '#dcdcaa' }}>Start</span>() &#123;<br />
                            &nbsp;&nbsp;stream = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#4ec9b0' }}>SerialPort</span>(portName, baudRate);<br />
                            &nbsp;&nbsp;stream.ReadTimeout = <span style={{ color: '#b5cea8' }}>50</span>;<br />
                            &nbsp;&nbsp;stream.<span style={{ color: '#dcdcaa' }}>Open</span>();<br />
                            &#125;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(9,172,239)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p>Initializes and opens the connection. <code>ReadTimeout</code> prevents freezing if data stops coming.</p>
                        </div>
                    </div>

                    {/* Update */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#569cd6' }}>void</span> <span style={{ color: '#dcdcaa' }}>Update</span>() &#123;<br />
                            &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>string</span> dataString = stream.<span style={{ color: '#dcdcaa' }}>ReadLine</span>();<br />
                            &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>if</span> (<span style={{ color: '#569cd6' }}>int</span>.<span style={{ color: '#dcdcaa' }}>TryParse</span>(dataString, <span style={{ color: '#569cd6' }}>out</span> <span style={{ color: '#569cd6' }}>int</span> potValue))<br />
                            &nbsp;&nbsp;&#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>float</span> rotY = (potValue/<span style={{ color: '#b5cea8' }}>1023f</span>) * <span style={{ color: '#b5cea8' }}>360f</span>;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;objectToRotate.transform.localRotation = <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ec9b0' }}>Quaternion</span>.<span style={{ color: '#dcdcaa' }}>Euler</span>(<span style={{ color: '#b5cea8' }}>0</span>, rotY, <span style={{ color: '#b5cea8' }}>0</span>);<br />
                            &nbsp;&nbsp;&#125;<br />
                            &#125;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(241,100,32)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p>Reads data every frame, converts it, and maps the 0-1023 value to 0-360 degrees rotation.</p>
                        </div>
                    </div>

                    {/* Button Function */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-3 bg-[#2a2d32] p-4 rounded-lg font-mono text-sm text-[#f0f0f0] overflow-x-auto border border-neutral-700 min-w-0">
                            <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#569cd6' }}>void</span> <span style={{ color: '#dcdcaa' }}>ToggleLEDAndColor</span>() &#123;<br />
                            &nbsp;&nbsp;ledState = !ledState;<br />
                            &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>string</span> command = ledState ? <span style={{ color: '#d69d85' }}>"1"</span> : <span style={{ color: '#d69d85' }}>"0"</span>;<br />
                            &nbsp;&nbsp;stream.<span style={{ color: '#dcdcaa' }}>Write</span>(command);<br />
                            <br />
                            &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>if</span> (ledState) objectMaterial.color = <span style={{ color: '#4ec9b0' }}>Color</span>.green;<br />
                            &nbsp;&nbsp;<span style={{ color: '#569cd6' }}>else</span> objectMaterial.color = <span style={{ color: '#4ec9b0' }}>Color</span>.white;<br />
                            &#125;
                        </div>
                        <div className="lg:col-span-2 bg-neutral-50 border-l-4 border-[rgb(241,100,32)] p-4 rounded-r-lg flex flex-col justify-center text-sm text-neutral-600 min-w-0">
                            <p>Called by UI Button. Sends command to Arduino and updates Unity material color for feedback.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Troubleshooting */}
            <section className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">Troubleshooting Checklist ✅</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="space-y-3 text-neutral-700">
                        <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">!</span> Is the Arduino plugged in?</li>
                        <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">!</span> Is the <strong>Port Name</strong> correct? (Check Device Manager/Arduino IDE).</li>
                        <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">!</span> Is <strong>Baud Rate</strong> 9600 in both scripts?</li>
                    </ul>
                    <ul className="space-y-3 text-neutral-700">
                        <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">!</span> Did you set <strong>Api Compatibility Level</strong> to .NET Framework?</li>
                        <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">!</span> Is the serial monitor closed in Arduino IDE? (Unity needs exclusive access).</li>
                    </ul>
                </div>
            </section>

        </div>
    </ProjectLayout>
);
