

    document.querySelector(".work-item-home") &&
        $(".work-item").each(function () {
            var t = $(this).find(".work-item__image"),
                e = $(this).find(".work-media");
            gsap.to(t, { y: "0", ease: "none", duration: 1, scrollTrigger: { trigger: this, scrub: !0, start: "top bottom", end: "top 25%" } }),
                gsap.to(e, { scale: 1, ease: "none", duration: 1, scrollTrigger: { trigger: this, scrub: !0, start: "top bottom", end: "top 25%" } });
        }),
        document.querySelector(".cover--formular") &&
            ($("#form_1_select").click(function () {
                $(this).addClass("active"), $("#form_2_select").removeClass("active"), $("#form_1").addClass("active"), $("#form_2").removeClass("active");
            }),
            $("#form_2_select").click(function () {
                $(this).addClass("active"), $("#form_1_select").removeClass("active"), $("#form_2").addClass("active"), $("#form_1").removeClass("active");
            })),
        gsap.utils.toArray(".Sirv[data-src]").forEach((t) => {
            ScrollTrigger.create({
                trigger: t,
                start: "top 200%",
                once: !0,
                onEnter: (e) => {
                    t.addEventListener("load", () => ScrollTrigger.refresh()), window.dispatchEvent(new Event("scroll"));
                },
            });
        });


