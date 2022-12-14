export const slugify = (name, id) => {
    const slug = `${name.replaceAll(' ', '-').toLowerCase()}-${id.toLowerCase()}`
    return slug.trim()
}

export function toTitleCase (str) {
    let newTxt = str.replaceAll('-', ' ').replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    let newTxtArr = newTxt.trim().split(' ')
    newTxtArr.pop()
    return newTxtArr.join(' ')
};

export function lazyAll (node, params) {
	function observation(entries) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) return;
			const { target } = entry;
			target.setAttribute('src', target.dataset.src ? target.dataset.src : '')
			observer.unobserve(target)
		})
	} 
	
	const observer = new IntersectionObserver(observation, params);
	
	const imgs = node.querySelectorAll('img');
	imgs.forEach(img => observer.observe(img));
	
	return {
		onDestroy() {
			imgs.forEach(img => observer.unobserve(img));
		}
	}
}

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

export const lazyLoad = (image, src) => {
    const loaded = () => {
        // image.classList.add('visible')                          // doesn't work in REPL
        image.style.opacity = "1"                                 // REPL hack to apply loading animation
    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
        //   console.log('an image has loaded')                  // console log for REPL
        if (image.complete) {                               // check if instantly loaded
                image.src = src                              // replace placeholder src with the image src on observe
                loaded()        
            } else {
                image.addEventListener('load', loaded)          // if the image isn't loaded yet, add an event listener
            }
        }
    }, options)
    observer.observe(image)                                     // intersection observer

    return {
        destroy() {
            image.removeEventListener('load', loaded)           // clean up the event listener
        }
    }
}