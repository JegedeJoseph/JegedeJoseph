export default function GitHubStats() {
  const username = 'JegedeJoseph'

  return (
    <section id="github" className="py-12">
      <h2 className="section-title">GitHub Activity</h2>

      <div className="flex flex-col gap-4">
        {/* Streak card */}
        <div className="card p-5 overflow-hidden">
          <p className="text-xs text-muted uppercase font-semibold tracking-wide mb-4">Contribution Streak</p>
          <div className="flex justify-center">
            <img
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight-duo&hide_border=true&background=FFFFFF&ring=4F46E5&fire=3B82F6&currStreakLabel=4F46E5&border_radius=12`}
              alt="GitHub Streak"
              className="w-full max-w-sm rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Top languages */}
          <div className="card p-5">
            <p className="text-xs text-muted uppercase font-semibold tracking-wide mb-4">Top Languages</p>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true&title_color=4F46E5&text_color=374151&bg_color=FFFFFF&langs_count=6`}
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* GitHub stats */}
          <div className="card p-5">
            <p className="text-xs text-muted uppercase font-semibold tracking-wide mb-4">GitHub Stats</p>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&title_color=4F46E5&icon_color=3B82F6&text_color=374151&bg_color=FFFFFF&count_private=true`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
