import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, CheckCircle, Star, Clock, Shield, Wrench, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import townsData from "@/data/service-areas.json";

type Town = {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  zipCodes: string[];
  utility: string;
  nearbyTowns: string[];
};

const towns = (townsData as { towns: Town[] }).towns;

// ─── Noindex slugs (distant / low-value pages) ────────────────────────────────
const NOINDEX_SLUGS = new Set([
  "irvington", "east-orange", "newark", "belleville",
  "elizabeth", "linden", "rahway", "roselle", "roselle-park", "hillside",
  "fort-lee", "teaneck", "englewood", "bergenfield",
  "bloomfield", "glen-ridge", "maplewood", "south-orange", "orange",
  "prospect-park", "haledon", "passaic", "paterson",
  "phillipsburg", "lopatcong", "stockton", "lambertville", "frenchtown", "milford",
]);

// ─── County-level fallback copy (interpolated with town name) ─────────────────
const COUNTY_CONTENT: Record<string, (name: string) => string> = {
  "Morris County": (name) =>
    `Air2Cool is based right in Wharton, Morris County — which means faster response times, lower travel costs, and technicians who know ${name} and the surrounding area. Most Morris County addresses get a technician on-site within 10–25 minutes of a call.`,
  "Sussex County": (name) =>
    `Sussex County's mountain communities face harsher winters than much of NJ, and we know it. ${name} residents can count on our technicians for cold-climate heating systems, high-efficiency furnaces, and boiler work suited to the colder temperatures and older housing stock common across Sussex County.`,
  "Warren County": (name) =>
    `Western NJ gets cold — and Air2Cool has been handling Warren County heating calls since 1998. Whether it's a furnace replacement in ${name} or an emergency heat call in the middle of winter, we deliver reliable HVAC service to western NJ with 24/7 availability.`,
  "Essex County": (name) =>
    `Air2Cool extends its North Jersey coverage into Essex County including ${name} for both residential and commercial HVAC needs. Our team handles AC repair, heating service, and system installations — with 24/7 emergency availability and licensed master technicians on every job.`,
  "Bergen County": (name) =>
    `Bergen County homeowners and businesses trust Air2Cool for AC installation, repair, and heating service across North Jersey. We cover ${name} and the surrounding Bergen County area for full system replacements, emergency repairs, and annual maintenance.`,
  "Union County": (name) =>
    `Air2Cool serves Union County including ${name} for HVAC repair and installation. Whether you need an AC system replaced or an emergency furnace repair, our licensed master technicians are available 24/7 throughout Union County.`,
  "Passaic County": (name) =>
    `Passaic County falls squarely in our North Jersey service area. From ${name} to West Milford, our licensed master technicians handle AC repairs, furnace installations, and emergency HVAC service for homeowners and businesses throughout the county.`,
  "Hunterdon County": (name) =>
    `Air2Cool serves Hunterdon County including ${name} for both residential and commercial HVAC needs. Older rural homes and newer developments alike benefit from our honest assessments, licensed technicians, and 0% financing on system replacements.`,
  "Somerset County": (name) =>
    `Somerset County homeowners in ${name} and the surrounding area trust Air2Cool for HVAC service that goes beyond a quick fix. We assess systems honestly, work on all makes and models, and offer 0% financing for full replacements.`,
};

