import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      {/*Section -> group related content, SEO can understand structure of a page better*/}
      <div className='home-content'>
        {/* header element is used to define introductory content or navigational links for a section 
        or page. It typically contains elements such as headings, logos, navigation menus, and 
        other introductory content.*/}
        <header className='home-header'>
          <HeaderBox
          type = "greeting"
          title = "Welcome"
          user = {loggedIn?.name || 'Guest'}
          subtext = "Access and manage your account and transactions effortlessly"
          />
        
          <TotalBalanceBox
          accounts ={[]}
          totalBanks = {1}
          totalCurrentBalance ={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 123.50 },{currentBalance: 500}]}
      />

    </section>
  )
}

export default Home