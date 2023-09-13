import { SiteNavigationBar, NavLinks, PageNavigationBar } from './lib'

export default function Home() {
  return (
    <main>
      <SiteNavigationBar homePage={ '/' } brand={ "TAPS Club @ GGC" }>
        <NavLinks link={ '' }>Upcoming Events</NavLinks>
        <NavLinks link={ '' }>Past Events</NavLinks>
        <NavLinks link={ '' }>Gallery</NavLinks>
        <NavLinks link={ '' }>Contact Us</NavLinks>
      </SiteNavigationBar>
      {/* <PageNavigationBar>
        <NavLinks link={ '' }>Course</NavLinks>
        <NavLinks link={ '' }>About Us</NavLinks>
      </PageNavigationBar> */}
      <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lacinia enim. Nullam dapibus maximus massa, vel rhoncus turpis bibendum quis. Aliquam non viverra eros. Nam purus ipsum, aliquet a lorem sed, lobortis commodo nisl. Cras iaculis tempor eros, sed semper risus tempus eu. Vestibulum fermentum id tortor at vulputate. Mauris finibus elementum tellus, eu venenatis purus condimentum sit amet. Duis luctus massa a libero posuere, ut vestibulum felis sagittis. Nunc luctus, augue quis laoreet maximus, massa dolor convallis tortor, id vulputate nibh quam vitae nibh. Cras in pellentesque ipsum. Morbi vel lectus odio. Vestibulum porta egestas maximus.

Praesent orci sem, molestie eget ipsum sed, porttitor vestibulum dolor. In fringilla lorem neque, in placerat justo auctor quis. Pellentesque vel eleifend ligula, a fermentum nisl. Curabitur eget erat elit. Nunc erat nisl, auctor non magna ut, rutrum placerat augue. Quisque consequat dictum nulla, nec gravida nisi euismod sed. Ut sodales blandit sapien, eu efficitur metus. Suspendisse a lacinia ex. Ut varius tellus a ipsum interdum finibus. Duis pharetra consequat mauris vitae maximus.

Suspendisse viverra sodales ante quis ornare. Phasellus aliquet lacinia nisi, vitae euismod mauris egestas quis. Proin placerat, ligula eu tempus condimentum, enim risus tincidunt lorem, nec lobortis nibh nisl sit amet purus. Quisque ultrices diam sit amet mi imperdiet, nec ultrices lacus commodo. Vestibulum velit neque, efficitur in aliquet placerat, iaculis nec eros. Fusce viverra velit in arcu facilisis facilisis. Fusce pharetra interdum ornare. Nulla malesuada nunc mauris, sed posuere lorem luctus sed. Aenean vel nunc ullamcorper, tristique lectus at, interdum neque. In et finibus felis. Donec varius tempor velit. Phasellus vulputate lobortis diam. Duis id nibh ut libero laoreet tempus. Vestibulum rutrum mi ligula, a pharetra ante pellentesque non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Aenean sed efficitur nisl. Nam convallis urna ante, eget lacinia nunc fermentum vitae. Mauris lobortis mattis luctus. Phasellus finibus, metus non pellentesque sollicitudin, neque tellus bibendum dolor, quis ultricies est nisi ac ante. Pellentesque tempus at dui id consequat. Ut finibus efficitur suscipit. Nam sollicitudin maximus urna et dignissim. Praesent feugiat libero eu venenatis venenatis. In hac habitasse platea dictumst. Curabitur dictum nisi at tortor porttitor, nec aliquam mi gravida. Integer sit amet porta ex, sed pretium sapien. In pulvinar tellus sit amet egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at finibus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel porttitor est.

Vivamus imperdiet dolor quis mi consequat eleifend. Nunc auctor lobortis turpis, quis sagittis odio porttitor sed. Cras malesuada volutpat felis sit amet dignissim. Quisque a porta quam. Quisque iaculis vel risus at elementum. Nunc at efficitur diam. Phasellus faucibus tellus sed libero rutrum facilisis.

Nunc in posuere mauris, quis pretium diam. Duis quis massa dui. Donec tempor venenatis porttitor. Morbi et nisl et eros vehicula facilisis. Quisque semper leo mattis nisl auctor, vitae fermentum augue sollicitudin. Nulla luctus mauris purus, sit amet elementum nisl commodo vitae. Pellentesque ac nibh quis nisi consectetur fermentum in a ligula. Sed interdum a lectus at venenatis. Curabitur facilisis mollis tincidunt. Duis elementum tincidunt justo, nec ornare turpis finibus id. Praesent fermentum magna id scelerisque sodales. Mauris et massa sed nisi finibus semper sit amet eu urna. Integer at blandit sapien.

Integer egestas id velit eu venenatis. Vivamus nec nisi consequat, faucibus sem et, tempor ipsum. Ut in ultricies urna. Curabitur lacinia porta interdum. Vestibulum luctus vestibulum ultrices. Curabitur quis felis at lectus ornare efficitur eu quis tortor. Curabitur eu lorem sodales, tempus odio at, venenatis augue.

Quisque at mauris urna. Nulla ac blandit velit. Pellentesque placerat tincidunt dolor, sit amet tincidunt turpis sodales eget. Vivamus pretium ex ultrices ipsum aliquam, viverra aliquam lectus rhoncus. Phasellus ut enim ante. Ut commodo et diam sit amet sodales. Suspendisse tellus neque, euismod et elit eget, elementum fringilla augue. Mauris rhoncus arcu eget pharetra rhoncus. In efficitur quam sed vehicula congue. Nullam mi est, consequat tempor dolor vitae, viverra auctor nulla. 



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lacinia enim. Nullam dapibus maximus massa, vel rhoncus turpis bibendum quis. Aliquam non viverra eros. Nam purus ipsum, aliquet a lorem sed, lobortis commodo nisl. Cras iaculis tempor eros, sed semper risus tempus eu. Vestibulum fermentum id tortor at vulputate. Mauris finibus elementum tellus, eu venenatis purus condimentum sit amet. Duis luctus massa a libero posuere, ut vestibulum felis sagittis. Nunc luctus, augue quis laoreet maximus, massa dolor convallis tortor, id vulputate nibh quam vitae nibh. Cras in pellentesque ipsum. Morbi vel lectus odio. Vestibulum porta egestas maximus.

Praesent orci sem, molestie eget ipsum sed, porttitor vestibulum dolor. In fringilla lorem neque, in placerat justo auctor quis. Pellentesque vel eleifend ligula, a fermentum nisl. Curabitur eget erat elit. Nunc erat nisl, auctor non magna ut, rutrum placerat augue. Quisque consequat dictum nulla, nec gravida nisi euismod sed. Ut sodales blandit sapien, eu efficitur metus. Suspendisse a lacinia ex. Ut varius tellus a ipsum interdum finibus. Duis pharetra consequat mauris vitae maximus.

Suspendisse viverra sodales ante quis ornare. Phasellus aliquet lacinia nisi, vitae euismod mauris egestas quis. Proin placerat, ligula eu tempus condimentum, enim risus tincidunt lorem, nec lobortis nibh nisl sit amet purus. Quisque ultrices diam sit amet mi imperdiet, nec ultrices lacus commodo. Vestibulum velit neque, efficitur in aliquet placerat, iaculis nec eros. Fusce viverra velit in arcu facilisis facilisis. Fusce pharetra interdum ornare. Nulla malesuada nunc mauris, sed posuere lorem luctus sed. Aenean vel nunc ullamcorper, tristique lectus at, interdum neque. In et finibus felis. Donec varius tempor velit. Phasellus vulputate lobortis diam. Duis id nibh ut libero laoreet tempus. Vestibulum rutrum mi ligula, a pharetra ante pellentesque non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Aenean sed efficitur nisl. Nam convallis urna ante, eget lacinia nunc fermentum vitae. Mauris lobortis mattis luctus. Phasellus finibus, metus non pellentesque sollicitudin, neque tellus bibendum dolor, quis ultricies est nisi ac ante. Pellentesque tempus at dui id consequat. Ut finibus efficitur suscipit. Nam sollicitudin maximus urna et dignissim. Praesent feugiat libero eu venenatis venenatis. In hac habitasse platea dictumst. Curabitur dictum nisi at tortor porttitor, nec aliquam mi gravida. Integer sit amet porta ex, sed pretium sapien. In pulvinar tellus sit amet egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi at finibus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel porttitor est.

Vivamus imperdiet dolor quis mi consequat eleifend. Nunc auctor lobortis turpis, quis sagittis odio porttitor sed. Cras malesuada volutpat felis sit amet dignissim. Quisque a porta quam. Quisque iaculis vel risus at elementum. Nunc at efficitur diam. Phasellus faucibus tellus sed libero rutrum facilisis.

Nunc in posuere mauris, quis pretium diam. Duis quis massa dui. Donec tempor venenatis porttitor. Morbi et nisl et eros vehicula facilisis. Quisque semper leo mattis nisl auctor, vitae fermentum augue sollicitudin. Nulla luctus mauris purus, sit amet elementum nisl commodo vitae. Pellentesque ac nibh quis nisi consectetur fermentum in a ligula. Sed interdum a lectus at venenatis. Curabitur facilisis mollis tincidunt. Duis elementum tincidunt justo, nec ornare turpis finibus id. Praesent fermentum magna id scelerisque sodales. Mauris et massa sed nisi finibus semper sit amet eu urna. Integer at blandit sapien.

Integer egestas id velit eu venenatis. Vivamus nec nisi consequat, faucibus sem et, tempor ipsum. Ut in ultricies urna. Curabitur lacinia porta interdum. Vestibulum luctus vestibulum ultrices. Curabitur quis felis at lectus ornare efficitur eu quis tortor. Curabitur eu lorem sodales, tempus odio at, venenatis augue.

Quisque at mauris urna. Nulla ac blandit velit. Pellentesque placerat tincidunt dolor, sit amet tincidunt turpis sodales eget. Vivamus pretium ex ultrices ipsum aliquam, viverra aliquam lectus rhoncus. Phasellus ut enim ante. Ut commodo et diam sit amet sodales. Suspendisse tellus neque, euismod et elit eget, elementum fringilla augue. Mauris rhoncus arcu eget pharetra rhoncus. In efficitur quam sed vehicula congue. Nullam mi est, consequat tempor dolor vitae, viverra auctor nulla. 
      </p>
    </main>
  )
}