// ─── Town-specific metadata overrides ─────────────────────────────────────────
const TOWN_META: Record<string, { title: string; description: string }> = {
  "victory-gardens": {
    title: "HVAC Service Victory Gardens NJ | AC Repair & Heating | Air2Cool",
    description:
      "AC repair and heating service in Victory Gardens NJ. Air2Cool is minutes from Victory Gardens — serving this Morris County borough since 1998. Call (201) 787-5657.",
  },
  netcong: {
    title: "HVAC Service Netcong NJ | AC Repair & Mini Splits | Air2Cool",
    description:
      "HVAC service in Netcong NJ — AC repair, heating, and mini splits for lake homes and village residences. Air2Cool serves Morris County. Call (201) 787-5657.",
  },
  "mount-arlington": {
    title: "HVAC Service Mount Arlington NJ | Lake Hopatcong HVAC | Air2Cool",
    description:
      "AC repair and heating service in Mount Arlington NJ on Lake Hopatcong. Air2Cool serves lake community homes in Morris County. Call (201) 787-5657.",
  },
  hopatcong: {
    title: "HVAC Service Hopatcong NJ | Lake Hopatcong AC & Heating | Air2Cool",
    description:
      "HVAC service in Hopatcong NJ including lake homes on Lake Hopatcong. Air2Cool handles AC repair, heating, and mini splits for Sussex County. Call (201) 787-5657.",
  },
  jefferson: {
    title: "HVAC Service Jefferson NJ | Oak Ridge & Lake Communities | Air2Cool",
    description:
      "HVAC service in Jefferson NJ including Oak Ridge and lake communities. Air2Cool serves Morris County for AC repair and heating. Call (201) 787-5657.",
  },
  stanhope: {
    title: "HVAC Service Stanhope NJ | Sussex County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Stanhope NJ. Air2Cool serves Sussex County including Stanhope Borough since 1998. Call (201) 787-5657.",
  },
  allamuchy: {
    title: "HVAC Service Allamuchy NJ | Warren County Heating & Cooling | Air2Cool",
    description:
      "HVAC service in Allamuchy Township NJ including Panther Valley. Air2Cool serves Warren County for AC and heating. Call (201) 787-5657.",
  },
  "parsippany-troy-hills": {
    title: "HVAC Service Parsippany NJ | Commercial & Residential HVAC | Air2Cool",
    description:
      "AC repair, heating, and commercial HVAC in Parsippany-Troy Hills NJ. Air2Cool serves Morris County businesses and homeowners since 1998. Call (201) 787-5657.",
  },
  madison: {
    title: "HVAC Service Madison NJ | Historic Homes & Modern Systems | Air2Cool",
    description:
      "HVAC service in Madison NJ for historic homes and modern builds. Air2Cool serves Morris County including the Rose City. Call (201) 787-5657.",
  },
  mendham: {
    title: "HVAC Service Mendham NJ | Morris County AC & Heating | Air2Cool",
    description:
      "HVAC service in Mendham NJ. Air2Cool serves Mendham Borough and Mendham Township in Morris County for AC, heating, and system replacements. Call (201) 787-5657.",
  },
  chester: {
    title: "HVAC Service Chester NJ | Morris County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Chester NJ. Air2Cool serves Chester Borough and Chester Township in Morris County since 1998. Call (201) 787-5657.",
  },
  "long-valley": {
    title: "HVAC Service Long Valley NJ | Washington Township HVAC | Air2Cool",
    description:
      "HVAC service in Long Valley NJ (Washington Township). Air2Cool serves Morris County including Long Valley for AC repair and oil/propane heating. Call (201) 787-5657.",
  },
  boonton: {
    title: "HVAC Service Boonton NJ | Morris County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Boonton NJ. Air2Cool serves this Morris County town including boiler systems and ductless mini splits. Call (201) 787-5657.",
  },
  "mountain-lakes": {
    title: "HVAC Service Mountain Lakes NJ | Morris County AC & Heating | Air2Cool",
    description:
      "HVAC service in Mountain Lakes NJ. Air2Cool serves this Morris County borough for AC repair, heating, and mini split installations. Call (201) 787-5657.",
  },
  montville: {
    title: "HVAC Service Montville NJ | Morris County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Montville NJ. Air2Cool serves Montville Township and Pine Brook in Morris County. Call (201) 787-5657.",
  },
  hanover: {
    title: "HVAC Service Hanover Township NJ | Whippany & Cedar Knolls | Air2Cool",
    description:
      "HVAC service in Hanover Township NJ including Whippany and Cedar Knolls. Air2Cool serves Morris County residential and commercial clients. Call (201) 787-5657.",
  },
  "east-hanover": {
    title: "HVAC Service East Hanover NJ | Morris County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in East Hanover NJ. Air2Cool serves Morris County including East Hanover Township. Call (201) 787-5657.",
  },
  "florham-park": {
    title: "HVAC Service Florham Park NJ | Morris County AC & Heating | Air2Cool",
    description:
      "HVAC service in Florham Park NJ. Air2Cool serves Morris County for AC repair, heating, and system installations. Call (201) 787-5657.",
  },
  "morris-plains": {
    title: "HVAC Service Morris Plains NJ | Morris County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Morris Plains NJ. Air2Cool serves Morris County including Morris Plains Borough. Call (201) 787-5657.",
  },
  "lincoln-park": {
    title: "HVAC Service Lincoln Park NJ | Morris County AC & Heating | Air2Cool",
    description:
      "HVAC service in Lincoln Park NJ. Air2Cool serves Morris County including Lincoln Park Borough for AC repair and heating. Call (201) 787-5657.",
  },
  riverdale: {
    title: "HVAC Service Riverdale NJ | Passaic County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Riverdale NJ. Air2Cool serves Passaic County including Riverdale Borough. Call (201) 787-5657.",
  },
  wayne: {
    title: "HVAC Service Wayne NJ | Passaic County AC Repair & Heating | Air2Cool",
    description:
      "AC repair and heating service in Wayne NJ. Air2Cool serves Passaic County including Wayne Township for residential and commercial HVAC. Call (201) 787-5657.",
  },
  chatham: {
    title: "HVAC Service Chatham NJ | Morris County AC & Heating | Air2Cool",
    description:
      "HVAC service in Chatham NJ. Air2Cool serves Chatham Borough and Chatham Township in Morris County. Call (201) 787-5657.",
  },
  harding: {
    title: "HVAC Service Harding Township NJ | Rural Morris County HVAC | Air2Cool",
    description:
      "HVAC service in Harding Township NJ including New Vernon. Air2Cool serves rural Morris County for AC, heating, and complex multi-zone systems. Call (201) 787-5657.",
  },
  hackensack: {
    title: "HVAC Service Hackensack NJ | Bergen County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Hackensack NJ. Air2Cool serves Bergen County including Hackensack for residential and commercial HVAC. Call (201) 787-5657.",
  },
  mahwah: {
    title: "HVAC Service Mahwah NJ | Bergen County AC & Heating | Air2Cool",
    description:
      "HVAC service in Mahwah NJ. Air2Cool serves Bergen County including Mahwah Township for AC repair and heating. Call (201) 787-5657.",
  },
  livingston: {
    title: "HVAC Service Livingston NJ | Essex County AC & Heating | Air2Cool",
    description:
      "AC repair and heating service in Livingston NJ. Air2Cool serves Essex County including Livingston Township. Call (201) 787-5657.",
  },
};

