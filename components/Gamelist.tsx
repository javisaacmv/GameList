/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";

type Game = {
  id: number;
  title: string;
  totalDuration: string;
  remaining: string;
  timeEstimate: string;
  completionDate: string;
};

const GameList = () => {
  //   const games = [
  //     {
  //       id: 1,
  //       title: "DLC 'Futuros Redimidos' de Xenoblade Chronicles 3",
  //       totalDuration: "25 horas",
  //       remaining: "25 horas",
  //       timeEstimate: "1 semana",
  //       completionDate: "17 de noviembre de 2024",
  //     },
  //     {
  //       id: 2,
  //       title: "Gris",
  //       totalDuration: "4 horas",
  //       remaining: "4 horas",
  //       timeEstimate: "0.16 semanas",
  //       completionDate: "18 de noviembre de 2024",
  //     },
  //     {
  //       id: 3,
  //       title: "Elden Ring",
  //       totalDuration: "100 horas",
  //       remaining: "100 horas",
  //       timeEstimate: "4 semanas",
  //       completionDate: "16 de diciembre de 2024",
  //     },
  //     {
  //       id: 4,
  //       title: "Baldur's Gate 3",
  //       totalDuration: "80-100 horas",
  //       remaining: "80-100 horas",
  //       timeEstimate: "3.2-4 semanas",
  //       completionDate: "13 de enero de 2025",
  //     },
  //     {
  //       id: 5,
  //       title: "Celeste",
  //       totalDuration: "10 horas",
  //       remaining: "10 horas",
  //       timeEstimate: "0.4 semanas",
  //       completionDate: "16 de enero de 2025",
  //     },
  //     {
  //       id: 6,
  //       title: "Dark Souls (trilogía completa)",
  //       totalDuration: "100 horas",
  //       remaining: "100 horas",
  //       timeEstimate: "4 semanas",
  //       completionDate: "13 de febrero de 2025",
  //     },
  //     {
  //       id: 7,
  //       title: "Cuphead",
  //       totalDuration: "15 horas",
  //       remaining: "15 horas",
  //       timeEstimate: "0.6 semanas",
  //       completionDate: "20 de febrero de 2025",
  //     },
  //     {
  //       id: 8,
  //       title: "Cyberpunk 2077",
  //       totalDuration: "50 horas",
  //       remaining: "50 horas",
  //       timeEstimate: "2 semanas",
  //       completionDate: "5 de marzo de 2025",
  //     },
  //     {
  //       id: 9,
  //       title: "Batman Arkham Knight",
  //       totalDuration: "20 horas",
  //       remaining: "20 horas",
  //       timeEstimate: "0.8 semanas",
  //       completionDate: "12 de marzo de 2025",
  //     },
  //     {
  //       id: 10,
  //       title: "Dragon Quest XI",
  //       totalDuration: "55 horas",
  //       remaining: "55 horas",
  //       timeEstimate: "2.2 semanas",
  //       completionDate: "29 de marzo de 2025",
  //     },
  //     {
  //       id: 11,
  //       title: "Shin Megami Tensei V: Vengeance",
  //       totalDuration: "60 horas",
  //       remaining: "60 horas",
  //       timeEstimate: "2.4 semanas",
  //       completionDate: "19 de abril de 2025",
  //     },
  //     {
  //       id: 12,
  //       title: "Eastward",
  //       totalDuration: "30 horas",
  //       remaining: "30 horas",
  //       timeEstimate: "1.2 semanas",
  //       completionDate: "26 de abril de 2025",
  //     },
  //     {
  //       id: 13,
  //       title: "Metaphor ReFantazio",
  //       totalDuration: "50-60 horas",
  //       remaining: "50-60 horas",
  //       timeEstimate: "2-2.4 semanas",
  //       completionDate: "17 de mayo de 2025",
  //     },
  //     {
  //       id: 14,
  //       title: "Disco Elysium",
  //       totalDuration: "30 horas",
  //       remaining: "30 horas",
  //       timeEstimate: "1.2 semanas",
  //       completionDate: "24 de mayo de 2025",
  //     },
  //     {
  //       id: 15,
  //       title: "Resident Evil Remakes (2, 3 y 4)",
  //       totalDuration: "60 horas",
  //       remaining: "60 horas",
  //       timeEstimate: "2.4 semanas",
  //       completionDate: "7 de junio de 2025",
  //     },
  //     {
  //       id: 16,
  //       title: "Dragon Age Inquisition",
  //       totalDuration: "60 horas",
  //       remaining: "60 horas",
  //       timeEstimate: "2.4 semanas",
  //       completionDate: "28 de junio de 2025",
  //     },
  //     {
  //       id: 17,
  //       title: "Horizon Zero Dawn",
  //       totalDuration: "40 horas",
  //       remaining: "40 horas",
  //       timeEstimate: "1.6 semanas",
  //       completionDate: "12 de julio de 2025",
  //     },
  //     {
  //       id: 18,
  //       title: "God of War (2018)",
  //       totalDuration: "25 horas",
  //       remaining: "25 horas",
  //       timeEstimate: "1 semana",
  //       completionDate: "19 de julio de 2025",
  //     },
  //     {
  //       id: 19,
  //       title: "Tales of Arise",
  //       totalDuration: "40 horas",
  //       remaining: "40 horas",
  //       timeEstimate: "1.6 semanas",
  //       completionDate: "2 de agosto de 2025",
  //     },
  //     {
  //       id: 20,
  //       title: "Yakuza 0",
  //       totalDuration: "35 horas",
  //       remaining: "35 horas",
  //       timeEstimate: "1.4 semanas",
  //       completionDate: "9 de agosto de 2025",
  //     },
  //     {
  //       id: 21,
  //       title: "Yakuza Kiwami",
  //       totalDuration: "20 horas",
  //       remaining: "20 horas",
  //       timeEstimate: "0.8 semanas",
  //       completionDate: "16 de agosto de 2025",
  //     },
  //     {
  //       id: 22,
  //       title: "Yakuza Kiwami 2",
  //       totalDuration: "30 horas",
  //       remaining: "30 horas",
  //       timeEstimate: "1.2 semanas",
  //       completionDate: "23 de agosto de 2025",
  //     },
  //     {
  //       id: 23,
  //       title: "Yakuza 3",
  //       totalDuration: "15 horas",
  //       remaining: "15 horas",
  //       timeEstimate: "0.6 semanas",
  //       completionDate: "30 de agosto de 2025",
  //     },
  //     {
  //       id: 24,
  //       title: "Yakuza 4",
  //       totalDuration: "20 horas",
  //       remaining: "20 horas",
  //       timeEstimate: "0.8 semanas",
  //       completionDate: "6 de septiembre de 2025",
  //     },
  //     {
  //       id: 25,
  //       title: "Yakuza 5",
  //       totalDuration: "50 horas",
  //       remaining: "50 horas",
  //       timeEstimate: "2 semanas",
  //       completionDate: "20 de septiembre de 2025",
  //     },
  //     {
  //       id: 26,
  //       title: "Yakuza 6",
  //       totalDuration: "20 horas",
  //       remaining: "20 horas",
  //       timeEstimate: "0.8 semanas",
  //       completionDate: "27 de septiembre de 2025",
  //     },
  //     {
  //       id: 27,
  //       title: "Yakuza: Like a Dragon",
  //       totalDuration: "45 horas",
  //       remaining: "45 horas",
  //       timeEstimate: "1.8 semanas",
  //       completionDate: "11 de octubre de 2025",
  //     },
  //     {
  //       id: 28,
  //       title: "Like a Dragon: Ishin!",
  //       totalDuration: "30 horas",
  //       remaining: "30 horas",
  //       timeEstimate: "1.2 semanas",
  //       completionDate: "18 de octubre de 2025",
  //     },
  //     {
  //       id: 29,
  //       title: "Like a Dragon Gaiden: The Man Who Erased His Name",
  //       totalDuration: "15 horas",
  //       remaining: "15 horas",
  //       timeEstimate: "0.6 semanas",
  //       completionDate: "25 de octubre de 2025",
  //     },
  //   ];

  const [games, setGames] = useState<Game[]>([]);

  console.log(games);

  const fetchGames = async () => {
    try {
      const response = await fetch("/api/getGames");
      const data: Game[] = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  // Función para manejar la carga del archivo JSON
  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        await saveGamesToDB(jsonData);
        alert("Datos cargados a la base de datos correctamente");
        await fetchGames();
      } catch (error) {
        console.error("Error al cargar el JSON:", error);
        alert("Hubo un error al cargar el JSON");
      }
    };
    reader.readAsText(file);
  };

  // Función para guardar cada juego en la base de datos
  const saveGamesToDB = async (gamesData: Game[]) => {
    try {
      const response = await fetch("/api/saveGames", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gamesData),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error al guardar los juegos:", error);
    }
  };

  const deleteGame = async (id: number) => {
    try {
      const response = await fetch(`/api/deleteGame?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete game");
      }
      // Filtrar el juego eliminado del estado local
      setGames(games.filter((game) => game.id !== id));
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
        Lista de Videojuegos Pendientes
      </h2>
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 mb-4"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                #
              </th>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                Juego
              </th>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                Duración Total
              </th>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                Duración Restante
              </th>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                Tiempo Restante
              </th>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                Fecha de Finalización
              </th>
              <th className="py-2 px-4 bg-gray-700 text-gray-300 font-semibold border border-gray-600 whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border border-gray-600 text-center text-gray-300 whitespace-nowrap">
                  {game.id}
                </td>
                <td className="py-2 px-4 border border-gray-600 font-semibold text-gray-300 whitespace-nowrap">
                  {game.title}
                </td>
                <td className="py-2 px-4 border border-gray-600 text-center text-gray-300 whitespace-nowrap">
                  {game.totalDuration}
                </td>
                <td className="py-2 px-4 border border-gray-600 text-center text-gray-300 whitespace-nowrap">
                  {game.remaining}
                </td>
                <td className="py-2 px-4 border border-gray-600 text-center text-gray-300 whitespace-nowrap">
                  {game.timeEstimate}
                </td>
                <td className="py-2 px-4 border border-gray-600 text-center text-gray-300 whitespace-nowrap">
                  {game.completionDate}
                </td>
                <td className="py-2 px-4 border border-gray-600 text-center">
                  <button
                    onClick={() => deleteGame(game.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameList;
