import NavBar from "@/app/components/NavBar";
import Image from 'next/image';
import profilePic from '/public/me.jpg'

export default function Home() {
  return (
      <body>
        <NavBar />

        <div className="flex justify-center">
            <h1 className="text-3xl pt-10 mobile:pt-5">Taylor Hoyt</h1>
        </div>

        <div className="flex justify-center ml-auto mr-auto w-3/4 mobile:w-4/5 desktop:p-10 mobile:pb-5 mobile:pt-5">
            <Image
                src={profilePic}
                alt="picture of me"
                className="w-2/5 mobile:w-full border-4 border-white"
            />
        </div>



        <div className="flex justify-center w-1/2 mobile:w-4/5 ml-auto mr-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Lectus nulla at volutpat diam ut venenatis tellus in. Lacus suspendisse faucibus interdum posuere lorem ipsum. Velit dignissim sodales ut eu sem integer vitae justo eget. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Enim facilisis gravida neque convallis a cras semper auctor neque. Et tortor at risus viverra adipiscing at. Feugiat nibh sed pulvinar proin gravida hendrerit. Proin sed libero enim sed.

                Nullam ac tortor vitae purus faucibus ornare suspendisse sed. In ante metus dictum at. Nibh venenatis cras sed felis eget velit aliquet. Etiam tempor orci eu lobortis. Amet venenatis urna cursus eget nunc. Sit amet nisl suscipit adipiscing bibendum. Suspendisse interdum consectetur libero id faucibus nisl. Purus sit amet volutpat consequat mauris. Lobortis elementum nibh tellus molestie nunc non. Augue lacus viverra vitae congue eu. Risus pretium quam vulputate dignissim suspendisse in est ante in. Ante metus dictum at tempor commodo ullamcorper. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Amet nisl purus in mollis nunc sed. Nisl suscipit adipiscing bibendum est ultricies.

                Ac ut consequat semper viverra nam libero justo laoreet. Amet luctus venenatis lectus magna fringilla. Scelerisque in dictum non consectetur a erat nam at. Nunc sed augue lacus viverra vitae congue eu. Tortor dignissim convallis aenean et tortor at risus viverra. Ac tortor dignissim convallis aenean et. Tempus quam pellentesque nec nam. Proin sed libero enim sed. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Urna nunc id cursus metus. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Cursus risus at ultrices mi tempus. Quisque id diam vel quam elementum pulvinar etiam.

                Ante in nibh mauris cursus mattis molestie. At varius vel pharetra vel turpis nunc eget lorem. Fermentum leo vel orci porta. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Amet nisl purus in mollis. Leo vel orci porta non pulvinar. Sed vulputate mi sit amet mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Integer eget aliquet nibh praesent tristique magna. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae congue mauris rhoncus aenean vel. In aliquam sem fringilla ut morbi tincidunt augue interdum. Tristique senectus et netus et. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Adipiscing elit ut aliquam purus sit amet luctus. Mauris pellentesque pulvinar pellentesque habitant.

                Ut sem viverra aliquet eget sit. Quis lectus nulla at volutpat diam ut. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Amet nulla facilisi morbi tempus iaculis urna. Rutrum quisque non tellus orci ac auctor augue. Dolor sit amet consectetur adipiscing elit duis tristique. Malesuada fames ac turpis egestas sed tempus urna. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Lorem ipsum dolor sit amet. Dolor sed viverra ipsum nunc. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. A arcu cursus vitae congue mauris. Fringilla ut morbi tincidunt augue. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Neque sodales ut etiam sit. Felis donec et odio pellentesque. Lorem mollis aliquam ut porttitor leo. Eu nisl nunc mi ipsum faucibus.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Lectus nulla at volutpat diam ut venenatis tellus in. Lacus suspendisse faucibus interdum posuere lorem ipsum. Velit dignissim sodales ut eu sem integer vitae justo eget. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Enim facilisis gravida neque convallis a cras semper auctor neque. Et tortor at risus viverra adipiscing at. Feugiat nibh sed pulvinar proin gravida hendrerit. Proin sed libero enim sed.

                Nullam ac tortor vitae purus faucibus ornare suspendisse sed. In ante metus dictum at. Nibh venenatis cras sed felis eget velit aliquet. Etiam tempor orci eu lobortis. Amet venenatis urna cursus eget nunc. Sit amet nisl suscipit adipiscing bibendum. Suspendisse interdum consectetur libero id faucibus nisl. Purus sit amet volutpat consequat mauris. Lobortis elementum nibh tellus molestie nunc non. Augue lacus viverra vitae congue eu. Risus pretium quam vulputate dignissim suspendisse in est ante in. Ante metus dictum at tempor commodo ullamcorper. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Amet nisl purus in mollis nunc sed. Nisl suscipit adipiscing bibendum est ultricies.

                Ac ut consequat semper viverra nam libero justo laoreet. Amet luctus venenatis lectus magna fringilla. Scelerisque in dictum non consectetur a erat nam at. Nunc sed augue lacus viverra vitae congue eu. Tortor dignissim convallis aenean et tortor at risus viverra. Ac tortor dignissim convallis aenean et. Tempus quam pellentesque nec nam. Proin sed libero enim sed. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Urna nunc id cursus metus. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Cursus risus at ultrices mi tempus. Quisque id diam vel quam elementum pulvinar etiam.

                Ante in nibh mauris cursus mattis molestie. At varius vel pharetra vel turpis nunc eget lorem. Fermentum leo vel orci porta. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Amet nisl purus in mollis. Leo vel orci porta non pulvinar. Sed vulputate mi sit amet mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Integer eget aliquet nibh praesent tristique magna. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Vitae congue mauris rhoncus aenean vel. In aliquam sem fringilla ut morbi tincidunt augue interdum. Tristique senectus et netus et. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Adipiscing elit ut aliquam purus sit amet luctus. Mauris pellentesque pulvinar pellentesque habitant.

                Ut sem viverra aliquet eget sit. Quis lectus nulla at volutpat diam ut. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Amet nulla facilisi morbi tempus iaculis urna. Rutrum quisque non tellus orci ac auctor augue. Dolor sit amet consectetur adipiscing elit duis tristique. Malesuada fames ac turpis egestas sed tempus urna. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Lorem ipsum dolor sit amet. Dolor sed viverra ipsum nunc. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. A arcu cursus vitae congue mauris. Fringilla ut morbi tincidunt augue. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Neque sodales ut etiam sit. Felis donec et odio pellentesque. Lorem mollis aliquam ut porttitor leo. Eu nisl nunc mi ipsum faucibus.
            </p>
        </div>
      </body>
  )
}