// ─── Town-specific unique content paragraphs ──────────────────────────────────
const TOWN_UNIQUE_CONTENT: Record<string, string> = {
  // Existing entries (kept for any non-static-page edge cases)
  morristown:
    "Morristown's mix of historic Victorians, colonial homes, and newer condo developments means we work on every type of heating and cooling system imaginable — from century-old steam boilers to brand new heat pump installs. The town's elevation and exposure to winter winds off the Watchung Ridge can push older furnaces hard. If your system is over 15 years old and struggling, we can assess it honestly and tell you whether repair or replacement makes more financial sense.",
  "parsippany-troy-hills":
    "Parsippany-Troy Hills has one of the highest concentrations of commercial and light-industrial properties in Morris County, and our team handles both sides — residential HVAC for the dense neighborhoods around Lake Hiawatha and Parsippany Hills, and commercial rooftop unit service for businesses along Route 46 and 202. If you're a property manager or business owner, ask about our commercial maintenance contracts.",
  madison:
    "Madison's older housing stock — particularly around the Hartley Dodge Memorial area and the Kings Road neighborhoods — includes a lot of homes still running on aging oil-to-gas conversion setups and original boiler systems. We're comfortable working on all of it, and we'll give you a straight answer on whether your existing system has life left or whether a new high-efficiency install makes more sense financially.",
  "rockaway-township":
    "Rockaway Borough and Rockaway Township sit right in our backyard — we're based in Wharton and have been serving the Rockaway area for over 26 years. We know the neighborhoods, the housing stock, and the kind of system problems that come up in homes near the Rockaway River corridor. When you call us for emergency service, you're getting a neighbor, not a dispatch center 50 miles away.",
  rockaway:
    "Rockaway Borough and Rockaway Township sit right in our backyard — we're based in Wharton and have been serving the Rockaway area for over 26 years. We know the neighborhoods, the housing stock, and the kind of system problems that come up in homes near the Rockaway River corridor. When you call us for emergency service, you're getting a neighbor, not a dispatch center 50 miles away.",
  denville:
    "Denville's lakefront communities — Indian Lake, Openaki, and others — can present unique HVAC challenges: seasonal homes converting to year-round use often need full system evaluations, and the humidity near the water means air quality and dehumidification are frequent topics. We've done dozens of mini split installs and full HVAC overhauls in the lake communities and know what works.",
  randolph:
    "Randolph's newer residential developments tend to have modern high-efficiency systems, but we also service plenty of older homes in the Ironia and Center Grove areas with original equipment that's overdue for an upgrade. We're just a few miles away in Wharton, so response times to Randolph are among our fastest in Morris County.",

  // New entries for towns without static pages
  "victory-gardens":
    "Victory Gardens is one of the closest communities to our Wharton base — just a few minutes up the road. This small Morris County borough has compact residential lots with older homes that often run original oil or gas systems that haven't been touched in years. Because we're already in the neighborhood constantly, we can dispatch to Victory Gardens faster than almost anywhere else we serve. If you've been putting off an AC service or your heating system is aging, getting ahead of it before summer or winter hits is exactly the kind of call we welcome.",
  netcong:
    "Netcong sits near the Morris-Sussex county line, close to Lake Musconetcong, and the housing mix here ranges from older village homes to lakeside properties that have been converted for year-round use. Seasonal-to-year-round conversions often need full system evaluations and sometimes a mini split or two to handle areas that weren't originally climate-controlled. We've done this kind of work throughout the lake region and know the specific challenges: high humidity near the water, limited attic space in older homes, and ductwork that wasn't designed for modern efficiency standards.",
  "mount-arlington":
    "Mount Arlington sits on Lake Hopatcong's south shore, and like many lake communities, the HVAC challenges here are unique. Homes near the water deal with higher humidity levels, which stresses cooling systems and can lead to mold growth in ductwork if airflow isn't properly managed. Many lake houses in Mount Arlington were originally seasonal builds that have since been converted to year-round use — these often need full system evaluations and sometimes supplemental mini splits to reach areas that weren't designed for year-round climate control. We've worked on dozens of lake homes in this area and know what to look for.",
  hopatcong:
    "Hopatcong is New Jersey's largest lake community, and the HVAC demands here are as varied as the homes. From older lakefront camps converted to year-round residences to newer construction up on the hillside, we service all of it. Lake homes near the water often run into high-humidity issues that push AC systems harder than expected, and the area's elevation means heating loads are higher than flatter towns at similar distances from our Wharton location. We've installed mini splits, replaced aging boilers, and serviced central systems throughout Hopatcong for over 25 years.",
  jefferson:
    "Jefferson is one of Morris County's larger townships, spanning communities like Oak Ridge, Weldon, and portions of the Lake Hopatcong shoreline. The range of housing here is significant — lakefront properties, rural homes on larger lots, and suburban neighborhoods all within the same general area. Oil heat is still common in the more rural sections of the township, and we handle conversions to high-efficiency gas as well as full heat pump installs for homeowners looking to electrify. For the lake communities, we know the specific challenges of high-humidity environments and seasonal-to-year-round conversions.",
  stanhope:
    "Stanhope is a small Sussex County borough tucked between the Musconetcong River and Lake Musconetcong. The older homes here — many dating to the early to mid 20th century — often have original boiler systems or older gas furnaces that are well past their efficient years. We do a lot of honest system assessments in places like Stanhope: sometimes a well-maintained older boiler has life left, sometimes it's more cost-effective to replace. We'll tell you which is which and give you the numbers without pressure. Emergency HVAC calls from Stanhope typically get a technician on-site in under 30 minutes from our Wharton base.",
  allamuchy:
    "Allamuchy Township covers a large rural area in Warren County, including Allamuchy Village and the Panther Valley planned community. The township's elevation and exposure mean winter heating loads can be substantial, and propane is common where natural gas hasn't reached the more rural sections. We handle propane-fueled systems as well as conversions, and for homes in Panther Valley, we know the layout and typical system configurations well. Whether it's an emergency heating call in January or a spring AC tune-up, we cover all of Allamuchy Township from our base in Wharton.",
  mendham:
    "Mendham Borough and Township together form one of Morris County's most established communities, with large custom homes on significant lots alongside older village-style homes near downtown. The housing stock here includes high-end construction with zoned HVAC systems and multi-zone mini splits, as well as older estate-style homes with more complex original systems — including oil boilers and steam heat that require real expertise to service properly. Our licensed master technicians are comfortable working on high-end equipment and will give you honest assessments, not sales pressure.",
  chester:
    "Chester has a charming historic downtown alongside a broader township with large residential lots and older farmhouses converted to single-family homes. The varied housing stock — from 19th-century structures to newer custom builds on Chester Township's rural roads — means we work on everything from high-efficiency heat pumps to cast iron boilers that have been running for 40 years. We assess every system honestly and give you the repair-vs-replace math directly. Chester is about 35 minutes from our Wharton location, and we service the area regularly throughout the year.",
  "long-valley":
    "Long Valley is the main village in Washington Township — a largely rural part of Morris County with a strong agricultural heritage and a mix of farmhouse conversions, newer suburban developments, and homes on private wells and septic. Oil and propane heating are common here, and we handle both — including conversion work for homeowners who want to move to high-efficiency gas or heat pump systems. The township's location means winter temps can run colder than eastern Morris County, so we size and design systems with that in mind rather than applying a one-size-fits-all approach.",
  boonton:
    "Boonton is a compact, historic Morris County town with a mix of Victorian-era rowhouses and multi-family buildings alongside newer residential streets. Older homes here frequently have original steam or hot water boiler systems — equipment we know well and can maintain, repair, or replace with the right modern equivalent. The town's age and density also means ductwork can be an afterthought or completely absent in many homes, making ductless mini splits a practical and increasingly popular solution for adding year-round comfort. We've done mini split installs throughout Boonton and the surrounding area.",
  "mountain-lakes":
    "Mountain Lakes is a distinctive Morris County community — a planned early-20th-century development built around a series of small lakes, with Arts and Crafts and Tudor-style homes that are beloved by their owners. Many of these homes retain their original architectural character inside and out, which means working around existing systems carefully, minimizing invasiveness, and sometimes choosing mini splits over traditional ductwork to preserve finished spaces and original ceilings. We respect the character of older homes and bring the same licensed expertise to Mountain Lakes that we bring anywhere in the county.",
  montville:
    "Montville Township spans from Pine Brook near Route 46 up through more established residential neighborhoods toward the Morris-Passaic county line. The area has a mix of newer suburban homes — many built in the 1980s and 90s — with original HVAC equipment that's now aging out and ready for replacement. We assess systems honestly and will tell you when a repair makes sense versus when the numbers favor a new high-efficiency installation. Montville is about 30 minutes from Wharton, and we have consistent business there through all four seasons.",
  hanover:
    "Hanover Township includes the communities of Whippany and Cedar Knolls — a mix of established residential neighborhoods and a significant commercial and light-industrial corridor along Route 10. We handle both sides: residential HVAC for homeowners throughout the township and commercial systems for the many businesses along Route 10. The residential areas include homes from the 1950s through recent builds, and we're comfortable working on systems of any age. For commercial clients, we offer maintenance contracts and can handle rooftop unit service and multi-zone commercial setups.",
  "east-hanover":
    "East Hanover is a largely residential Morris County township with primarily suburban housing from the postwar era through the 1980s. Many of these homes have original forced-air systems that have been maintained over the years but are approaching the end of their effective lifespan — particularly those running on equipment 20 or more years old. We do a significant number of full system replacements in communities like East Hanover: new high-efficiency gas furnaces with modern central AC, and sometimes heat pump systems for homeowners interested in electrification. We'll walk you through the math on any option and let you decide.",
  "florham-park":
    "Florham Park has a well-established residential community with a range of home styles, from mid-century colonials to larger newer builds. Many of the older homes have systems that have been well maintained but are ready for a modern upgrade — particularly on the cooling side, where an aging R-22 refrigerant system can be replaced with a new high-efficiency unit that delivers better comfort at lower operating costs. We give Florham Park homeowners the same honest, licensed service we give everywhere: no scare tactics, just clear information and fair pricing.",
  "morris-plains":
    "Morris Plains is a small but well-established Morris County borough with older residential streets and commercial development along the Route 10 corridor. The borough's proximity to Morristown means we're often in the area, and turnaround times for service calls here are quick — typically under 30 minutes from our Wharton base. Older homes in the residential areas frequently have aging forced-air systems, and we handle everything from diagnostic calls to full system replacements with the same licensed, no-pressure approach we apply everywhere in the county.",
  "lincoln-park":
    "Lincoln Park is a Morris County borough situated along the Pompton River, with a compact residential core and commercial areas along Route 202. The area's older housing stock includes many homes with systems dating to the 1980s or earlier that are prime candidates for efficiency upgrades. The borough's location near the Pompton River means some homes deal with humidity-related HVAC issues more than similar homes further inland — we account for that in system sizing and in our maintenance recommendations. Mini splits with built-in dehumidification have been a popular upgrade in the area.",
  riverdale:
    "Riverdale is a small Passaic County borough bordered by Pompton Lakes and Wanaque, with predominantly residential character and a commercial strip along Hamburg Turnpike. The homes here are a mix of mid-century construction and some newer builds, with systems of varying ages and conditions. We're comfortable working on any age of equipment — from a 1970s forced-air system due for a modern upgrade to a recently installed unit that needs a first-season tune-up. For Riverdale residents, response times from our Wharton location are typically 30–45 minutes.",
  wayne:
    "Wayne Township is one of Passaic County's largest and most densely populated communities, with housing stock ranging from postwar Cape Cods to large newer colonials. The area's high density means heat islands can push cooling loads higher than you'd expect, and older slab-on-grade homes often struggle with ductwork that wasn't designed for modern AC. We do a significant number of duct assessments and ductless mini split installs in Wayne for exactly this reason. For both residential and commercial clients, Wayne generates consistent year-round work for our team — we know the area well.",
  chatham:
    "Chatham Borough and Chatham Township together form one of Morris County's most sought-after communities. The housing here ranges from 1920s-era homes near the train station to larger mid-century and newer construction in the township. Older homes in downtown Chatham often have limited attic and basement space, making ductless mini splits a popular solution for adding cooling to areas that can't accommodate traditional ductwork. For newer and larger homes, zoned systems are common, and we service multi-zone setups with the same expertise we bring to any system type. We're about 35 minutes from Chatham and service the area regularly.",
  harding:
    "Harding Township is one of Morris County's most rural and sparsely populated communities — a township of large estates, horse properties, and historic homes in the New Vernon area. The HVAC work here reflects that character: high-end systems on properties with significant square footage, multiple zones, and sometimes geothermal or radiant systems that require specialized knowledge. Our licensed master technicians are comfortable with complex multi-zone setups and bring the attention to detail that large custom-system work requires. We serve Harding Township regularly and are about 40 minutes from New Vernon.",
  hackensack:
    "Hackensack is Bergen County's county seat and a dense urban environment with a mix of multi-family residential buildings, commercial corridors, and older single-family neighborhoods. The city's concentration of multi-family buildings means we handle a lot of building-wide system assessments and unit-by-unit replacements for property managers and building owners. For residential customers, the older housing stock in Hackensack's neighborhoods often has aging forced-air systems or original boilers that are well past their service life. We handle both commercial and residential work in Hackensack and can typically dispatch within 40–55 minutes of a call.",
  mahwah:
    "Mahwah Township sits at Bergen County's northwestern edge, bordering New York State along the Ramapo Mountains. The elevation here is higher than most of Bergen County, and winter temperatures reflect it — heating loads run higher and systems work harder from November through March. Many of Mahwah's newer residential developments have modern systems, but the older sections of town still have equipment installed in the 1980s and 90s that's overdue for an efficiency upgrade. We serve Mahwah regularly and typically reach the township within 45–55 minutes of a call from our Wharton location.",
  livingston:
    "Livingston is one of Essex County's most established suburbs, with predominantly larger single-family homes that often feature zoned HVAC systems, high-end brand equipment, and complex multi-story configurations. We see calls in Livingston from homeowners who've had a big-company experience they weren't happy with — impersonal service, high pressure on replacement, or a diagnosis that didn't hold up. We bring a different approach: licensed master technicians, honest assessments, and no pressure. We've built a strong referral base in Essex County and service Livingston consistently throughout the year.",
};

