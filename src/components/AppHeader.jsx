import SearchFilm from './SearchFilm';
export default function AppHeader() {


    return (
        <>
            <header className="bg-black d-flex justify-content-between align-items-center p-2">
                <div className="back d-flex justify-content-center">
                    <div className="img-back">

                    </div>
                </div>

                <SearchFilm />

            </header>
        </>
    )
}