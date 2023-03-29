import './styles/main.scss';
import { ContactUs } from './components/ContactUs';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactUs />
    </div>
  );
}

export default App

// if it was a real SPA i would implement a routing the followng way:
// 1. I would create a file with constans of paths.
// 2.       
{/* <Routes>
<Route path={homePagePath} element={<HomePage />} />
<Route path={featuresPagePath} element={<Features />} />
<Route path={blogInPagePath} element={<BlogPage />} />
<Route path={shopPagePath} element={<ShopPage />} />
<Route path={aboutPagePath} element={<AboutPage />} />
<Route path={contactPagePath} element={<ContactPage />} />
<Route path={profilePagePath} element={<ProfilePage />} />
<Route path={cartPagePath} element={<CartPage />} />
<Route path="/*" element={<PageNotFound />} />
</Routes> */}