// ─── Town-specific FAQ content ─────────────────────────────────────────────────
type FAQ = { q: string; a: string };
const TOWN_FAQ_CONTENT: Record<string, FAQ[]> = {
  "victory-gardens": [
    {
      q: "How quickly can Air2Cool reach Victory Gardens NJ?",
      a: "Victory Gardens is just minutes from our Wharton base — we're one of the closest HVAC contractors to this borough. Emergency calls typically get a technician on-site in under 15 minutes.",
    },
    {
      q: "Do you service oil heating systems in Victory Gardens?",
      a: "Yes. Many homes in Victory Gardens still run on oil heat, and our technicians are experienced with oil furnaces and boilers — including diagnostics, tune-ups, and full replacements or conversions to gas.",
    },
    {
      q: "What HVAC services does Air2Cool offer in Victory Gardens NJ?",
      a: "We offer the full range: AC repair and installation, furnace and boiler service, ductless mini splits, air quality systems, and 24/7 emergency HVAC. All work is performed by licensed master technicians.",
    },
  ],
  netcong: [
    {
      q: "Do you serve Netcong NJ for year-round HVAC needs?",
      a: "Yes — we serve Netcong Borough for both heating and cooling, year-round. This includes emergency calls, annual maintenance, and full system replacements.",
    },
    {
      q: "Can you install a mini split in an older Netcong home?",
      a: "Absolutely. Many older homes in Netcong lack ductwork suitable for central AC, and ductless mini splits are an ideal solution. We handle everything from the load calculation to the final installation.",
    },
    {
      q: "How far is Air2Cool from Netcong NJ?",
      a: "We're based in Wharton — Netcong is approximately 10–15 minutes away. Most service calls get a technician on-site within 30 minutes of initial contact.",
    },
  ],
  "mount-arlington": [
    {
      q: "Do you service lake homes in Mount Arlington NJ?",
      a: "Yes. Lake home HVAC is a specialty of ours — we deal regularly with humidity-related issues, seasonal-to-year-round conversions, and mini split installs in homes near Lake Hopatcong.",
    },
    {
      q: "Can you install a mini split in a Lake Hopatcong house in Mount Arlington?",
      a: "Absolutely. Ductless mini splits are one of the best solutions for lake homes, and we've installed them throughout the Mount Arlington and Lake Hopatcong area. We handle sizing, installation, and commissioning.",
    },
    {
      q: "How quickly can Air2Cool reach Mount Arlington NJ?",
      a: "Mount Arlington is about 15–20 minutes from our Wharton base. Emergency service is available 24/7 and most calls get a response within that window.",
    },
  ],
  hopatcong: [
    {
      q: "Do you service lake homes in Hopatcong NJ?",
      a: "Yes — lake home HVAC is something we do constantly throughout the Lake Hopatcong area. High humidity, seasonal-to-year-round conversions, and older systems are all par for the course, and we handle all of it.",
    },
    {
      q: "Can Air2Cool install a ductless mini split in Hopatcong?",
      a: "Yes. Many homes in Hopatcong's lake communities either lack ductwork or have ductwork that wasn't designed for modern cooling demands. Ductless mini splits are an ideal upgrade, and we've done many installs in the area.",
    },
    {
      q: "How far is Air2Cool from Hopatcong NJ?",
      a: "We're based in Wharton — Hopatcong is approximately 20–25 minutes away depending on your location in the borough. Emergency calls are available 24/7.",
    },
  ],
  jefferson: [
    {
      q: "Do you serve all communities in Jefferson NJ?",
      a: "Yes — we service all areas within Jefferson including Oak Ridge, Weldon, and the Lake Hopatcong shoreline communities. Both rural properties and suburban neighborhoods are well within our service area.",
    },
    {
      q: "Can Air2Cool replace an oil heating system in Jefferson NJ?",
      a: "Yes. Oil heat is still common in Jefferson's more rural sections. We handle oil system maintenance and repairs, and also perform conversions to high-efficiency gas or heat pump systems for homeowners looking to upgrade.",
    },
    {
      q: "How far is Air2Cool from Jefferson NJ?",
      a: "We're based in Wharton — most of Jefferson is 20–30 minutes away. We cover the township regularly for both routine service and emergency calls.",
    },
  ],
  stanhope: [
    {
      q: "Do you service old boiler systems in Stanhope NJ?",
      a: "Yes. Older boiler systems — both steam and hot water — are common in Stanhope's older housing stock, and our technicians are experienced with them. We'll give you an honest assessment of whether repair or replacement makes more sense.",
    },
    {
      q: "How far is Air2Cool from Stanhope NJ?",
      a: "Stanhope is about 15–20 minutes from our Wharton base. Emergency calls typically get a technician on-site in 25–35 minutes.",
    },
    {
      q: "Do you offer emergency HVAC service in Stanhope NJ?",
      a: "Yes — we're available 24/7 for emergency heating and cooling calls in Stanhope. A real person picks up the phone, not an answering machine.",
    },
  ],
  allamuchy: [
    {
      q: "Do you service propane heating systems in Allamuchy NJ?",
      a: "Yes. Propane is common in Allamuchy's rural sections where natural gas service isn't available. We service propane furnaces, boilers, and also handle conversions for homeowners who want to switch fuel sources.",
    },
    {
      q: "Do you cover Panther Valley in Allamuchy Township?",
      a: "Yes — we service Panther Valley and all areas within Allamuchy Township. We're familiar with the planned community's layout and the typical HVAC configurations found there.",
    },
    {
      q: "How far is Air2Cool from Allamuchy NJ?",
      a: "Allamuchy is approximately 25–35 minutes from our Wharton base. We cover Warren County including Allamuchy Township for all HVAC services.",
    },
  ],
  "parsippany-troy-hills": [
    {
      q: "Do you handle commercial HVAC in Parsippany-Troy Hills NJ?",
      a: "Yes. Parsippany has a high concentration of commercial and light-industrial properties, and we service commercial rooftop units, multi-zone systems, and building HVAC for businesses along Route 46 and 202.",
    },
    {
      q: "How quickly can Air2Cool respond in Parsippany NJ?",
      a: "Parsippany is about 20–30 minutes from our Wharton base. For emergency calls, we're available 24/7 and prioritize same-day dispatch.",
    },
    {
      q: "What HVAC services do you offer in Parsippany-Troy Hills?",
      a: "We offer a full range: AC repair and installation, heating service and replacement, commercial HVAC, ductless mini splits, air quality systems, preventative maintenance contracts, and 24/7 emergency service.",
    },
  ],
  madison: [
    {
      q: "Do you service steam boiler systems in Madison NJ?",
      a: "Yes. Many of Madison's older homes still run steam boiler systems, and our technicians know them well. We can diagnose, repair, maintain, or replace a steam system — and help you weigh the conversion options if you're considering switching.",
    },
    {
      q: "How far is Air2Cool from Madison NJ?",
      a: "Madison is about 30–35 minutes from our Wharton base. We cover Morris County including Madison regularly for both routine service calls and emergency HVAC.",
    },
    {
      q: "What HVAC systems are most common in Madison homes?",
      a: "Madison has an older housing stock, so we see a lot of steam and hot water boilers in older homes, along with forced-air gas systems in mid-century and newer builds. Some older oil-to-gas conversion setups are also common.",
    },
  ],
  mendham: [
    {
      q: "Do you service high-end HVAC systems in Mendham NJ?",
      a: "Yes. Many Mendham homes have multi-zone systems, high-end equipment brands, and complex configurations. Our licensed master technicians handle these systems with the attention to detail they require.",
    },
    {
      q: "How far is Air2Cool from Mendham NJ?",
      a: "Mendham is approximately 30–35 minutes from our Wharton base. We cover Mendham Borough and Mendham Township regularly for both service calls and full system replacements.",
    },
    {
      q: "Do you handle zoned HVAC systems in Morris County homes?",
      a: "Yes — multi-zone systems are something we work on regularly across Morris County. We can diagnose zone control issues, service damper systems, and work on any brand of zone control equipment.",
    },
  ],
  chester: [
    {
      q: "Do you service old heating systems in Chester NJ?",
      a: "Yes. Chester has a mix of very old homes with original cast iron boilers and newer custom builds with modern systems, and we service all of it. We assess every system honestly and give you repair-vs-replace data without pressure.",
    },
    {
      q: "How far is Air2Cool from Chester NJ?",
      a: "Chester is approximately 30–35 minutes from our Wharton base. We cover Chester Borough and Chester Township for routine service, emergency calls, and full system replacements.",
    },
    {
      q: "Do you offer HVAC service in both Chester Borough and Chester Township?",
      a: "Yes — we service all of Chester, including both the borough and the broader township. Rural properties on larger lots are well within our service area.",
    },
  ],
  "long-valley": [
    {
      q: "Do you service oil or propane heating in Long Valley NJ?",
      a: "Yes. Oil and propane heating are common in Long Valley and Washington Township's more rural areas. We service these systems and also handle conversions to high-efficiency gas or heat pumps for homeowners ready to upgrade.",
    },
    {
      q: "How far is Air2Cool from Long Valley NJ?",
      a: "Long Valley is approximately 25–35 minutes from our Wharton base. We cover Washington Township including Long Valley for all HVAC services.",
    },
    {
      q: "Do you cover all of Washington Township for HVAC service?",
      a: "Yes — we service all communities within Washington Township, including Long Valley, Port Murray, and the rural areas throughout the township.",
    },
  ],
  boonton: [
    {
      q: "Do you service old boiler systems in Boonton NJ?",
      a: "Yes. Boonton has significant older housing stock with steam and hot water boilers, and our technicians know these systems well. We can maintain, repair, or replace — and give you honest guidance on which makes more sense.",
    },
    {
      q: "Can Air2Cool install ductless mini splits in a Boonton home?",
      a: "Absolutely. Many Boonton homes don't have ductwork suited for central AC, and ductless mini splits are an excellent solution. We handle sizing, permits where required, and full installation.",
    },
    {
      q: "How far is Air2Cool from Boonton NJ?",
      a: "Boonton is approximately 20–25 minutes from our Wharton base. Emergency calls are available 24/7 and we prioritize same-day dispatch whenever possible.",
    },
  ],
  "mountain-lakes": [
    {
      q: "Do you service older HVAC systems in Mountain Lakes NJ?",
      a: "Yes. Mountain Lakes has many homes with older, high-quality original systems that benefit from expert maintenance. We assess honestly and help you get the most life out of a well-built system — or replace it when the time comes.",
    },
    {
      q: "Can you install a mini split without disrupting a historic home in Mountain Lakes?",
      a: "Yes — we're experienced with minimally invasive mini split installs and work carefully in homes where preserving character is a priority. We plan the line set routing to minimize visible impact.",
    },
    {
      q: "How far is Air2Cool from Mountain Lakes NJ?",
      a: "Mountain Lakes is approximately 20–25 minutes from our Wharton base. We cover Morris County including Mountain Lakes for all HVAC services.",
    },
  ],
  montville: [
    {
      q: "Do you offer same-day HVAC service in Montville NJ?",
      a: "Yes — same-day service is our standard for urgent calls. Montville is about 30 minutes from Wharton, and we're available 24/7 for emergency heating and cooling situations.",
    },
    {
      q: "Can Air2Cool replace an aging furnace in Montville Township?",
      a: "Yes. Many Montville homes have 1980s or 90s-era systems ready for replacement. We provide honest estimates with no sales pressure and offer 0% financing up to $25,000 on approved applications.",
    },
    {
      q: "How far is Air2Cool from Montville NJ?",
      a: "Montville Township is approximately 25–35 minutes from our Wharton base depending on your specific location. We cover Montville including Pine Brook throughout the year.",
    },
  ],
  hanover: [
    {
      q: "Do you service commercial HVAC in Hanover Township NJ?",
      a: "Yes. Hanover Township has a significant commercial corridor along Route 10, and we handle rooftop units, multi-zone commercial systems, and maintenance contracts for businesses in Whippany and Cedar Knolls.",
    },
    {
      q: "How far is Air2Cool from Whippany NJ?",
      a: "Whippany is approximately 20–25 minutes from our Wharton base. Most service calls in Hanover Township can be dispatched same-day.",
    },
    {
      q: "Can Air2Cool handle an emergency HVAC call in Hanover Township?",
      a: "Yes — we're available 24/7 for emergency heating and cooling service in Hanover Township. Emergency calls are answered by a real person, not an answering service.",
    },
  ],
  "east-hanover": [
    {
      q: "Do you replace old HVAC systems in East Hanover NJ?",
      a: "Yes. Many East Hanover homes have postwar-era systems ready for replacement. We assess honestly, explain your options clearly, and offer 0% financing up to $25,000 on new system installations.",
    },
    {
      q: "How far is Air2Cool from East Hanover NJ?",
      a: "East Hanover is approximately 25–30 minutes from our Wharton base. We cover Morris County including East Hanover Township for all HVAC services.",
    },
    {
      q: "Do you offer 0% financing for HVAC in East Hanover NJ?",
      a: "Yes — we offer 0% financing up to $25,000 on qualified system installations. Same-day approval is available on most applications, so you don't have to wait to get your system replaced.",
    },
  ],
  "florham-park": [
    {
      q: "Do you service Florham Park NJ for HVAC repairs?",
      a: "Yes — we cover Florham Park for all HVAC services: AC repair, heating service, system replacements, mini splits, and 24/7 emergency calls.",
    },
    {
      q: "How far is Air2Cool from Florham Park NJ?",
      a: "Florham Park is approximately 30–35 minutes from our Wharton base. We cover Morris County including Florham Park throughout the year.",
    },
    {
      q: "Can Air2Cool replace an old AC system in Florham Park?",
      a: "Yes. We handle full system replacements including removing the old equipment, installing new high-efficiency units, and ensuring proper sizing via Manual J load calculations. We also offer 0% financing.",
    },
  ],
  "morris-plains": [
    {
      q: "How quickly can Air2Cool respond in Morris Plains NJ?",
      a: "Morris Plains is about 20–25 minutes from our Wharton base, and we're in the area regularly due to nearby Morristown. Most emergency calls get a technician on-site within 30–40 minutes.",
    },
    {
      q: "Do you service commercial HVAC on Route 10 in Morris Plains?",
      a: "Yes — we handle commercial HVAC for businesses along Route 10 in Morris Plains Borough, including rooftop units, multi-zone systems, and ongoing maintenance contracts.",
    },
    {
      q: "What HVAC services are available in Morris Plains NJ?",
      a: "We offer the full range: AC repair and installation, heating service and replacement, commercial HVAC, ductless mini splits, air quality systems, and 24/7 emergency service — all by licensed master technicians.",
    },
  ],
  "lincoln-park": [
    {
      q: "Do you service Lincoln Park NJ for HVAC?",
      a: "Yes — we cover Lincoln Park Borough for AC repair, heating service, mini split installations, and emergency HVAC. All work is performed by licensed master technicians.",
    },
    {
      q: "Can Air2Cool handle humidity-related HVAC issues in Lincoln Park?",
      a: "Yes. Homes near the Pompton River can struggle with elevated indoor humidity, which stresses AC systems and affects air quality. We assess ventilation, dehumidification options, and system sizing to address the root cause.",
    },
    {
      q: "How far is Air2Cool from Lincoln Park NJ?",
      a: "Lincoln Park is approximately 25–35 minutes from our Wharton base. We cover Morris County including Lincoln Park throughout the year.",
    },
  ],
  riverdale: [
    {
      q: "Do you service Riverdale NJ for HVAC?",
      a: "Yes — we cover Riverdale Borough for AC repair, heating service, system replacements, and 24/7 emergency calls. All work done by licensed NJ master technicians.",
    },
    {
      q: "How quickly can Air2Cool respond in Riverdale NJ?",
      a: "Riverdale is approximately 30–45 minutes from our Wharton base. For emergencies, we're available 24/7 and prioritize same-day response.",
    },
    {
      q: "What HVAC services do you offer in Riverdale NJ?",
      a: "We offer AC repair and installation, furnace and boiler service, ductless mini splits, air quality systems, preventative maintenance, and 24/7 emergency service throughout Riverdale and Passaic County.",
    },
  ],
  wayne: [
    {
      q: "Do you service Wayne NJ for AC repair and heating?",
      a: "Yes — Wayne Township is well within our service area. We handle AC repair, heating service, full system replacements, and commercial HVAC throughout Wayne.",
    },
    {
      q: "Can Air2Cool install ductless mini splits in a Wayne NJ home?",
      a: "Yes. Ductless mini splits are a practical solution for many Wayne homes — especially older slab-on-grade houses where traditional ductwork isn't practical. We size and install mini split systems throughout Passaic County.",
    },
    {
      q: "How far is Air2Cool from Wayne Township NJ?",
      a: "Wayne is approximately 35–45 minutes from our Wharton base. We cover Passaic County including Wayne for all HVAC services with 24/7 emergency availability.",
    },
  ],
  chatham: [
    {
      q: "Do you install mini splits in older Chatham NJ homes?",
      a: "Yes. Many downtown Chatham homes have limited attic space and no suitable ductwork for central AC, making mini splits the ideal solution. We handle the full process from sizing to installation.",
    },
    {
      q: "How far is Air2Cool from Chatham NJ?",
      a: "Chatham is approximately 30–40 minutes from our Wharton base. We cover Morris County including Chatham Borough and Township regularly.",
    },
    {
      q: "Do you service both Chatham Borough and Chatham Township?",
      a: "Yes — we cover all of Chatham, including both the Borough and the broader Township. From the neighborhoods near the train station to larger homes in the Township, we handle all HVAC work.",
    },
  ],
  harding: [
    {
      q: "Do you service estate HVAC systems in Harding Township NJ?",
      a: "Yes. Harding Township has large estates with complex multi-zone systems, high-end equipment, and sometimes radiant or geothermal installations. Our licensed master technicians are experienced with these setups.",
    },
    {
      q: "Can Air2Cool work on geothermal or radiant systems in Harding NJ?",
      a: "Yes — we have experience with geothermal heat pump systems and radiant heating. We assess and service these systems along with conventional HVAC equipment.",
    },
    {
      q: "How far is Air2Cool from New Vernon in Harding Township?",
      a: "New Vernon is approximately 35–45 minutes from our Wharton base. We serve Harding Township including New Vernon for all HVAC services and system replacements.",
    },
  ],
  hackensack: [
    {
      q: "Do you handle commercial HVAC in Hackensack NJ?",
      a: "Yes. Hackensack has a high concentration of commercial buildings and multi-family properties, and we handle building-wide HVAC assessments, unit replacements, and maintenance contracts for property owners and managers.",
    },
    {
      q: "How far is Air2Cool from Hackensack NJ?",
      a: "Hackensack is approximately 40–55 minutes from our Wharton base. We cover Bergen County including Hackensack for residential and commercial HVAC with 24/7 emergency availability.",
    },
    {
      q: "Do you service multi-family buildings in Hackensack NJ?",
      a: "Yes — multi-family building HVAC is a significant part of our commercial work. We handle unit-by-unit replacements, common area systems, and can set up ongoing maintenance contracts for building owners.",
    },
  ],
  mahwah: [
    {
      q: "Do you service Mahwah NJ for HVAC?",
      a: "Yes — we cover Mahwah Township for AC repair, heating service, system replacements, and 24/7 emergency calls. All work is performed by licensed NJ master HVAC technicians.",
    },
    {
      q: "Can Air2Cool handle the heating demands of high-elevation homes in Mahwah?",
      a: "Yes. Mahwah's higher elevation means greater heating loads than lower Bergen County communities. We size systems properly using Manual J load calculations rather than guessing — which means better comfort and lower operating costs.",
    },
    {
      q: "How far is Air2Cool from Mahwah NJ?",
      a: "Mahwah is approximately 45–55 minutes from our Wharton base. We cover Bergen County including Mahwah for all HVAC services with 24/7 emergency availability.",
    },
  ],
  livingston: [
    {
      q: "Do you service Livingston NJ for HVAC repairs?",
      a: "Yes — we cover Livingston Township for AC repair, heating service, system replacements, and 24/7 emergency calls. All work is performed by licensed NJ master technicians.",
    },
    {
      q: "How far is Air2Cool from Livingston NJ?",
      a: "Livingston is approximately 35–45 minutes from our Wharton base. We cover Essex County including Livingston for all HVAC services and system replacements.",
    },
    {
      q: "Can Air2Cool handle zoned HVAC systems in Livingston?",
      a: "Yes — multi-zone systems are common in Livingston's larger homes, and we service zone controllers, dampers, thermostats, and all associated equipment across all major brands.",
    },
  ],
};

