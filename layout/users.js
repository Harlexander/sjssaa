import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar/Sidebar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import { ArrowRightCircleIcon, CreditCardIcon, CurrencyDollarIcon, DocumentDuplicateIcon, ExclamationCircleIcon, HomeIcon, UserCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCashRegister, faChartArea, faCube, faEnvelope, faHeadphones, faHeart, faHomeAlt, faMoneyCheckDollar, faNewspaper, faStar, faUpload, faUser, faUserAlt, faUserCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { UserProvider } from "../lib/user";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { 
    name: 'Overview', 
    href: '/dashboard', 
    icon:  <FontAwesomeIcon icon={faHomeAlt}/>, current: true 
  },
  { 
    name: 'Subscriptions', 
    href: '/dashboard/dues', 
    icon:  <FontAwesomeIcon icon={faMoneyCheckDollar}/>, current: true 
  },
  { 
    name: 'Events', 
    href: '/dashboard/events', 
    icon:  <FontAwesomeIcon icon={faCalendarDays}/>, current: true 
  },
  { 
    name: 'News and Updates', 
    href: '/dashboard/news', 
    icon:  <FontAwesomeIcon icon={faNewspaper}/>, current: true 
  },
  { 
    name: 'Job Board', 
    href: '/dashboard/job-board', 
    icon:  <FontAwesomeIcon icon={faUserDoctor}/>, current: true 
  },
]

const userNavigation = [
  { 
    name: 'Profile', 
    icon:  <FontAwesomeIcon icon={faUserAlt}/>,
    href: '/dashboard/profile' 
  }
]

export default function User({ children }) {
  return (
    <UserProvider>
         <div className="relative">
          <Sidebar 
          navigation={navigation}
          userNavigation={userNavigation}
          logo={"/logo.png"}
          />
          <div className="sidebar bg-gray-100 min-h-screen col-span-9 bg-blueGray-100">
            <DashboardHeader userNavigation={userNavigation} navigation={navigation}/>
              {children}
          </div>
         </div>      
    </UserProvider>
  )
}
