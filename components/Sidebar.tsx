export default function Sidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
      <div className="sticky top-20 space-y-6">
        <div className="bg-white rounded-2xl p-6 card-shadow text-center">
          <img src="/avatar.svg" alt="avatar" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <div className="text-lg font-semibold">Rayan Adlrdard</div>
          <div className="text-sm text-muted">Front-end Developer</div>
          <div className="mt-4 flex justify-center gap-3">
            <a href="#" className="text-primary">•</a>
            <a href="#" className="text-primary">•</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 card-shadow">
          <h3 className="text-sm font-semibold mb-3">Profile</h3>
          <ul className="text-sm text-muted space-y-2">
            <li><strong>Age:</strong> 24</li>
            <li><strong>Residence:</strong> BD</li>
            <li><strong>Freelance:</strong> Available</li>
            <li><strong>Address:</strong> Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 card-shadow">
          <h3 className="text-sm font-semibold mb-3">Languages</h3>
          <div className="space-y-3 text-sm">
            <div>Bangla <div className="w-full bg-gray-100 h-2 rounded mt-1"><div className="bg-primary h-2 rounded" style={{ width: '100%' }} /></div></div>
            <div>English <div className="w-full bg-gray-100 h-2 rounded mt-1"><div className="bg-primary h-2 rounded" style={{ width: '80%' }} /></div></div>
            <div>Spanish <div className="w-full bg-gray-100 h-2 rounded mt-1"><div className="bg-primary h-2 rounded" style={{ width: '60%' }} /></div></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 card-shadow">
          <h3 className="text-sm font-semibold mb-3">Skills</h3>
          <div className="space-y-3 text-sm">
            <div>HTML <div className="w-full bg-gray-100 h-2 rounded mt-1"><div className="bg-accent h-2 rounded" style={{ width: '90%' }} /></div></div>
            <div>CSS <div className="w-full bg-gray-100 h-2 rounded mt-1"><div className="bg-accent h-2 rounded" style={{ width: '85%' }} /></div></div>
            <div>React <div className="w-full bg-gray-100 h-2 rounded mt-1"><div className="bg-accent h-2 rounded" style={{ width: '80%' }} /></div></div>
          </div>
        </div>
      </div>
    </aside>
  )
}