// ─── Services grid ─────────────────────────────────────────────────────────────
const SERVICES = [
  { name: "AC Repair", href: "/services/ac-repair", desc: "Fast diagnosis for all makes and models." },
  { name: "AC Installation", href: "/services/cooling-installation", desc: "Energy-efficient systems with 0% financing." },
  { name: "Heating Repair", href: "/services/heating-repair", desc: "Furnace, boiler & heat pump repair." },
  { name: "Heating Installation", href: "/services/heating-installation", desc: "New furnace or heat pump with warranty." },
  { name: "Air Filtration", href: "/services/air-quality", desc: "Whole-home air purifiers & filters." },
  { name: "Humidifiers", href: "/services/humidifier", desc: "Whole-home humidity control systems." },
  { name: "Commercial Refrigeration", href: "/services/commercial-refrigeration", desc: "Coolers & freezers for businesses." },
  { name: "Preventative Maintenance", href: "/services/preventative-maintenance", desc: "Annual tune-ups before breakdowns happen." },
];

export async function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town: slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) return {};

  const noindex = NOINDEX_SLUGS.has(town.slug);
  const townMeta = TOWN_META[town.slug];

  if (townMeta) {
    return {
      title: townMeta.title,
      description: townMeta.description,
      alternates: {
        canonical: `https://www.air2cool.com/service-areas/${town.slug}`,
      },
      ...(noindex && { robots: "noindex, nofollow" }),
    };
  }

  const nearby = town.nearbyTowns.slice(0, 2).join(" and ");
  return {
    title: `${town.name} HVAC Repair & Installation | Air2Cool Heating & Cooling`,
    description: `Air2Cool provides AC repair, furnace installation, heating service & 24/7 emergency HVAC in ${town.name}, NJ — near ${nearby}. Family-owned since 1998. 250+ 5-star Google reviews. Call (201) 787-5657.`,
    alternates: {
      canonical: `https://www.air2cool.com/service-areas/${town.slug}`,
    },
    ...(noindex && { robots: "noindex, nofollow" }),
  };
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town: slug } = await params;
  const town = towns.find((t) => t.slug === slug);
  if (!town) notFound();

  const faqs = TOWN_FAQ_CONTENT[town.slug] ?? [];

  const schemaGraph: object[] = [
    {
      "@type": "HVACBusiness",
      "@id": `https://www.air2cool.com/service-areas/${town.slug}#business`,
      "name": "Air2Cool Heating & Cooling",
      "url": "https://www.air2cool.com",
      "telephone": "+1-201-787-5657",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wharton",
        "addressRegion": "NJ",
        "postalCode": "07885",
        "addressCountry": "US",
      },
      "areaServed": {
        "@type": "City",
        "name": town.name,
        "addressRegion": "NJ",
        "addressCountry": "US",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "250",
      },
    },
    {
      "@type": "Service",
      "name": `HVAC Service in ${town.name}, NJ`,
      "provider": {
        "@type": "HVACBusiness",
        "name": "Air2Cool Heating & Cooling",
      },
      "areaServed": { "@type": "City", "name": town.name, "addressRegion": "NJ" },
      "serviceType": "HVAC Repair, Installation, and Maintenance",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" },
    },
  ];

  if (faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": schemaGraph,
  };

  return (
    <>
      <Script
        id={`schema-${town.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/70 border border-blue-400/30 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5">
              <MapPin className="w-3.5 h-3.5" />
              {town.county} · {town.zipCodes.join(", ")}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              HVAC Service in {town.name}, NJ
            </h1>
            <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Air2Cool has served {town.name} and {town.county} since 1998 — AC repair,
              furnace installation, heating service, and emergency HVAC whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12017875657"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-bold text-lg transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-7 py-3.5 rounded-full font-semibold text-lg transition-all text-center"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-5 bg-blue-50 border-y border-blue-100">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5.0 ★", label: "Google Rating" },
              { value: "250+", label: "5-Star Reviews" },
              { value: "Since 1998", label: "Family Owned" },
              { value: "24/7", label: "Emergency Service" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg md:text-2xl font-extrabold text-blue-900">{s.value}</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-3">
              HVAC Services in {town.name}
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm md:text-base">
              All major brands serviced. Licensed master technicians, fully insured.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="group border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">
                        {s.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local Copy */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              Serving {town.name} and Nearby {town.county} Communities
            </h2>
            <div className="text-sm md:text-base text-gray-700 space-y-4 leading-relaxed">
              <p>
                Air2Cool Heating & Cooling has been the trusted HVAC contractor for {town.name}{" "}
                residents since 1998. Based right in Wharton, NJ, our technicians know {town.county}{" "}
                inside and out — from older homes that need careful diagnostics to newer builds looking
                for energy-efficient upgrades. Whether your {town.utility} bill has you watching the
                thermostat or your furnace gave out on a cold night, we pick up the phone 24/7.
              </p>
              <p>
                We also cover {town.nearbyTowns.join(", ")} and the surrounding area, so if you have
                neighbors or family looking for HVAC help, we&apos;re already in the area.
              </p>
              {TOWN_UNIQUE_CONTENT[town.slug] && (
                <p>{TOWN_UNIQUE_CONTENT[town.slug]}</p>
              )}
              {!TOWN_UNIQUE_CONTENT[town.slug] && COUNTY_CONTENT[town.county] && (
                <p>{COUNTY_CONTENT[town.county](town.name)}</p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {town.nearbyTowns.map((name) => {
                const t = towns.find((x) => x.name === name);
                return t ? (
                  <Link
                    key={name}
                    href={`/service-areas/${t.slug}`}
                    className="text-xs bg-white border border-blue-200 px-3 py-1.5 rounded-full text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    {name}
                  </Link>
                ) : (
                  <span
                    key={name}
                    className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-600"
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Air2Cool */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why {town.name} Residents Choose Air2Cool
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-600" />,
                  title: "Licensed Master Techs",
                  body: "Every job done by NJ-licensed master HVAC technicians. No subcontractors, no shortcuts.",
                },
                {
                  icon: <Star className="w-6 h-6 text-yellow-500" />,
                  title: "250+ Five-Star Reviews",
                  body: "Real customers across North Jersey. Check our Google reviews before you call.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-red-600" />,
                  title: "24/7 Emergency Service",
                  body: "We answer at 2 AM because your furnace doesn't care what day it is.",
                },
                {
                  icon: <Wrench className="w-6 h-6 text-green-600" />,
                  title: "Free House Cleaning",
                  body: "Every new system install includes a complimentary professional house cleaning.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "0% Financing Up to $25K",
                  body: "Same-day approval on most applications. Don't delay comfort over budget.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-purple-600" />,
                  title: "Local Since 1998",
                  body: "Family-owned out of Wharton, NJ. We're your neighbors, not a call center.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1 text-sm md:text-base">{item.title}</div>
                    <div className="text-xs md:text-sm text-gray-600">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="font-bold text-gray-900 mb-3">Discounts Available For:</p>
              <div className="flex flex-wrap gap-2">
                {["First Responders", "Veterans & Active Military", "Seniors 65+"].map((g) => (
                  <span
                    key={g}
                    className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500" /> {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-10 md:py-14 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
                HVAC Questions from {town.name} Residents
              </h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5">
                    <p className="font-bold text-gray-900 mb-2 text-sm md:text-base">{faq.q}</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Need HVAC Help in {town.name}?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Call us or fill out the form — we respond fast, day or night.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12017875657"
                className="bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> (201) 787-5657
              </a>
              <Link
                href="/contact"
                className="bg-white/10 border-2 border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center"
              >
                Request Estimate
              </Link>
            </div>
            <p className="mt-5 text-blue-200 text-sm">
              Also serving: {town.nearbyTowns.slice(0, 3).join(", ")} and all of {town.county}
            </p>
            <p className="mt-2 text-blue-300 text-xs">
              <Link href="/service-areas" className="underline hover:text-white">
                ← View all service areas
              </Link>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
